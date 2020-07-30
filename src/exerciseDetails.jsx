import React, { Component } from 'react';

class exerciseDetails extends Component {
    handleSave = () => {
        this.props.history.push('/exercises');
    }
    render() { 
        return ( 
            <div>
                <h1>Exercises - {this.props.match.params.id}</h1>
                <button onClick= {this.handleSave}>Save</button>
            </div>
         );
    }
}
 
export default exerciseDetails;