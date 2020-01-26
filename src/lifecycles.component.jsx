import React from 'react';

class Lifecycles extends React.Component {
  constructor() {
    // super() method pulls in all methods and other functionality into current class
    // from the class in which current class is extended from.

    // Since the constructor method is the first thing to run when a class is loaded
    // the state of a component is placed inside the constructor.

    // This insures that all of the methods and anything else in the class are aware and
    // have access to the state of the component.

    super();
    console.log('constructor!');
  }

  // componentDidMout() will run after the component is rendered to the page
  // which is after the render() method is ran.
  componentDidMount() {
    console.log('componentDidMount!');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate!');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount!');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate!', nextProps);
    return nextProps.text !== this.props.text;
  }

  // Second thing to run inside of a component is the render() method.

  // During this time props are evaluated.

  render() {
    console.log('render!');
    return (
      <div className='lifecycles'>
        <h3>LIFECYCLES COMPONENT</h3>
        {this.props.text}
      </div>
    );
  }
}

/*

Summary:

1. Constructor method is fired off. This allows the state of the component to
    be initialized so it can be used later on.

2. Render method is fired off next. During this time props are evaluated.
    a. The initial component is being loaded at this time.

3. Next componentDidMount() method is fired off if present.
    a. Once component is mounted this method will fire off (after render() method is ran).
    b. We used to this for our API call. This allowed the component to mount and then fetch data from the API
        just in case the API call was two slow, at least the component was mounted first before the call was made.



*/

export default Lifecycles;