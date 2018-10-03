import React, { Component } from 'react';
import ListItem from '../ListItem/ListItem';
import './List.css';

class List extends Component {
    state = {  }
    render() {
        return (
            <ul>
                {this.props.foodArray.map((food)=> {
                    return <li key={food}><ListItem food={food} removeFood={this.props.removeFood}/></li>
                })}
            </ul>
        );
    }
}

export default List;