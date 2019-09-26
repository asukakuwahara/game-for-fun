import React from "react";
import Player from "../player";
import Map from "../map";

function World(props) {
  return (
    <div
      style={{
        position: "relative",
        width: "800px",
        height: "400px",
        backgroundColor: "black",
        border: "solid black 4px",
        margin: "20px auto"
      }}
    >
      <Player />
      <Map />
    </div>
  );
}

export default World;
