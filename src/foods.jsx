import React, { Component } from "react";
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';
import { getFoods } from "./services/fakeFoodService";
import Like from "./components/like";
import "./style/App.css";

const getFoodsQuery = gql`
  {
    foods {
      id
      name
      calories
    }
  }
`

class Foods extends Component {
  state = {
    foods: getFoods()
  };

  handleDelete = food => {
    const foods = this.state.foods.filter(f => f._id !== food._id);
    this.setState({ foods });
  };

  displayFoods() {
    var data = this.props.data;
    console.log(data);
    if (data.loading) {
      return (<tr><td colSpan="5">Loading data...</td></tr>);
    } else {
      return (data.foods.map(f => (
        <tr key={f.id}>
          <td className="col">{f.name}</td>
          <td className="col">{f.calories}</td>
          <td className="col">{f.status}</td>
          <td>
            <Like liked={f.liked} onClick={() => this.handleLike(f)}/>
          </td>
          <td className="col"><button onClick={() => this.handleDelete(f)} className="btn btn-danger btn-sm">Delete</button></td>
        </tr>
      )))
    }
  };

  countFoods() {
    var data = this.props.data;
    if (data.loading) {
      return 0;
    } else {
      return data.foods.length;
    }
  }

  handleLike = (food) => {
    const foods = [...this.state.foods];
    const index = foods.indexOf(food);
    foods[index] = {...foods[index]};
    foods[index].liked = !foods[index].liked;
    this.setState({ foods });
  };

  render() {
    

    if (this.state.foods.length === 0) return (
      <p className="note">You have no meal records.</p>
    );

    return (
      <React.Fragment>
        <p className="note">You have {this.countFoods()} meal records in the database.</p>
        <table className="table">
          <thead>
            <tr>
              <th className="col-name">Name</th>
              <th className="col-name">Calories</th>
              <th className="col-name">Status</th>
              <th>Like</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.displayFoods()}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default graphql(getFoodsQuery)(Foods);
