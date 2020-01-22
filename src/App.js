import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor() {
    super();

    this.handleClick2 = this.handleClick1.bind(this);
  }

  handleClick1() {
    console.log('button 1 clicked');
    console.log(this);
  }

  handleClick3 = () => {
    console.log('button 3 clicked');
    console.log(this);
  }
  

  render() {
    return (

      <div>

        {/* The () envokes the function so it runs as soon as the render() method runs. */}
        {/* Clicking this button will do thing since the function was already envoked. */}
        <button onClick={this.handleClick1()}>click 1</button>

        {/* Without () we are defining a function to be ran when the event triggers the function via button click */}
        {/* So handleClick() from above gets ran. */}
        {/* When the render() is ran again the keyword this will be consoled out as our App component. */}
        {/* When we click on the button the console.log for this will return undifined because at that time this
        refers to the button element itself. */}        
        <button onClick={this.handleClick1}>click 2</button>


        {/* When we click this button the handleClick1 function will run. */}
        {/* This is because we stored handlClick1 inside of handleClick2 so now handleClick2 will be a 
        reference for handleClick1. */}
        {/* The keyword this will now also return our App component. This is because we bound the keyword
        this in our constructor() when we stored assigned handleClick1 inside of handleClick2. */}
        <button onClick={this.handleClick2}>click 3</button>

        {/* handleClick3 is ran like normal. */}
        {/* handleClick3 will log out the keyword this because arrow functions have access to the keyword this
        as the arrow function is defined. */}
        <button onClick={this.handleClick3}>click 4</button>

        
        {/* A good rule of thumb is this: Use arrow functions on any class methods 
        you define and aren't part of React (i.e. render(), componentDidMount()). */}

        {/* If you want to learn more about this, have a read here: https://reactjs.org/docs/handling-events.html */}

      </div>

    )

  }
}



export default App;
