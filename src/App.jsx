import React from "react";
import "./App.css";
import PictureList from "./components/pictureList/PictureList";
import SearchContainer from "./components/searchContainer/SearchContainer";

class App extends React.Component {
  state = {
    pictures: [],
    searchInput: "",
  };
  componentDidMount() {
    this.fetchPictures();
  }

  fetchPictures = () => {
    const clientID = "j1m9tHAjLDOFkedSheRYQEDKpXA-4MP_UItWcC5c5ik";
    const search = this.state.searchInput === "" ? "" : this.state.searchInput;

    const url = `https://api.unsplash.com/photos/random?count=10&client_id=${clientID}&query=${search}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ pictures: data }))
      .catch((err) => console.log("err", err));
  };

  searchHandler = (e) => {
    this.setState({
      searchInput: e.target.value,
    });
  };
  render() {
    return (
      <div className="container">
        <SearchContainer
          onSubmitHandler={this.fetchPictures}
          searchInput={this.state.searchInput}
          onSearhHandler={(e) => this.searchHandler(e)}
        />
        <div className="imgContainer">
          {this.state.pictures.length > 0 ? (
            this.state.pictures.map((pic, index) => {
              return (
                <PictureList
                  key={index}
                  url={pic.urls}
                  desc={pic.alt_description}
                />
              );
            })
          ) : (
            <div className="noData">No Images found</div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
