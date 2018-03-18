import React, { Component } from "react";
// import axios from "axios";

//eventually, will need to set state object to "String"
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

  //figure out how to post the data from the user input to the db
  render() {
    return (
      <div className="create">
        <form>
          <input type="text" name="title" />
          <input type="text" name="date" />
          <input type="text" name="time" />
          <input type="text" name="location" />
          <input type="text" name="description" />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default Create;
