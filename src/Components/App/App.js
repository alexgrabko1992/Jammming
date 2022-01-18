import React from "react";
import "./App.css";

import Spotify from "../../util/Spotify";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      playlistName: "New playlist",
      playlistTracks: [],
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
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
  savePlaylist() {
    const trackURIs = this.playlistTracks.map((e) => e.uri);
  }
  search(term) {
    this.setState({ searchResults: Spotify.userSearch(term) });
  }
  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          {/* <!-- Add a SearchBar component --> */}
          <SearchBar onSearch={this.search}></SearchBar>
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
              onSave={this.savePlaylist}
            ></Playlist>
          </div>
        </div>
      </div>
    );
  }
}

// searchResults: [
//         {
//           name: "The best song",
//           artist: "Alex Grabko",
//           album: "The best album",
//           id: 1,
//         },
//         {
//           name: "The best song",
//           artist: "Alex Grabko",
//           album: "The best album",
//           id: 1,
//         },
//         {
//           name: "The worst song",
//           artist: "Alex Grabko",
//           album: "The worst album",
//           id: 2,
//         },
//       ],
//       playlistName: "Best playlist",
//       playlistTracks: [
//         {
//           name: "The best song",
//           artist: "Alex Grabko",
//           album: "The best album",
//           id: 1,
//           uri: "",
//         },
//       ],
