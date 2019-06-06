import React from "react";
import classes from "./Main.module.css";
import SearchButton from "./../../Components/UI/SearchButton/SearchButton";

const Main = () => {
  return (
    <div className={classes.body}>
      <span style={{ color: "#ffff" }}>Fall in love</span>
      <span style={{ color: "#ed6950" }}>with Poland</span>

      <p>Best way to find your perfect place in Poland</p>
      <SearchButton />
    </div>
  );
};

export default Main;
