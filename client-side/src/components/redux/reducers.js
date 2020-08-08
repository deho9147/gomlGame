import { combineReducers } from "redux";

import colors from "../res/playerColors.json";
import prompts from "../res/prompts.json";

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

function newClueGiver(state) {
  let newClueGiverPossiblities = [];
  if (state.clueGiverPossibilities.length === 0) {
    newClueGiverPossiblities = Object.keys(state.players);
  } else {
    newClueGiverPossiblities = state.clueGiverPossibilities.slice(0); //duplicates array
  }
  const index = Math.floor(Math.random() * newClueGiverPossiblities.length);
  const newClueGiver = newClueGiverPossiblities[index];
  newClueGiverPossiblities.splice(index, 1);
  return {
    clueGiver: newClueGiver,
    clueGiverPossibilities: newClueGiverPossiblities,
  };
}

function scorePoints(state) {
  let clueGiverPoints = 0;
  const updatedPlayers = Object.keys(state.players).reduce((pastArray, key) => {
    let updatedPlayer = { ...state.playerArray[key] };
    if (state.players[key].guess !== undefined) {
      console.log("has guess");
      if (
        state.players[key].guess > state.level - 30 &&
        state.players[key].guess <= state.level
      ) {
        updatedPlayer = {
          ...state.players[key],
          score: state.players[key].score + 4,
        };
        clueGiverPoints = clueGiverPoints + 1;
      } else if (
        state.players[key].guess > state.level - 60 &&
        state.players[key].guess <= state.level + 30
      ) {
        updatedPlayer = {
          ...state.tempPlayers[key],
          score: state.players[key].score + 3,
        };
        clueGiverPoints = clueGiverPoints + 1;
      } else if (
        state.players[key].guess > state.level - 90 &&
        state.players[key].guess <= state.level + 60
      ) {
        updatedPlayer = {
          ...state.players[key],
          score: state.players[key].score + 2,
        };
        clueGiverPoints = clueGiverPoints + 1;
      }
    }
    return { ...pastArray, [key]: updatedPlayer };
  }, state.players);
  const updateClueGiverScore = {
    ...updatedPlayers[state.clueGiverName],
    score: state.playerArray[state.clueGiverName].score + clueGiverPoints,
  };
  const returnArray = {
    ...updatedPlayers,
    [state.clueGiverName]: updateClueGiverScore,
  };
  return returnArray;
}

function clearGuesses(state) {
  const updatedPlayers = Object.keys(state.players).reduce((pastArray, key) => {
    const updatedPlayer = { ...state.players[key], guess: undefined };
    return { ...pastArray, [key]: updatedPlayer };
  }, state.players);
  return updatedPlayers;
}

function newPrompt() {
  const newLevel = Math.floor(Math.random() * 970) + 30;
  const promptIndex = Math.floor(Math.random() * prompts.length);
  return { level: newLevel, prompt: promptIndex };
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
  promptIndex: 0,
  clueWord: "",
  players: {},
};

const localState = (state = defaultLocalState, action) => {
  switch (action.type) {
    case "ADD_PLAYER":
      return { ...state, localName: action.value };
    case "REMOVE_PLAYER":
      return { ...state, localName: undefined };
    default:
      return state;
  }
};

const sharedState = (state = defaultSharedState, action) => {
  switch (action.type) {
    case "JOIN_ROOM":
      return { ...state, roomName: action.payload };
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
      } else {
        //sets localName still
        return state;
      }
    case "REMOVE_PLAYER":
      const updatedClueGivers = state.clueGiverPossibilities.map((key) => {
        if (key !== action.payload) {
          return key;
        }
      });
      const updatedPlayers = { ...state.players };
      delete updatedPlayers[action.payload];
      return {
        ...state,
        clueGiverPossibilities: updatedClueGivers,
        players: updatedPlayers,
      };

    case "NEW_PROMPT":
      const updatedPrompt = newPrompt();
      return {
        ...state,
        level: updatedPrompt.level,
        prompt: updatedPrompt.prompt,
      };
    case "ADD_CLUE":
      return{
        ...state,
        clueWord:action.value
      }
    case "ADD_GUESS":
      if (state.playerName[action.playerName]) {
        const updatedPlayer = {
          ...state.players[action.playerName],
          guess: action.payload,
        };
        const updatedPlayers = {
          ...state.players,
          [action.playerName]: updatedPlayer,
        };
        return { ...state, players: updatedPlayers };
      } else {
        return state;
      }

    case "START_GUESSING":
      const noGuessPlayers = clearGuesses(state);
      const clueGiverVals = newClueGiver(state);
      const updatePrompt = newPrompt();
      return {
        ...state,
        players: noGuessPlayers,
        clueGiver: clueGiverVals.clueGiver,
        clueGiverPossibilities: clueGiverVals.clueGiverPossibilities,
        level: updatePrompt.level,
        prompt: updatePrompt.prompt,
        gameState: "GUESSING",
      };
    case "REVEAL_LEVEL":
      const scoredPlayers = scorePoints(state);
      return { ...state, players: scoredPlayers, gameState: "LEVEL_REVEAL" };
    default:
      return state;
  }
};

const reducers = combineReducers({
  localState: localState,
  sharedState: sharedState,
});
export default reducers;
