import React from "react";
import { SPRITE_SIZE } from "../../config/constants";
import style from "./styles.css";
import { connect } from "react-redux";
const getTileSprite = type => {
  switch (type) {
    case 0:
      return "grass";
    case 5:
      return "rock";
    case 6:
      return "tree";
    case 2:
      return "chest";
    case 1:
      return "tree";
  }
};
const MapTile = props => {
  return (
    <div
      className={`tile ${getTileSprite(props.tile)}`}
      style={{ height: SPRITE_SIZE, width: SPRITE_SIZE }}
    ></div>
  );
};

const MapRow = props => {
  return (
    <div className="row" style={{ height: "40px" }}>
      {props.tiles.map(tile => (
        <MapTile tile={tile} />
      ))}
    </div>
  );
};

function Map(props) {
  return (
    <div>
      {props.tiles.map(row => (
        <MapRow tiles={row} />
      ))}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    tiles: state.map.tiles
  };
};
export default connect(mapStateToProps)(Map);
