import React, { Component } from 'react';
// import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';
import * as compose from 'lodash.flowright';
import { getExercisesQuery, addExerciseMutation } from './queries/queries';
import AuthContext from './context/auth-context';

class AddExercise extends Component {
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
        this.props.addExerciseMutation({
            variables: {
                name: this.state.name,
                calories: this.state.calories,
                userId: idd ? idd : "",
                status: this.state.status,
                date: this.state.date
            },
            refetchQueries: [{query: getExercisesQuery}]
        });
        e.target.reset();
    }
    
    render() { 
        return ( 
            <form id="add-Exercise" onSubmit={this.handleSubmit.bind(this)}>
                <div className="field">
                    <label>Exercise Name</label>
                    <br/>
                    <input type="text" placeholder="Enter a valid Exercise name" style={{ width:"300px" }} onChange={e => this.setState({name: e.target.value})}/>
                </div>
                <div className="field">
                    <label>Calories</label>
                    <br/>
                    <input type="number" placeholder="Enter a valid number of calories" style={{ width:"300px" }} onChange={e => this.setState({calories: parseFloat(e.target.value)})}/>
                </div>
                <div className="field">
                    <label>Status</label>
                    <br/>
                    <input type="text" placeholder="Finished or Unfinished?" style={{ width:"300px" }} onChange={e => this.setState({status: e.target.value})}/>
                </div>
                <div className="field">
                    <label>Date</label>
                    <br/>
                    <input type="date" placeholder="Enter a valid date format" style={{ width:"180px" }} onChange={e => this.setState({date: e.target.value})}/>
                </div>
                <br/>
                <button className="add-button">Add</button>
            </form>
         );
    }
}
 
export default compose(
    graphql(getExercisesQuery, {name: "getExercisesQuery"}),
    graphql(addExerciseMutation, {name: "addExerciseMutation"})
)(AddExercise);