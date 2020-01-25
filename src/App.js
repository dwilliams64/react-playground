import React, { Component } from 'react';
import './App.css';

class App extends Component {

  // There will be times when you need to use props inside of the constructor.

  // It is recomended that you pass in props to the constructor and super methods.

  // In order to do that pass props to the constructor() method and super() method.

  constructor(props) {
    super(props);

    this.state = {

      // Now we have access to the props property add which we defined in index.js
      count: 40 + this.props.add 
    }
  }

  // In React mutilpe setState() calls will be batched together and and executed as single update for better performance.

  /*

  // setState() method is an asynchronous method. As in other code will run while the method is resolving.

  // This is why if we want to check the status of the state when setState() is called we need a call back
  // function that is called after setState() runs sometime in the future.


  // Will run the console.log before setState() updates state due to asynchronous nature.
  handleClick = () => {
    this.setState({count: this.state.count + 1})
    console.log(this.state)
  }

  // Will run console.log after setState() updates state.
  handleClick = () => {
    this.setState({count: this.state.count + 1}, () => console.log(this.state))
  }

  // Currently the above examples of handleClick() will work fine since this App is very simple.

  // The above examples of handleClick() is considered a bad practice. 

  // The reason why they are considered a bad practice is because of how React batches multiple updates.

  // There is no gurantee that the latest version of count will be the latest version of the state since
  // multiple setState() calls could be modifying the same state property such as count in this example.

 */

  // Rule of thumb in React. If you are updating state and are using state or props inside of the update use
  // a function instead of an object:

  // We pass in a function as the 1st argument instead an object.

  // 1st argument of our function is the prevState.

  // prevState is the latest previous state before the state update.

  // prevProps is the latest previous props before any updates.

  // Both insure that we have the latest state and props before any updates.

  handleClick = () => {
    this.setState((prevState, prevProps) => {
      return { count: prevState.count + prevProps.add }
    }, 
    
    () => console.log(this.state))
  }

  /*

  // If we where goint to just pass in a string for example as a state change we could still pass
  // in an object for our 1st argument in setState()

  handleClick = () => this.setState({count: 'doggie'});

  */

  /*
  
  Summary:

  1. State updates are asynchronous.

  2. If you ever want to manipulate or use state somehow after the update. Then add
     in a second parameter to setState() which will be a function where you can use that updated state (like console.log() example).
  
  3. If are accessing state or props via setState() pass in a function as the first argument.
  
  https://css-tricks.com/understanding-react-setstate/
  */
 
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