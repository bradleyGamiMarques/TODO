import React, { Component } from 'react';
import "./addListItem.css";

class AddListItem extends Component {
    state = {
        itemInput: ''
    }
    handleOnChange = (e) => {
        this.setState({
            itemInput: e.target.value
        })
    }
    handleOnSubmit = (e) => {
        e.preventDefault();
        if (this.state.itemInput === '') {
            return;
        } else {
            this.props.addListItem(this.state.itemInput);
            this.setState({
                itemInput: ''
            })
        }
    }
    render() {
        return (
            <form>
                <input onChange={(e) => this.handleOnChange(e)} type='text' value={this.state.itemInput} />
                <button onClick={(e) => this.handleOnSubmit(e)} type='submit'>Add Item</button>
            </form>
        );
    }
}

export default AddListItem;