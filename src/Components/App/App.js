import React from "react";
import "./App.css";

import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          {/* <!-- Add a SearchBar component --> */}
          <SearchBar></SearchBar>
          <div className="App-playlist">
            {/* <!-- Add a SearchResults component --> */}
            <SearchResults></SearchResults>
            {/* <!-- Add a Playlist component --> */}
            <Playlist></Playlist>
          </div>
        </div>
      </div>
    );
  }
}
