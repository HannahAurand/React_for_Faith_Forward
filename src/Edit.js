import React, { Component } from "react";
// import axios from "axios";

class Edit extends Component {
  constructor() {
    super();
    this.state = {
      title: "titleedit",
      date: "dateedit",
      time: "timeedit",
      location: "Locationedit",
      description: "descriptionedit"
    };
  }

  render() {
    return (
      <div>
        <h1>BUNNIES</h1>
        <form>
          <input type="text" name="title" value="title" />
          <input type="text" name="date" value="date" />
          <input type="text" name="time" value="time" />
          <input type="text" name="location" value="location" />
          <input type="text" name="description" value="description" />
          <input type="submit" value="submit" value="Submit Edits!" />
        </form>
      </div>
    );
  }
}

export default Edit;
