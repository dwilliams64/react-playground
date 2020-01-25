import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor() {
    super();

    this.state = {
      count: 40
    }
  } 
  
  handleClick = () => {
    this.setState({count: this.state.count + 1})
  }

  render() {
    return (
      <div>
        <p>{this.state.count}</p>

        <button onClick={this.handleClick}>
          Update State
        </button>
      </div>
    
      
    )

  }
}



export default App;
