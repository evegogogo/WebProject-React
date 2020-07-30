import React, { Component } from "react";
import { getFoods } from "./services/fakeFoodService";

class Foods extends Component {
  state = {
    foods: getFoods()
  };

  handleDelete = movie => {

  }

  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Calories</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {this.state.foods.map(f => (
            <tr>
              <td>{f.name}</td>
              <td>{f.calories}</td>
              <td>{f.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Foods;
