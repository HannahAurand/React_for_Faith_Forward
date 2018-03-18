import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import axios from "axios";

//Creating a component with state to handle back end data
class Events extends Component {
  constructor() {
    super();
    this.state = {
      title: "TITLE",
      date: "DATE",
      time: "TIME",
      location: "LOCATION",
      description: "DESCRIBEDY SCRIBE SCRIPTY DIBE, JIBBIDY JABBIDY JIBE TRIBE!"
    };
  }

  //checking that the back end can be accessed and rendered in the console
  componentDidMount() {
    axios.get("http://localhost:3000").then(res => {
      console.log(res);
    });
  }

  //rendering a component that consists of the state from the component state constructor
  render() {
    return (
      <div>
        <h1>Events!</h1>
        <div className="event">
          <ul className="event_info">
            <li>{this.state.title}</li>
            <li>{this.state.date}</li>
            <li>{this.state.time}</li>
            <li>{this.state.location}</li>
            <li>{this.state.description}</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Events;
