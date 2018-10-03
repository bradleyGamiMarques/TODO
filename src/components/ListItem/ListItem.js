import React, { Component } from 'react';
import "./listItem.css";

class ListItem extends Component {
    render() {
        return (
            <div>
                <p>{this.props.food}</p>
                <button onClick={()=> this.props.removeFood(this.props.food)}>X</button>
            </div>
        )
    }
}
export default ListItem;
