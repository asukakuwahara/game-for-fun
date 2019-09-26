import React from "react";
import { SPRITE_SIZE } from "../../config/constants";
import style from "./styles.css";
import { connect } from "react-redux";
const getTileSprite = type => {
  switch (type) {
    case 0:
      return "grass";
    case 1:
      return "rock";
    case 2:
      return "tree";
    case 3:
      return "chest";
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
    <div className="row">
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
