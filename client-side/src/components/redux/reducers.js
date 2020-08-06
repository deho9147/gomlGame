import { combineReducers } from "redux";

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
  playerArray: {},
};
const localState = (state = defaultLocalState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const sharedState = (state = defaultSharedState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};


const reducers = combineReducers({
  localState: localState,
  sharedState: sharedState,
});
export default reducers