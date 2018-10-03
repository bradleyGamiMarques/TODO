import React, { Component } from 'react';
import List from './components/List/List';
import AddListItem from './components/AddListItem/AddListItem';

class App extends Component {
  state = {
    foodArray: ['apple', 'banana', 'carrot']
  }
  addFood = (food) => {
    let arr = this.state.foodArray.slice();
    arr.push(food);
    this.setState({
      foodArray: arr
    })
  }
  render() {
    return (
      <div>
      <List foodArray={this.state.foodArray}/>
      <AddListItem addFood={this.addFood}/>
      </div>
    );
  }
}

export default App;
