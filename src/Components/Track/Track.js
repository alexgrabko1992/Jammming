import React from "react";
import "./Track.css";

export default class Track extends React.Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }
  addTrack() {
    this.props.onAdd(this.props.track);
  }
  removeTrack() {
    this.props.onRemove(this.props.track);
  }
  render() {
    return (
      <div class="Track">
        <div class="Track-information">
          {/* <!-- track name will go here --> */}
          <h3>{this.props.track.name}</h3>
          {/* <!-- track artist will go here--> | <!-- track album will go here --> */}
          <p>
            {this.props.track.artist} | {this.props.track.album}
          </p>
        </div>
        {/* <!-- + or - will go here --> */}
        {this.props.isRemoval ? (
          <button class="Track-action" onClick={this.removeTrack}>
            -
          </button>
        ) : (
          <button class="Track-action" onClick={this.addTrack}>
            +
          </button>
        )}
      </div>
    );
  }
}
