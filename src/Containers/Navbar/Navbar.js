import React from "react";
import Logo from "./Logo/Logo";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={classes.body}>
      <Logo />
      <ul>
        <li>
          <a href="#">Guide</a>
        </li>
        <li>
          <a href="#">Journey</a>
        </li>
        <li>
          <a href="#">Hotels</a>
        </li>
        <li>
          <a href="#">Travelers</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
