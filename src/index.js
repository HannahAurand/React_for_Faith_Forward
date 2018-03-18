import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";

const data = [
  {
    date: "is ",
    description: "forevererrererererer",
    location: "test",
    time: "a ",
    title: "test 1"
  },
  {
    date: "is ",
    description: "forevererrererererer",
    location: "test",
    time: "a ",
    title: "test 2"
  },
  {
    date: "is ",
    description: "forevererrererererer",
    location: "test",
    time: "a ",
    title: "test 3"
  }
];

ReactDOM.render(
  <Router>
    <App data={data} />
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
