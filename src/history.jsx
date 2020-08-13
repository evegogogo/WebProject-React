import React, { Component } from 'react';
import { getFoodsQuery, getExercisesQuery } from './queries/queries';
import { graphql } from 'react-apollo';
import * as compose from 'lodash.flowright';
import AuthContext from './context/auth-context';

class History extends Component {
  static contextType = AuthContext;
  state = {
    totalCalories: 0
  }
  
  displayInfo() {
    var foodsInfo = this.props.getFoodsQuery;
    var exercisesInfo = this.props.getExercisesQuery;
    console.log(foodsInfo);
    
    // this.sortByDate(foodsInfo.foods);
    if (foodsInfo.loading || exercisesInfo.loading) {
      console.log("loading data");
    } else {
      const info = this.sortByDate(foodsInfo.foods);
      const info2 = this.sortByDate(exercisesInfo.exercises);
      const info3 = [...info, ...info2];
      const sorted = this.sortByDate(info3);
      const userId = this.context.id;
      // const val = sorted.reduce((prev, cur) => prev + cur.calories, 0);
      // this.setState({totalCalories : val});
      console.log("info3:", sorted);
      return (sorted.filter(i => {return i.user === null ? "" : i.user.id === userId}).map(e => (
        <tr key={e.id}>
          <td className="col">{e.date}</td>
          <td className="col">{ this.getType(e) === 'food' ? e.name + " " + e.status : "None" }</td>
          <td className="col">{this.getType(e) === 'exercise' ? e.name + " " + e.status : "None"}</td>
          <td className="col">{this.getType(e) === 'food' ? e.calories : - e.calories }</td>
        </tr>
      )));
    }
  };

  getType(e) {
    if (e.status === 'finished' || e.status === 'unfinished') {
      return 'exercise';
    } else {
      return 'food';
    }
  };

  displayExercise() {
    var exercisesInfo = this.props.getExercisesQuery;
    const userId = this.context.id;
    console.log(exercisesInfo);
    if (exercisesInfo.loading) {
      console.log(0);
    } else {
      const info = this.sortByDate(exercisesInfo.exercises);
      return (info.filter(i => {return i.user === null ? "" : i.user.id === userId}).map(e => (
        <tr key={e.id}>
          <td className="col">{e.name}</td>
          <td className="col">{e.calories}</td>
        </tr>
      )));
    }
  }

  sortByDate(arr) {
    /* const newArr = [];
    let newItem = 0;
    for (let item of arr) {
      newItem = [{...item, time : new Date(item.date)}];
      newArr.push(newItem);
    }
    const sortedArray = newArr.sort((a, b) => b.time - a.time);
    console.log(sortedArray); */
    arr.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    })
    console.log(arr);
    return arr;
  }

  calculateTotal() {
    var foodsInfo = this.props.getFoodsQuery;
    var exercisesInfo = this.props.getExercisesQuery;
    const userId = this.context.id;
    if (foodsInfo.loading || exercisesInfo.loading) {
      console.log("loading data");
    } else {
      const info = this.sortByDate(foodsInfo.foods);
      const info2 = this.sortByDate(exercisesInfo.exercises);
      const info3 = [...info, ...info2];
      const sorted = this.sortByDate(info3);
      const ownData = sorted.filter(i => {return i.user === null ? "" : i.user.id === userId});
      let total = 0;
      for (let d of ownData) {
        if (this.getType(d) === 'food') {
          total += d.calories;
        } else {
          if (d.status === 'finished') {
            total -= d.calories;
          }
        }
      }
      return total;
      // const val = sorted.filter(i => {return i.user === null ? "" : i.user.id === userId}).reduce((prev, cur) => this.getType(cur) === 'food' ? prev + cur.calories : prev - cur.calories, 0);
      // return val;
    }
  }

  render() { 

    return ( 
      <React.Fragment>
        <p className="note">
          Your Recent Total Net Calories Are: {this.calculateTotal()}
          <span />
          {this.calculateTotal() > 0 ? "       You should do more exercises" : "        Well done!"}
        </p>
        <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Your Meal</th>
              <th scope="col">Your Exercise</th>
              <th scope="col">Net Calories</th>
            </tr>
          </thead>
          <tbody>
            {/* <tr>
              <th scope="row">1</th>
              <td>Apple</td>
              <td>basketball</td>
              <td>50</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>banana</td>
              <td>soccer</td>
              <td>100</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>pork belly</td>
              <td>tennis</td>
              <td>700</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>steak + pork belly + ice cream</td>
              <td></td>
              <td>-1000</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td></td>
              <td>jogging</td>
              <td>200</td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td colSpan="2">ice cream + chocolate bar + milk</td>
              <td>-400</td>
            </tr>
            <tr>
              <th scope="row">7</th>
              <td colSpan="2">fries + burger + code</td>
              <td>-650</td>
            </tr> */}
            {this.displayInfo()}
          </tbody>
        </table>
      </div>
    </React.Fragment>
     );
  }
};
 

export default compose(
  graphql(getFoodsQuery, {name: "getFoodsQuery"}),
  graphql(getExercisesQuery, {name: "getExercisesQuery"})
)(History);

