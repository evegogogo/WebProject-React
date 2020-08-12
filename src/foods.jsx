import React, { Component } from "react";
import { graphql } from 'react-apollo';
import { getFoods } from "./services/fakeFoodService";
import Like from "./components/like";
import AddFood from "./addFood";
import { getFoodsQuery, deleteFoodMutation, editFoodMutation } from './queries/queries';
import * as compose from 'lodash.flowright';
import AuthContext from './context/auth-context';
import _ from 'lodash';
import "./style/App.css";
// import { Button } from "antd";



class Foods extends Component {
  static contextType = AuthContext;
  state = {
    foods: getFoods()
  };

  handleDelete = food => {
    // var data = this.props.data;
    console.log(this.props);
    
    this.props.deleteFoodMutation({
      variables: {
        name: food.name,
        calories: food.calories
      },
      refetchQueries: [{query: getFoodsQuery}]
    });
    // const foods = this.state.foods.filter(f => f._id !== food._id);
    // this.setState({ foods });
  };

  displayFoods() {
    var data = this.props.getFoodsQuery;
    console.log(data.foods);
    const userId = this.context.id;
    console.log("user id is: " + userId);
    if (data.loading) {
      return (<tr><td colSpan="5">Loading data...</td></tr>);
    } else {
      const dataaa = _.filter(data.foods, {user: {id: userId }});
      
      return (dataaa.map(f => (
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
    var data = this.props.getFoodsQuery;
    const userId = this.context.id;
    
    if (data.loading) {
      return 0;
    } else {
      const dataaa = data.foods.filter(f => {return f.user === null ? "" : f.user.id === userId});
      return dataaa.length;
    }
  }

  calculateCalories() {
    var data = this.props.getFoodsQuery;
    const userId = this.context.id;
    if (data.loading) {
      return 0;
    } else {
      console.log(data.foods);
      const dataaa = data.foods.filter(f => {return f.user === null ? "" : f.user.id === userId});
      const val = dataaa.reduce((prev, cur) => prev + cur.calories, 0);
      return val;
    }
  }

  handleLike = food => {
    console.log(this.props);
    console.log(food.name);
    console.log(food.liked);
    
    this.props.editFoodMutation({
      variables: {
        name: food.name,
        liked: !food.liked
      },
      refetchQueries: [{ query: getFoodsQuery }]
    });
    /* const foods = [...this.state.foods];
    const index = foods.indexOf(food);
    foods[index] = {...foods[index]};
    foods[index].liked = !foods[index].liked;
    this.setState({ foods }); */
  }

  getIndex = (foods, f) => {
    return foods.indexOf(f);
  }

  render() {

    if (this.state.foods.length === 0) return (
      <p className="note">You have no meal records.</p>
    );

    return (
      <React.Fragment>
        <p className="note">You have {this.countFoods()} meal records in the database. Total calories {this.calculateCalories()} </p>
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
        <AddFood />
      </React.Fragment>
    );
  }
}

export default compose(
  graphql(getFoodsQuery, {name: "getFoodsQuery"}),
  graphql(deleteFoodMutation, {name: "deleteFoodMutation"}),
  graphql(editFoodMutation, {name: "editFoodMutation"})
)(Foods);



// graphql(getFoodsQuery)(Foods);