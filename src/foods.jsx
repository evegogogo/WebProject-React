import React, { Component } from "react";
import { getFoods } from "./services/fakeFoodService";

class Foods extends Component {
  state = {
    foods: getFoods()
  };

  handleDelete = food => {
    console.log(food);
    const foods = this.state.foods.filter(f => f._id !== food._id);
    this.setState({ foods });
  }

  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Calories</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.state.foods.map(f => (
            <tr key={f._id}>
              <td>{f.name}</td>
              <td>{f.calories}</td>
              <td>{f.status}</td>
              <td><button onClick={() => this.handleDelete(f)} className="btn btn-danger btn-sm">Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Foods;
