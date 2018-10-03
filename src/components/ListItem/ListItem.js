import React, { Component } from 'react';
import "./listItem.css";

class ListItem extends Component {
    render(){
        return(
            <div>{this.props.item}</div>
        )
    }
 }
 export default ListItem;
