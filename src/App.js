import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Event from "./Event.js";

//Axios api call to backend goes here so that info is available to all child components of App.

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <h1>Faith Forward</h1>
          <Link to="/events">
            <button>See All Events</button>
          </Link>
        </nav>
        <main>
          <Route
            path="/events"
            render={props => {
              console.log(props);
              return <Event />;
            }}
          />
          <p>
            Faith Forward is an app that lets people put events from different
            churches all in one place. Methodist, Catholic, non-denominational,
            small-group or worship group--this is the place to add your event
            for DC to see. Big or small, your event is welcome here.
          </p>
        </main>
      </div>
    );
  }
}

export default App;