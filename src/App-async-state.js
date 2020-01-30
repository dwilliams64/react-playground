import React, { Component } from 'react';
import './App.css';

// React has access to a version of the class syntax called alternate class syntax.

// This cannot be used in regular JavaScript even though there are future preposals to change
// this in the future.

// You would use this syntax when state is simple and you do not need access to props.

// Remember we have access to props through the constructor and super methods. Without those
// we loose access to props.

class App2 extends Component {

    // Now our state is initialized as class field declaration.
    state = {
        count: 40
    }
  
    handleClick = () => {
        this.setState((prevState, prevProps) => {
            return {count: prevState.count + 1}
        }, 

        () => console.log(this.state));
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
  
  export default App2;