import React, { Component } from "react";
import axios from "axios";

class Create extends Component {
  constructor() {
    super();
    this.state = {
      title: "title",
      date: "date",
      time: "time",
      location: "Location",
      description: "description"
    };
  }

  render() {
    return (
      <div className="create">
        <form>
          <input type="text" name="title" value="title" />
          <input type="text" name="date" value="date" />
          <input type="text" name="time" value="time" />
          <input type="text" name="location" value="location" />
          <input type="text" name="description" value="description" />
          <input type="submit" value="submit" value="Add Event!" />
        </form>
      </div>
    );
  }
}

export default Create;
