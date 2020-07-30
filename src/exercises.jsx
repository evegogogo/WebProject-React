import React, { Component } from "react";
import { Link } from 'react-router-dom';
class Exercises extends Component {
  state = {
    exercises: [
      { id: 1, name: "Exercise 1" },
      { id: 2, name: "Exercise 2" },
      { id: 3, name: "Exercise 3" }
    ]
  };

  render() {
    return (
      <div>
        <h1>Exercises</h1>
        <ul>
          {this.state.exercises.map(e => (
            <li key={e.id}>
              <Link to={`/exercises/${e.id}`}>{e.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Exercises;
