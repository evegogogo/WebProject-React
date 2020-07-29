import React, { Component } from "react";

class Foods extends Component {
  state = {
    foods: [
      { id: 1, name: "Product 1" },
      { id: 2, name: "Product 2" },
      { id: 3, name: "Product 3" }
    ]
  };

  render() {
    return (
      <div>
        <h1>Foods</h1>
        <ul>
          {this.state.foods.map(food => (
            <li key={food.id}>
              <a href={`/foods/${food.id}`}>{food.name}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Foods;
