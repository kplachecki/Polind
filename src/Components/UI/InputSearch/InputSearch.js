import React from "react";
import classes from "./InputSearch.module.css";

const InputSearch = () => {
  return (
    <div className={classes.body}>
      <label>where you want to go?</label>
      <input type="text" placeholder="Search.." />
    </div>
  );
};

export default InputSearch;
