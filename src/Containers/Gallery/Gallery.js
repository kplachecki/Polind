import React, { Component } from "react";
import classes from "./Gallery.module.css";
import picture1 from "./../../Assets/Gallery/place1.jpg";
import picture2 from "./../../Assets/Gallery/zakopane.jpg";
import picture3 from "./../../Assets/Gallery/sandomierz.jpg";
import picture4 from "./../../Assets/Gallery/sopot.jpg";
import picture5 from "./../../Assets/Gallery/place2.jpg";

class Gallery extends Component {
  render() {
    return (
      <div className={classes.body}>
        <div className={classes.element} style={{ paddingLeft: 0 }}>
          <img src={picture1} alt="Place one" />
        </div>
        <div className={classes.element}>
          <img src={picture2} alt="Zakopane" />
        </div>
        <div className={classes.element}>
          <img src={picture3} alt="Sandomierz" />
        </div>
        <div className={classes.element}>
          <img src={picture4} alt="Sopot" />
        </div>
        <div className={classes.element} style={{ paddingRight: 0 }}>
          <img src={picture5} alt="Place two" />
        </div>
      </div>
    );
  }
}

export default Gallery;
