import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

// The BrowserRouter router component gives us access to routing in our application.

export default function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          {/* 

          The <Route> component can take up to 3 attributes.
          
          Component attribute will render the componet placed in the value.

          Alternatively you can wrap the component between <BrowserRouter> like we are doing for the <Home /> 
          component.
          
          Path attribute is the path in the url. 

          When the webrowser is at websitname.com/about for example 
          the About component will render.

          exact takes a boolean value.

          exact with no value will return true. 
          
          If exact is left off on a route that has a path of "/", then that component and the component we are trying
          to navigate to will both render.

          Leaving off exact on routes that have names after the path will not have the same effect and will render correctly.

          Make sure to add exact to any routes whoes path has a value of "/". This will normally be the home page.
                    
          */}



          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/about" component={About} />

          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
