import React from "react";
import "./App.css";

import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {
          name: "The best song",
          artist: "Alex Grabko",
          album: "The best album",
          id: 1,
        },
        {
          name: "The best song",
          artist: "Alex Grabko",
          album: "The best album",
          id: 1,
        },
        {
          name: "The worst song",
          artist: "Alex Grabko",
          album: "The worst album",
          id: 2,
        },
      ],
      playlistName: "Best playlist",
      playlistTracks: [
        {
          name: "The best song",
          artist: "Alex Grabko",
          album: "The best album",
          id: 1,
        },
      ],
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
  }

  addTrack(track) {
    if (
      this.state.playlistTracks.find((savedTrack) => savedTrack.id === track.id)
    ) {
      return;
    } else {
      this.setState({ playlistTracks: [...this.state.playlistTracks, track] });
    }
  }
  removeTrack(track) {
    this.setState({
      playlistTracks: [
        ...this.state.playlistTracks.filter((e) => e.id !== track.id),
      ],
    });
  }
  updatePlaylistName(name) {
    this.setState({ playlistName: name });
  }

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
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
            ></SearchResults>
            {/* <!-- Add a Playlist component --> */}
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
            ></Playlist>
          </div>
        </div>
      </div>
    );
  }
}
