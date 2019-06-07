import React, { Component } from "react";
import classes from "./SearchScreen.module.css";
import InputSearch from "./../../Components/UI/InputSearch/InputSearch";

class SearchScreen extends Component {
  render() {
    return (
      <div className={classes.body}>
        <InputSearch />
      </div>
    );
  }
}

export default SearchScreen;
