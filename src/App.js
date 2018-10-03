import React, { Component } from 'react';
import List from './components/List/List';
import AddListItem from './components/AddListItem/AddListItem';

class App extends Component {
  state = {
    todoListArray: ['apple', 'banana', 'carrot']
  }
  addListItem = (item) => {
    // Create a shallow copy of our todoListArray.
    let arr = this.state.todoListArray.slice();
    // Add the item to the end of our array.
    arr.push(item);
    // Set the state.
    this.setState({
      todoListArray: arr
    });
  }
  removeListItem = (item) => {
    // Create a shallow copy of our todoListArray.
    let arr = this.state.todoListArray.slice();
    // Get the index of the item we want to remove from our array
    const index = arr.indexOf(item);
    if (index > -1) {
      // Splice takes two arguments. Which item to remove and how many items.
      arr.splice(index, 1);
    }
    // Set the state.
    this.setState({
      todoListArray: arr
    });
  }
  render() {
    return (
      <div>
        <List todoListArray={this.state.todoListArray} removeListItem={this.removeListItem} />
        <AddListItem addListItem={this.addListItem} />
      </div>
    );
  }
}

export default App;
