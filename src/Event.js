import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import axios from "axios";
import Edit from "./Edit";

//Creating a component with state to handle back end data
class Events extends Component {
  constructor() {
    super();
    this.state = {
      title: "TITLE",
      date: "DATE",
      time: "TIME",
      location: "LOCATION",
      description:
        "DESCRIBEDY SCRIBE SCRIPTY DIBE, JIBBIDY JABBIDY JIBEDY TRIBE!"
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
        <Route
          path="/edit"
          render={props => {
            console.log(props);
            return <Edit />;
          }}
        />
        <h1>Events!</h1>
        <div className="event">
          <ul className="event_info">
            <li>{this.state.title}</li>
            <li>{this.state.date}</li>
            <li>{this.state.time}</li>
            <li>{this.state.location}</li>
            <li>{this.state.description}</li>
          </ul>
          <button>Delete</button>
          <Link to="/edit">
            <button>Edit</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Events;
