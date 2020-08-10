import React, { Component } from 'react';
// import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';
import * as compose from 'lodash.flowright';
import { getFoodsQuery, addFoodMutation } from './queries/queries';
// import { Form } from 'react-bootstrap';

class AddFood extends Component {
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
        this.props.addFoodMutation({
            variables: {
                name: this.state.name,
                calories: this.state.calories,
                status: this.state.status,
                date: this.state.date
            },
            refetchQueries: [{query: getFoodsQuery}]
        });
    }
    
    render() { 
        return ( 
            <form id="add-Food" onSubmit={this.handleSubmit.bind(this)}>
                <div className="field">
                    <label>Food Name</label>
                    <input type="text" placeholder="Enter a valid food name" onChange={e => this.setState({name: e.target.value})}/>
                </div>
                <div className="field">
                    <label>Calories</label>
                    <input type="number" placeholder="Enter a valid number of calories" onChange={e => this.setState({calories: parseFloat(e.target.value)})}/>
                </div>
                <div className="field">
                    <label>Status</label>
                    <input type="text" onChange={e => this.setState({status: e.target.value})}/>
                </div>
                <div className="field">
                    <label>Date</label>
                    <input type="text" placeholder="Enter a valid date" onChange={e => this.setState({date: e.target.value})}/>
                </div>
                <button>Add</button>
            </form> 
            
         );
    }
}
 
export default compose(
    graphql(getFoodsQuery, {name: "getFoodsQuery"}),
    graphql(addFoodMutation, {name: "addFoodMutation"})
)(AddFood);
