import React from "react";
import "./App.css";
import PictureList from "./components/PictureList";

class App extends React.Component {
  state = {
    pictures: [],
  };
  componentDidMount() {
    this.fetchPictures();
  }

  fetchPictures = () => {
    const clientID = "j1m9tHAjLDOFkedSheRYQEDKpXA-4MP_UItWcC5c5ik";

    const url =
      "https://api.unsplash.com/photos/random/?count=" +
      10 +
      "&client_id=" +
      clientID;
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ pictures: data }))
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div className="container">
        <div className="imgContainer">
          {this.state.pictures.map((pic, index) => {
            return (
              <PictureList
                key={index}
                url={pic.urls}
                desc={pic.alt_description}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
