import { combineReducers } from "redux";

import colors from "../res/playerColors.json";

function generatePlayerColor(state) {
  let colorIndex = Math.floor(Math.random() * colors.length);
  console.log(colorIndex);
  let unique = false;
  if (Object.keys(state.players).length < colors.length - 2) {
    while (unique === false) {
      colorIndex = Math.floor(Math.random() * colors.length);
      unique = true;
      Object.keys(state.players).filter((key) => {
        if (state.players[key].color === colors[colorIndex].color) {
          unique = false;
        }
      });
    }
    return colors[colorIndex].color;
  } else {
    return (
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .substr(0, 6)
    ); //generates a random color if we have more players than specified colors
  }
}

const defaultLocalState = {
  roomNameHidden: false,
};
const defaultSharedState = {
  roomName: "",
  gameState: "CREATE_OR_JOIN_ROOM",
  clueGiverPossibilities: [],
  clueGiverName: "",
  level: Math.floor(Math.random() * 970) + 30,
  hintIndex: 0,
  clueWord: "",
  players: {},
};
const localState = (state = defaultLocalState, action) => {
  switch (action.type) {
    case "ADD_PLAYER":
      return { ...state, localName: action.value };
    default:
      return state;
  }
};

const sharedState = (state = defaultSharedState, action) => {
  switch (action.type) {
    case "ADD_PLAYER":
      if (!state.players[action.payload]) {
        const newPlayer = {
          score: 0,
          color: generatePlayerColor(state),
        };
        const tempPlayers = {
          ...state.players,
          [action.payload]: newPlayer,
        };
        const clueGiverAdd = state.clueGiverPossibilities;
        clueGiverAdd.push(action.payload);
        return {
          ...state,
          players: tempPlayers,
          clueGiverPossibilities: clueGiverAdd,
        };
      } else {//sets localName still
        return state;
      }
    default:
      return state;
  }
};

const reducers = combineReducers({
  localState: localState,
  sharedState: sharedState,
});
export default reducers;
