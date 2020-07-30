import React, { Component } from "react";
import { getFoods } from "./services/fakeFoodService";

class Foods extends Component {
  state = {
    foods: getFoods()
  };

  handleDelete = food => {
    const foods = this.state.foods.filter(f => f._id !== food._id);
    this.setState({ foods });
  }

  render() {
    

    if (this.state.foods.length === 0) return (
      <p>You have no meal records.</p>
    );

    return (
      <React.Fragment>
        <p>You have {this.state.foods.length} meal records in the database.</p>
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
      </React.Fragment>
    );
  }
}

export default Foods;
