import React, { Component } from "react";
import classes from "./SearchScreen.module.css";
import InputSearch from "./../../Components/UI/InputSearch/InputSearch";
import FlickrGallery from "./../FlickrGallery/FlickrGallery";

class SearchScreen extends Component {
  render() {
    return (
      <div className={classes.body}>
        <InputSearch />
        <FlickrGallery />
      </div>
    );
  }
}

export default SearchScreen;
