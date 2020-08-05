import React, { Component } from "react";
import { getExercises } from "./services/fakeExerciseService";
import { graphql } from 'react-apollo';
import Like from "./components/like";
import { getExercisesQuery } from './queries/queries';
import AddExercise from "./addExercise";
import "./style/App.css";



class Exercises extends Component {
  state = {
    exercises: getExercises()
  };

  handleDelete = exercise => {
    const exercises = this.state.exercises.filter(e => e._id !== exercise._id);
    this.setState({ exercises });
  };

  displayExercises() {
    var data = this.props.data;
    if (data.loading) {
      return (<tr><td colSpan="6">Loading Exercises...</td></tr>)
    } else {
      return (data.exercises.map(e => (
        <tr key={e.id}>
          <td className="col">{e.name}</td>
          <td className="col">{e.calories}</td>
          <td className="col">{e.status}</td>
          <td className="col">{e.due}</td>
          <td>
            <Like liked={e.liked} onClick={() => this.handleLike(e)}/>
          </td>
          <td className="col"><button onClick={() => this.handleDelete(e)} className="btn btn-danger btn-sm">Delete</button></td>
        </tr>
      )))
    }
  };

  countExercises() {
    var data = this.props.data;
    if (data.loading) {
      return 0;
    } else {
      return data.exercises.length;
    }
  }


  handleLike = (exercise) => {
    const exercises = [...this.state.exercises];
    const index = exercises.indexOf(exercise);
    exercises[index] = {...exercises[index]};
    exercises[index].liked = !exercises[index].liked;
    this.setState({ exercises });
  };

  render() {
    
    if (this.state.exercises.length === 0) return (
      <p className="note">You have no exercises records.</p>
    );

    return (
      <React.Fragment>
        <p className="note">You have {this.countExercises()} exercises records in the database.</p>
        <table className="table">
          <thead>
            <tr>
              <th className="col-name">Name</th>
              <th className="col-name">Calories</th>
              <th className="col-name">Status</th>
              <th className="col-name">Due</th>
              <th>Like</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.displayExercises()}
          </tbody>
        </table>
        <AddExercise />
      </React.Fragment>
    );
  }
}

export default graphql(getExercisesQuery)(Exercises);
