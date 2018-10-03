import React, { Component } from 'react';
import ListItem from '../ListItem/ListItem';
import './List.css';

class List extends Component {
    state = {}
    render() {
        return (
            <ul>
                {this.props.todoListArray.map((item, index) => {
                    return <li key={item}><ListItem count={index + 1} item={item} removeListItem={this.props.removeListItem} /></li>
                })}
            </ul>
        );
    }
}

export default List;