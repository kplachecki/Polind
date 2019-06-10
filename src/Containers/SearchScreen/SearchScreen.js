import React, { Component } from "react";
import classes from "./SearchScreen.module.css";
import InputSearch from "./../../Components/UI/InputSearch/InputSearch";
import FlickrGallery from "./../FlickrGallery/FlickrGallery";

class SearchScreen extends Component {
  state = {
    userInput: ""
  };

  onUserInput = event => {
    this.setState({ userInput: event.target.value });
  };
  render() {
    return (
      <div className={classes.body}>
        <InputSearch onUserInput={this.onUserInput} />
        <FlickrGallery />
      </div>
    );
  }
}

export default SearchScreen;
