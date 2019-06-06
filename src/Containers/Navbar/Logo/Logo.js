import React from "react";
import ReactSVG from "react-svg";
import logo from "./../../../Assets/Logo/logo.svg";
import classes from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={classes.logo}>
      <ReactSVG src={logo} href={"/"} />
    </div>
  );
};

export default Logo;
