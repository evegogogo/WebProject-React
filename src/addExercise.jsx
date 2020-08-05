import React, { Component } from 'react';
// import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';
import * as compose from 'lodash.flowright';
import { getExercisesQuery, addExerciseMutation } from './queries/queries';

class AddExercise extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            calories: 0,
            status: "",
            due: ""
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        
        this.props.addExerciseMutation({
            variables: {
                name: this.state.name,
                calories: this.state.calories,
                status: this.state.status,
                due: this.state.due
            },
            refetchQueries: [{query: getExercisesQuery}]
        });
    }
    
    render() { 
        return ( 
            <form id="add-Exercise" onSubmit={this.handleSubmit.bind(this)}>
                <div className="field">
                    <label>Exercise Name</label>
                    <input type="text" onChange={e => this.setState({name: e.target.value})}/>
                </div>
                <div className="field">
                    <label>Calories</label>
                    <input type="number" onChange={e => this.setState({calories: parseFloat(e.target.value)})}/>
                </div>
                <div className="field">
                    <label>Status</label>
                    <input type="text" onChange={e => this.setState({status: e.target.value})}/>
                </div>
                <div className="field">
                    <label>Due</label>
                    <input type="text" onChange={e => this.setState({status: e.target.value})}/>
                </div>
                <button>Add</button>
            </form>
         );
    }
}
 
export default compose(
    graphql(getExercisesQuery, {name: "getExercisesQuery"}),
    graphql(addExerciseMutation, {name: "addExerciseMutation"})
)(AddExercise);