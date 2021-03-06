import React, { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Howl } from 'howler';
import "./style/App.css";

// https://actions.google.com/sounds/v1/alarms/medium_bell_ringing_near.ogg

toast.configure();

const audio = "https://actions.google.com/sounds/v1/alarms/medium_bell_ringing_near.ogg";

class AlarmClock extends Component {
  constructor() {
    super();
    this.state = {
      currentTime: '',
      alarmTime: ''
    };
    this.setAlarmTime = this.setAlarmTime.bind(this);
  }

  componentDidMount(){
    this.clock = setInterval(
      () => this.setCurrentTime(),
      1000
    )
    this.interval = setInterval(
      () => this.checkAlarmClock(),
    1000)
  }

  componentWillUnmount(){
    clearInterval(this.clock);
    clearInterval(this.interval);
  }

  setCurrentTime(){
    this.setState({
      currentTime: new Date().toLocaleTimeString('en-US', { hour12: false })
    });
  }

  setAlarmTime(event) {
    event.preventDefault();
    const inputAlarmTimeModified = event.target.value + ':00'
    this.setState({
      alarmTime: inputAlarmTimeModified
    })
  }

  checkAlarmClock(){
    if(this.state.alarmTime === 'undefined' || !this.state.alarmTime) {
      this.alarmMessage = "Set your exercise alarm.";
    } else {
      this.alarmMessage = "Your alarm is set for " + this.state.alarmTime + ".";
      if(this.state.currentTime === this.state.alarmTime) {
        this.soundPlay(audio);
        toast.warn('Please do your exercise !', {position: toast.POSITION.BOTTOM_CENTER, autoClose: false});
        // alert("Please do your exercise!");
      } else {
        this.alarmMessage = `Your next exercise is coming in ${ this.calculateMinutes() } minutes`;
      }
    }   
  }

  calculateMinutes() {
    const nowArray = this.state.currentTime.split(":");
    console.log(nowArray);
    const alarmArray = this.state.alarmTime.split(":");
    console.log(alarmArray);
    let nowHour = parseInt(nowArray[0]);
    let alarmHour = parseInt(alarmArray[0]);
    let nowMinute = parseInt(nowArray[1]);
    let alarmMinute = parseInt(alarmArray[1]);
    let t1 = nowHour * 60 + nowMinute;
    let t2 = alarmHour * 60 + alarmMinute;
    return t1 < t2 ? t2 - t1 : (t1 - t2) % 720;
  }

  soundPlay = (src) => {
    const sound = new Howl({
      src,
      html5: true
    });
    sound.play();
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <h1 className="alarm-info">Your exercise Alarm Clock</h1>
          <h2 className="alarm-info">
            It is {this.state.currentTime}.
          </h2>
          <h2 className="alarm-info">
            {this.alarmMessage}
          </h2>
          <form>
            <input type="time" onChange={this.setAlarmTime}></input>
          </form>
        </div>
        <div className="alarm-icon">
          <svg width="10em" height="10em" viewBox="0 0 16 16" className="bi bi-alarm" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M8 15A6 6 0 1 0 8 3a6 6 0 0 0 0 12zm0 1A7 7 0 1 0 8 2a7 7 0 0 0 0 14z"/>
            <path fillRule="evenodd" d="M8 4.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.053.224l-1.5 3a.5.5 0 1 1-.894-.448L7.5 8.882V5a.5.5 0 0 1 .5-.5z"/>
            <path d="M.86 5.387A2.5 2.5 0 1 1 4.387 1.86 8.035 8.035 0 0 0 .86 5.387zM11.613 1.86a2.5 2.5 0 1 1 3.527 3.527 8.035 8.035 0 0 0-3.527-3.527z"/>
            <path fillRule="evenodd" d="M11.646 14.146a.5.5 0 0 1 .708 0l1 1a.5.5 0 0 1-.708.708l-1-1a.5.5 0 0 1 0-.708zm-7.292 0a.5.5 0 0 0-.708 0l-1 1a.5.5 0 0 0 .708.708l1-1a.5.5 0 0 0 0-.708zM5.5.5A.5.5 0 0 1 6 0h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z"/>
            <path d="M7 1h2v2H7V1z"/>
          </svg>
        </div>
      </React.Fragment>
    );
  }
}

export default AlarmClock;
