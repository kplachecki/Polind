import React, { Component } from "react";
import classes from "./FlickrGallery.module.css";

class FlickrGallery extends Component {
  render() {
    let img = null;
    if (this.props.picJSON) {
      img = this.props.picJSON.map(pic => {
        let srcPath = `https://farm${pic.farm}.staticflickr.com/${pic.server}/${
          pic.id
        }_${pic.secret}.jpg`;

        return <img key={pic.id} alt="" src={srcPath} />;
      });
    } else return false;

    return (
      <div className={classes.body}>
        <div className={classes.content}>{img}</div>
      </div>
    );
  }
}

export default FlickrGallery;
