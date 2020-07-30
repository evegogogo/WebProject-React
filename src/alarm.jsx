import React, { Component } from 'react';
import "./App.css";

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
        alert("Please do your exercise!");
      } else {
        this.alarmMessage = `Your next exercise is coming in xx minutes`;
      }
    }   
  }

  render() {
    return (
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
    );
  }
}

export default AlarmClock;
