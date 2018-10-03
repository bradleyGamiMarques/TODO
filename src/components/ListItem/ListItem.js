import React, { Component } from 'react';
import "./listItem.css";

class ListItem extends Component {
    render() {
        return (
            <div>
                <p>{this.props.item}</p>
                <button onClick={() => this.props.removeListItem(this.props.item)}>X</button>
            </div>
        )
    }
}
export default ListItem;
