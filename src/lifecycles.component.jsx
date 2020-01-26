import React from 'react';

class Lifecycles extends React.Component {
  constructor() {

    super();
    console.log('constructor!');
  }

  componentDidMount() {
    console.log('componentDidMount!');
  }

  // Runs after the component updates when state or props change.
  componentDidUpdate() {
    console.log('componentDidUpdate!');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount!');
  }

  // We can control if a component goes through the update phase or not
  // by using the shouldComponentUpdate().

  // By controling wheither or not a component goes through the update phase
  // we only render and update that component when it needs to.

  // By doing this we can increase the performance of our app.

  // Remember when the parent component updates so does all of its
  // children components. 

  // The shouldComponentUpdate() method takes in two arguments.

  // 1st argument is nextProps.

  // 2nd argument is nextState.

  // shouldComponentUpdate() returns a boolean value.

  // If the boolean is true then the component will update
  // either the state, props, or both depending on our needs and
  // how we write our code. 

  // If the boolean returns false then the component will not update.

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate!', nextProps);
    return nextProps.text !== this.props.text;
  }

  render() {
    console.log('render!');
    return (
      <div className='lifecycles'>

        {/* Once the component is rendered the <h3> will
        not have to be re rendered again unless this component 
        has a change in state. */}

        <h3>LIFECYCLES COMPONENT</h3>

        {/* Whenever the props change only the props will be re rendered. */}

        {this.props.text}
      </div>
    );
  }
}

export default Lifecycles;