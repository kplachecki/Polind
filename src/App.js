import React from "react";
import Navbar from "./Containers/Navbar/Navbar";
import Main from "./Containers/Main/Main";
import LocalGallery from "./Containers/LocalGallery/LocalGallery";
import Overlay from "./Containers/Overlay/Overlay";
import classes from "./App.module.css";
import SearchScreen from "./Containers/SearchScreen/SearchScreen";

function App() {
  return (
    <div>
      <div className={classes.mainBody}>
        <Overlay />
        <Navbar />
        <Main />
        <LocalGallery />
      </div>
      <div className={classes.searchBody}>
        <SearchScreen />
      </div>
    </div>
  );
}

export default App;
