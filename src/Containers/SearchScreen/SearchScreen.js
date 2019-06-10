import React, { Component } from "react";
import classes from "./SearchScreen.module.css";
import InputSearch from "./../../Components/UI/InputSearch/InputSearch";
import FlickrGallery from "./../FlickrGallery/FlickrGallery";
import axios from "./../../axios";
import appKey from "./../../env.json";

class SearchScreen extends Component {
  state = {
    userInput: "",
    picJSON: null
  };

  onUserInput = event => {
    this.setState({ userInput: event.target.value }, () => {
      axios
        .get(
          `/?method=flickr.photos.search&api_key=${appKey.appKey}&text=${
            this.state.userInput
          }&tags=city,poland,miasto,polska&sort=interestingness-desc&media=photos&per_page=6&page=1&format=json&nojsoncallback=1`
        )
        .then(response => {
          if (this.state.userInput.length > 0) {
            let picJSON = response.data.photos.photo;
            this.setState({ picJSON: picJSON });
          } else {
            this.setState({ picJSON: null });
          }
        });
    });
  };

  render() {
    let flickrGallery = <FlickrGallery />;
    if (this.state.picJSON) {
      flickrGallery = <FlickrGallery picJSON={this.state.picJSON} />;
    }
    return (
      <div className={classes.body}>
        <InputSearch onUserInput={this.onUserInput} />
        {flickrGallery}
      </div>
    );
  }
}

export default SearchScreen;
