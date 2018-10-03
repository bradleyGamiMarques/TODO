import React, { Component } from 'react';
import ListItem from '../ListItem/ListItem';
import './List.css';

class List extends Component {
    state = {}
    render() {
        return (
            <ul>
                {this.props.todoListArray.map((item) => {
                    return <li key={item}><ListItem item={item} removeListItem={this.props.removeListItem} /></li>
                })}
            </ul>
        );
    }
}

export default List;