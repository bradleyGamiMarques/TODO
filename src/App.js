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
    });
  }
  removeFood = (food) => {
    let arr = this.state.foodArray.slice();
    const index = arr.indexOf(food);
    if (index > -1){
      arr.splice(index, 1);
    }
    this.setState({
      foodArray: arr
    });
  }
  render() {
    return (
      <div>
      <List foodArray={this.state.foodArray} removeFood={this.removeFood}/>
      <AddListItem addFood={this.addFood}/>
      </div>
    );
  }
}

export default App;
