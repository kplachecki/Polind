import React, { Component } from "react";
import classes from "./LocalGallery.module.css";
import picture1 from "./../../Assets/Gallery/place1.jpg";
import picture2 from "./../../Assets/Gallery/zakopane.jpg";
import picture3 from "./../../Assets/Gallery/sandomierz.jpg";
import picture4 from "./../../Assets/Gallery/sopot.jpg";
import picture5 from "./../../Assets/Gallery/place2.jpg";

class LocalGallery extends Component {
  render() {
    return (
      <div className={classes.body}>
        <div
          className={classes.element}
          style={{ marginLeft: 0, backgroundImage: `url(${picture1})` }}
        />
        <div
          className={classes.element}
          style={{ backgroundImage: `url(${picture2})` }}
        >
          <div className={classes.content}>
            <span>zakopane</span>
            <span>małopolskie</span>
          </div>
        </div>
        <div
          className={classes.element}
          style={{ backgroundImage: `url(${picture3})` }}
        >
          <div className={classes.content}>
            <span>sandomierz</span>
            <span>świętokrzyskie</span>
          </div>
        </div>
        <div
          className={classes.element}
          style={{ backgroundImage: `url(${picture4})` }}
        >
          <div className={classes.content}>
            <span>sopot</span>
            <span>pomorskies</span>
          </div>
        </div>
        <div
          className={classes.element}
          style={{ marginRight: 0, backgroundImage: `url(${picture5})` }}
        />
      </div>
    );
  }
}

export default LocalGallery;
