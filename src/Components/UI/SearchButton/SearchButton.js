import React, { Component } from "react";
import classes from "./SearchButton.module.css";
import { animateScroll as scroll } from "react-scroll";

class SearchButton extends Component {
  scrollToBottom = () => {
    scroll.scrollToBottom();
  };
  render() {
    return (
      <div className={classes.body}>
        <button onClick={this.scrollToBottom} className={classes.btn}>
          search your place
        </button>
      </div>
    );
  }
}

export default SearchButton;
