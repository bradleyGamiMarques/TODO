import React, { Component } from 'react';

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
        const trimmedTextInput = this.state.itemInput.trim();

        if (trimmedTextInput === '') {
            return;
            
        } else {
            this.props.addListItem(trimmedTextInput);
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