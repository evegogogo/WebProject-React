import React, { Component } from 'react';
// import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';
import * as compose from 'lodash.flowright';
import { getFoodsQuery, addFoodMutation } from './queries/queries';
import AuthContext from './context/auth-context';
import './style/addFood.css';
// import { Form } from 'react-bootstrap';

class AddFood extends Component {
    static contextType = AuthContext;
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            calories: 0,
            status: "",
            date: ""
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        const idd = this.context.id;
        console.log("id is: " + idd);
        this.props.addFoodMutation({
            variables: {
                name: this.state.name,
                calories: this.state.calories,
                userId: idd ? idd : "",
                status: this.state.status,
                date: this.state.date
            },
            refetchQueries: [{query: getFoodsQuery}]
        });
        e.target.reset();
    }

    
    render() { 
        return ( 
            <form id="add-Food" onSubmit={this.handleSubmit.bind(this)}>
                <div className="field">
                    <label>Food Name</label>
                    <br/>
                    <input 
                        type="text"
                        placeholder="Enter a valid food name"
                        style={{ width:"300px" }} 
                        onChange={e => this.setState({name: e.target.value})}
                    />
                </div>
                <div className="field">
                    <label>Calories</label>
                    <br/>
                    <input 
                        type="number" 
                        placeholder="Enter a valid number of calories" 
                        style={{ width:"300px" }} 
                        onChange={e => this.setState({calories: parseFloat(e.target.value)})}
                    />
                </div>
                <div className="field">
                    <label>Status</label>
                    <br/>
                    <input 
                        type="text" 
                        placeholder="Breakfast, Lunch or Dinner?" 
                        style={{ width:"300px" }} 
                        onChange={e => this.setState({status: e.target.value})}
                    />
                </div>
                <div className="field">
                    <label>Date</label>
                    <br/>
                    <input 
                        type="text" 
                        placeholder="Enter a valid date format" 
                        style={{ width:"300px" }} 
                        onChange={e => this.setState({date: e.target.value})}
                    />
                </div>
                <br/>
                <button className="add-button">Add</button>
            </form> 
            
         );
    }
}
 
export default compose(
    graphql(getFoodsQuery, {name: "getFoodsQuery"}),
    graphql(addFoodMutation, {name: "addFoodMutation"})
)(AddFood);
