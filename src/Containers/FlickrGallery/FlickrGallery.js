import React from "react";
import classes from "./FlickrGallery.module.css";
import picture from "./../../Assets/Gallery/zakopane.jpg";

const FlickrGallery = () => {
  return (
    <div className={classes.content}>
      <div className={classes.body}>
        {/* <div>
        <img src={picture} />
      </div>
      <div>
        <img src={picture} />
      </div>
      <div>
        <img src={picture} />
      </div>
      <div>
        <img src={picture} />
      </div>
      <div>
        <img src={picture} />
      </div>
      <div>
        <img src={picture} />
      </div> */}
        <img src={picture} alt="" />
        <img src={picture} alt="" />
        <img src={picture} alt="" />
        <img src={picture} alt="" />
        <img src={picture} alt="" />
        <img src={picture} alt="" />
      </div>
    </div>
  );
};

export default FlickrGallery;
