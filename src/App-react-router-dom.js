import React from "react";
import { Route, Link } from "react-router-dom";

export default function BasicExample() {

  // Path property is the pattern that the route is looking to match.
  // For our Home component it will be website-name/
  // For our About component it will be website-name/about
  // By leaving out exact on our Home route the path matching will match anything up until
  // the / of webite-name/ so the other components will match since there path starts with
  // a /. It will technically be a match.


  return (
   
      <div>

          {/* The to property for the Link component uses the url to determine which component should be rendered. */}

          {/* The to property will look for a matching route. If one isn't found it will still follow the url path. If 
          a component doesn't exist at that route then nother is rendered to the screen. If a match is found then the 
          component that that route belongs to will be rendered. */}
          <Link to="/">Home</Link>
          <br></br>
          <Link to="/about">About</Link>
          <br></br>
          <Link to="/gamelist">Game List</Link>
          

          

          <hr></hr>

          <Route exact path="/" component={Home} /> 

          <Route path="/about" component={About} />

          <Route path="/dashboard/:dashboardId" component={Dashboard} />

          <Route path="/topics" component={Topics} />

          <Route path="/gamelist" component={GameList} />
          <Route path='/gamedlist/:gameId' component={GameDetail} />

          {/* <Route exact path='/gamelist/asdqw/game' component={GameList} />          
          <Route path='/game/asdqw/topics/:topicId' component={GameDetail} />

          <Route exact path='/game/topics' component={GameList} />
          <Route path='/game/topics/:topicId' component={GameDetail} /> */}
          

        
      </div>
    
  );
}

// When our components are inside of a route they have access to special props.

// These props propertis are:
// 1. History
// 2. Location
// 3. Match

/******* Match *********/

// Match property contains an object with these properties:

// 1. path
// 2. url
// 3. isExact
// 4. params

/****** path *******/

// Path property is the pattern that the route is looking to match.

/******* url ********/

// url property will display the url up until the match from the path property

/****** isExact ********/

// Returns true if route is an exact match and false if the route isn't an exact match.

/***** params ********/

// An object that contains a list of url parameters.

// :dashboardId is an example of a url parameter.

// url parameters are usually dynamic.

// We used url parameters in our notes app to keep track of each unquie note.

// In our notes app we used an ID parameter in our url to navigate to the specific note
// and to load up the information of that specific note.

// In this example if we go to the url website-name/dashboard/13 (13 can be the value of :dashboardId)
// then the params property will have an object with the property of :dashboardId with a value of 13 (params: {dashboardId: 13})

/************* Why use Match ************/

// With the match property we are able to build out a nested route structure for our components.

// This could come in handy for making a notes and todo app.

// I couldn't get it to work. But look at the GameList component and GameDetail component, as well 
// as the routes and see if you can get the dynamic nested routing to work.

/******* History *******/

// Note: In React we are not really using links to redierct to a new page like in the old days.
// We are basically hi-jacking parts of urls so React knows what components to take off the DOM and what components to place on the DOM.
// For example if we are on our homepage and then click on a link to get to the about page what really happens is the components from
// the homepage are removed and the components from the about page are rendered to the screen.
// This allows us to just render the page without the need to re-render the entire application.

// react-router-dom has a component called Link.

// The Link component is similar to an <a></a> link.
// Instead of taking us to another page like the <a></a> did,
// the Link component will borrow the url we use as a property on that component
// and use that url to tell React which component to render.

// There is more to the history property.
// So far we have learned that we can use the push method from the history property
// to build links similar to using the Link component but unlike the Link component we can
// use this property inside of a function or lifecyle method.

/********** Location ***********/

// The location property tells us where we currently are in our application.

// The locatoin property has a path property that will tell us the full
// path name.



function Home(props) {
  console.log(props.history)
  return (
    <div>

      {/* .push() is a method on the hisotry property of our prop.
      Works like the Link component except we can use this as a function out side of the render or on a lifecyle method. */}
      <button onClick={() => props.history.push('/topics')}>Topics Page</button>
      <hr></hr>


      <h2>Home</h2>
    </div>
  );
}

function About(props) {
  console.log(props)
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard(props) {
  console.log(props)
  return (
    <div>

      {/* We can access our unquie id by passing in the following inside of {} */}

      {/* Will display Dashboard 13 (or whatever the value from the params property we are trying to access returns) */}
      <h2>Dashboard:  {props.match.params.dashboardId}</h2>
    </div>
  );

}

function Topics() {
  return (
    <div>
      <h2>Topics</h2>
    </div>
  );
} 

function GameList(props) {
  console.log(props)
  return (
    <div>
      <h2>GAME LIST PAGE:</h2>
      <Link to={`${props.match.url}/13`}>Game 13</Link>
      <br />
      <Link to={`${props.match.url}/14`}>Game 14</Link>
      <br />
      <Link to={`${props.match.url}/15`}>Game 15</Link>
    </div>
  )
}

function GameDetail(props) {
  console.log('in')
  return (
    <div>
      <h2>Game: {props.match.params.gameId}</h2>
    </div>
  )
}
