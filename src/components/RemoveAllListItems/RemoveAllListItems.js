import React, { Component } from 'react';

class RemoveAllListItems extends Component {
  
    render() {
        return (
           <button onClick={this.props.removeAllListItems}>Remove All</button> 
        );
    }
}

export default RemoveAllListItems;