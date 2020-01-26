import React from 'react';
import logo from './logo.svg';
import './App.css';

import Lifecycles from './lifecycles.component';

// The update phase in React is triggered by a change in state or
// change in props.

// When there is a change in the props only the part of the component that uses
// that prop will be re rendered.

// When there is a change in state then the entire component is re rendered.

// The lifecycle method componentDidUpdate() runs after the component is re rendered
// and React updates the real DOM. More of this inside of the Lifecycles.

// In our App component whenever there is a change in state the entire component is
// re rendered.

// In our Lifecycles component only the props are re rendered when there is a change in
// props for that component. More of this inside of the Lifecycles.

// In our current app, if state changes inside of the App component,
// the Lifecycles component will be re rendered as well even if there is not a change
// in props for the Lifecycles component.

// To prevent the Lifecycles component and any othere child component inside of our App component from
// re rendering when the children do not need to be updated, we can use the shouldComponentUpdate()
// method. More of this inside of the Lifecycles.

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      showChild: true,
      text: ''
    };
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <button
            onClick={() =>
              this.setState(state => ({
                showChild: !state.showChild
              }))
            }
          >
            Toggle Lifecycles
          </button>
          <button
            onClick={() =>
              this.setState(state => ({
                text: state.text + '_hello'
              }))
            }
          >
            Update Text
          </button>
          {this.state.showChild ? <Lifecycles text={this.state.text} /> : null}
        </header>
      </div>
    );
  }
}

export default App;