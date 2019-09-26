import React from "react";

function Map(props) {
  return (
    <div>
      {" "}
      {props.tiles.map(tile => (
        <MapTile value={tile} />
      ))}
    </div>
  );
}

export default Map;
