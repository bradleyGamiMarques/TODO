import React, { Component } from 'react';
import ListItem from '../ListItem/ListItem';
import './List.css';

class List extends Component {
    state = {  }
    render() {
        return (
            <ul>
                {this.props.foodArray.map((food)=> {
                    return <li key={food}><ListItem item={food}/></li>
                })}
            </ul>
        );
    }
}

export default List;