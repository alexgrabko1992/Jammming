import React from "react";
import "./Playlist.css";

import TrackList from "../TrackList/TrackList";

export default class Playlist extends React.Component {
  render() {
    return (
      <div className="Playlist">
        <input value="New Playlist" />
        {/* <!-- Add a TrackList component --> */}
        <TrackList></TrackList>
        <button className="Playlist-save">SAVE TO SPOTIFY</button>
      </div>
    );
  }
}