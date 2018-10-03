import React, { Component } from 'react';
import "./addListItem.css";

class AddListItem extends Component {
    state = {
        foodInput: ''
    }
    handleOnChange = (e) => {
        this.setState({
            foodInput: e.target.value
        })
    }
    handleOnSubmit = (e) => {
        e.preventDefault();
        if (this.state.foodInput === '') {
            return;
        } else {
            this.props.addFood(this.state.foodInput);
        }
    }
    render() {
        return (
            <form>
                <input onChange={(e) => this.handleOnChange(e)} type='text' />
                <button onClick={(e) => this.handleOnSubmit(e)} type='submit'>Add Food</button>
            </form>
        );
    }
}

export default AddListItem;