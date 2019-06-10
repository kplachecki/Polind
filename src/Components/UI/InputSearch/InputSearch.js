import React from "react";
import classes from "./InputSearch.module.css";

const InputSearch = props => {
  return (
    <div className={classes.body}>
      <label>where you want to go?</label>
      <input type="text" placeholder="Search.." onChange={props.onUserInput} />
    </div>
  );
};

export default InputSearch;
