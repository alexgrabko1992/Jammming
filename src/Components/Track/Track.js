import React from "react";
import "./Track.css";

export default class Track extends React.Component {
  render() {
    return (
      <div class="Track">
        <div class="Track-information">
          {/* <!-- track name will go here --> */}
          <h3></h3>
          {/* <!-- track artist will go here--> | <!-- track album will go here --> */}
          <p></p>
        </div>
        {/* <!-- + or - will go here --> */}
        <button class="Track-action"></button>
      </div>
    );
  }
}
