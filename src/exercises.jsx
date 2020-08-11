import React, { Component } from "react";
// import { getExercises } from "./services/fakeExerciseService";
import { graphql } from 'react-apollo';
import Like from "./components/like";
import { getExercisesQuery, deleteExerciseMutation, editExerciseMutation } from './queries/queries';
import AddExercise from "./addExercise";
import * as compose from 'lodash.flowright';
import AuthContext from './context/auth-context';
import "./style/App.css";



class Exercises extends Component {
  static contextType = AuthContext;
  state = {
    exercises: this.props.getExercisesQuery
  };

  handleDelete = exercise => {
    console.log(this.props);
    this.props.deleteExerciseMutation({
      variables: {
        name: exercise.name,
        calories: exercise.calories
      },
      refetchQueries: [{query: getExercisesQuery}]
    });
  };

  displayExercises() {
    var data = this.props.getExercisesQuery;
    console.log(data);
    const userId = this.context.id;
    if (data.loading) {
      return (<tr><td colSpan="6">Loading Exercises...</td></tr>)
    } else {
      const dataaa = data.exercises.filter(e => {return e.user === null ? "" : e.user.id === userId});
      console.log(dataaa);
      return (dataaa.map(e => (
        <tr key={e.id}>
          <td className="col">{e.name}</td>
          <td className="col">{e.calories}</td>
          <td className="col">{e.status}</td>
          <td className="col">{e.date}</td>
          <td>
            <Like liked={e.liked} onClick={() => this.handleLike(e)}/>
          </td>
          <td className="col"><button onClick={() => this.handleDelete(e)} className="btn btn-danger btn-sm">Delete</button></td>
        </tr>
      )))
    }
  };

  countExercises() {
    var data = this.props.getExercisesQuery;
    const userId = this.context.id;
    if (data.loading) {
      return 0;
    } else {
      const dataaa = data.exercises.filter(e => {return e.user === null ? "" : e.user.id === userId});
      return dataaa.length;
    }
  }

  calculateCalories() {
    var data = this.props.getExercisesQuery;
    const userId = this.context.id;
    if (data.loading) {
      return 0;
    } else {
      console.log(data.exercises);
      const dataaa = data.exercises.filter(e => {return e.user === null ? "" : e.user.id === userId});
      const val = dataaa.filter( (item) => item.status !== 'unfinished' ).reduce((prev, cur) => prev + cur.calories, 0);
      return val;
    }
  }


  handleLike = (exercise) => {
    console.log(this.props);
    /* const exercises = [...this.props.getExercisesQuery.exercises];
    const index = exercises.indexOf(exercise);
    exercises[index] = {...exercises[index]};
    exercises[index].liked = !exercises[index].liked;
    this.setState({ exercises }); */
    this.props.editExerciseMutation({
      variables: {
        name: exercise.name,
        liked: exercise.liked
      },
      refetchQueries: [{ query: getExercisesQuery }]
    });
  };

  render() {
    
    if (this.state.exercises.length === 0) return (
      <p className="note">You have no exercises records.</p>
    );

    return (
      <React.Fragment>
        <p className="note">You have {this.countExercises()} exercises records in the database. Your Total Consumed Calories: {this.calculateCalories()} </p>
        <table className="table">
          <thead>
            <tr>
              <th className="col-name">Name</th>
              <th className="col-name">Calories</th>
              <th className="col-name">Status</th>
              <th className="col-name">Date</th>
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

export default compose(
  graphql(getExercisesQuery, {name: "getExercisesQuery"}),
  graphql(deleteExerciseMutation, {name: "deleteExerciseMutation"}),
  graphql(editExerciseMutation, {name: "editExerciseMutation"})
)(Exercises);



// graphql(getExercisesQuery)(Exercises);
