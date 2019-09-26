import store from "../../config/store";
import { SPRITE_SIZE, MAP_WIDTH, MAP_HEIGHT } from "../../config/constants.js";

export default function handleMovement(player) {
  const getNewPosition = (oldPos, direction) => {
    switch (direction) {
      case "WEST":
        return [oldPos[0] - SPRITE_SIZE, oldPos[1]];
      case "EAST":
        return [oldPos[0] + SPRITE_SIZE, oldPos[1]];
      case "NORTH":
        return [oldPos[0], oldPos[1] - SPRITE_SIZE];
      case "SOUTH":
        return [oldPos[0], oldPos[1] + SPRITE_SIZE];
    }
  };

  const observeBoundaries = (oldPos, newPos) => {
    return newPos[0] >= 0 && newPos[0] <= MAP_WIDTH && (newPos[1] >= 0 && newPos[1] <= MAP_HEIGHT);
  };

  const observeImpassable = (oldPos, newPos) => {
    const tiles = store.getState().map.tiles;
    const y = newPos[1] / SPRITE_SIZE;
    const x = newPos[0] / SPRITE_SIZE;
    const nextTile = tiles[y][x];
    return nextTile < 1;
  };

  const dispatchMove = newPos => {
    store.dispatch({
      type: "MOVE_PLAYER",
      payload: {
        position: newPos
      }
    });
  };

  const attemptMove = direction => {
    const oldPos = store.getState().player.position;
    const newPos = getNewPosition(oldPos, direction);
    if (observeBoundaries(oldPos, newPos) && observeImpassable(oldPos, newPos)) {
      dispatchMove(newPos);
    }
  };

  const handleKeyDown = e => {
    if (e.keyCode === 37 || e.keyCode === 38 || e.keyCode === 39 || e.keyCode === 40) {
      e.preventDefault();
      switch (e.keyCode) {
        case 37:
          return attemptMove("WEST");
        case 38:
          return attemptMove("NORTH");
        case 39:
          return attemptMove("EAST");
        case 40:
          return attemptMove("SOUTH");
      }
    }
  };

  window.addEventListener("keydown", e => {
    handleKeyDown(e);
  });
  return player;
}
