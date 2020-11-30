import React from "react";
import "./App.css";
import PictureList from "./components/pictureList/PictureList";
import SearchContainer from "./components/searchContainer/SearchContainer";

class App extends React.Component {
  state = {
    pictures: [],
    searchInput: "",
    showZoom: -1,
    imgZoom: "",
  };
  componentDidMount() {
    this.fetchPictures();
  }

  fetchPictures = () => {
    const clientID = "j1m9tHAjLDOFkedSheRYQEDKpXA-4MP_UItWcC5c5ik";
    const search = this.state.searchInput === "" ? "" : this.state.searchInput;

    const url = `https://api.unsplash.com/photos/random?count=12&client_id=${clientID}&query=${search}`;

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

  onZoomHandler = (index) => {
    if (index === this.state.showZoom) {
      this.setState({ showZoom: -1, imgZoom: "" });
    } else {
      this.setState({ showZoom: index, imgZoom: "" });
    }
  };

  onZoomIn = (e) => {
    e.stopPropagation();
    if (this.state.imgZoom.length > 0) {
      this.setState({ imgZoom: "" });
    } else {
      this.setState({ imgZoom: "imgZoom" });
    }
  };

  render() {
    return (
      <div id="container" className="container">
        <SearchContainer
          onSubmitHandler={this.fetchPictures}
          searchInput={this.state.searchInput}
          onSearhHandler={(e) => this.searchHandler(e)}
        />
        <div className="imgContainer" ref={this.loader}>
          {this.state.pictures.length > 0 ? (
            this.state.pictures.map((pic, index) => {
              return (
                <PictureList
                  key={index}
                  id={index}
                  url={pic.urls}
                  desc={pic.alt_description}
                  zoomHandler={() => this.onZoomHandler(index)}
                  showZoom={this.state.showZoom}
                  zoomInImg={this.onZoomIn}
                  imgStyle={this.state.imgZoom}
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
