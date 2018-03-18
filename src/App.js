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
import ReactDOM from "react-dom";
import Event from "./Event.js";
import Create from "./Create.js";
//Axios api call to backend goes here so that info is available to all child components of App.
//setting the state equal to our data from the json file?
class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }
  //calling back end API
  //map through the data array, grab its data
  //then, set the state object's array "data" to the eventsData
  //array from the API source.
  componentDidMount() {
    //the browser says GET https://localhost:3000/ net::ERR_SSL_PROTOCOL_ERROR
    //But it works when I use other random API urls.
    //Yes, CORS is installed in the back end.
    //Doesn't work with or without www
    //trying with a random api
    let eventsData = [];
    axios
      .get("https://facebook.github.io/react-native/movies.json")
      .then(res => {
        console.log(res);
        // res.data.children.map(event => event.data);
        // eventsData.push(event);
      })
      .then(() => {
        this.setState({
          data: eventsData
        });
      });
  }

  //map through this state's data array and render the specific
  //data indices as li in an unordered list below.
  render() {
    let events = this.state.data.map(data => {
      return (
        <div>
          <ul>
            <li>{this.state.data.name}</li>
            <li>{this.state.data.date}</li>
            <li>{this.state.data.time}</li>
            <li>{this.state.data.location}</li>
            <li>{this.state.data.description}</li>
          </ul>
        </div>
      );
    });
    return (
      <div className="App">
        <nav>
          <h1>Faith Forward</h1>
          <Link to="/events">
            <button>See All Events</button>
          </Link>
          <Link to="/add_an_event">
            <button>Add an Event</button>
          </Link>
        </nav>
        <main>
          <p>
            Faith Forward is an app that lets people put events from different
            churches all in one place. Methodist, Catholic, non-denominational,
            small-group or worship group--this is the place to add your event
            for DC to see. Big or small, your event is welcome here.
          </p>
          {/* I get an error when I try to use map here. */}
          {/* <div>{this.state.events.map(event => <p>{event.title}</p>)}</div> */}
          <Route
            path="/events"
            render={props => {
              console.log(props);
              return <Event />;
            }}
          />
          <Route
            path="/add_an_event"
            render={props => {
              // console.log(props);
              return <Create />;
            }}
          />
        </main>
      </div>
    );
  }
}

//I don't know what this is but it has something to do with
//getting my virtual dom to use App...?
// ReactDOM.render(<App data="reactjs" />, document.getElementById("root"));
export default App;
