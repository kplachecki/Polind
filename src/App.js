import React from "react";
import Navbar from "./Containers/Navbar/Navbar";
import Main from "./Containers/Main/Main";
import Gallery from "./Containers/Gallery/Gallery";
import Overlay from "./Containers/Overlay/Overlay";
import classes from "./App.module.css";

function App() {
  return (
    <div>
      <div className={classes.body}>
        <Overlay />
        <Navbar />
        <Main />
        <Gallery />
      </div>
    </div>
  );
}

export default App;
