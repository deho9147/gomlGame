import { eventChannel } from "redux-saga";
import {
  takeEvery,
  call,
  take,
  select,
  all,
  spawn,
  put,
} from "redux-saga/effects";

import openSocket from "socket.io-client";

import { getSharedState, getRoomName } from "../redux/selectors";
const ws = new openSocket("https://goml-websocket.wl.r.appspot.com");

function createEventChannel(mySocket) {
  return eventChannel((emit) => {
    mySocket.on("UPDATE_STATE", (state) => {
      emit(["UPDATE_STATE", state]);
    });
    mySocket.on("JOIN_ROOM", (data) => {
      emit(["JOIN_ROOM", data]);
    });
    mySocket.on("UPDATE_TIME", (timeRemaining) => {
      emit(["UPDATE_TIME", timeRemaining]);
    });
    mySocket.on("TIMER_DONE", (data) => {
      emit(["TIMER_DONE"]);
    });
    mySocket.on("ROOM_ERROR", (data) => {
      emit(["ROOM_ERROR", data]);
    });
    return () => {
      mySocket.close();
    };
  });
}
function* recieveFromSocket() {
  const channel = yield call(createEventChannel, ws);
  while (true) {
    const messageTuple = yield take(channel);
    if (messageTuple[0] === "UPDATE_STATE") {
      yield put({ type: "UPDATE_STATE", payload: messageTuple[1] });
    } else if (messageTuple[0] === "JOIN_ROOM") {
      yield updateState();
    } else if (messageTuple[0] === "UPDATE_TIME") {
      yield put({ type: "UPDATE_TIME", payload: messageTuple[1] });
    } else if (messageTuple[0] === "TIMER_DONE") {
      yield put({ type: "REVEAL_LEVEL" });
    } else if (messageTuple[0] === "ROOM_ERROR") {
      alert("The room you are trying to join does not exist");
    }
  }
}

export default function* wsSagas() {
  yield all([
    takeEvery("CREATE_ROOM", createRoom),
    takeEvery("JOIN_ROOM", joinRoom),

    takeEvery("ADD_PLAYER", updateState),
    takeEvery("REMOVE_PLAYER", updateState),

    takeEvery("NEW_PROMPT", updateState),
    takeEvery("ADD_CLUE", updateState),
    takeEvery("ADD_CLUE", startTimer),
    takeEvery("ADD_GUESS", updateState),

    takeEvery("START_GUESSING", updateState),
    takeEvery("REVEAL_LEVEL", updateState),
    takeEvery("REVEAL_LEVEL", stopTimer),

    spawn(recieveFromSocket),
  ]);
}

function* createRoom() {
  const state = yield select(getSharedState);
  ws.emit("CREATE_ROOM", state);
}

function joinRoom(action) {
  ws.emit("JOIN_ROOM", action.payload);
}

function* updateState() {
  const state = yield select(getSharedState);
  ws.emit("UPDATE_STATE", state);
}

function* startTimer() {
  const roomName = yield select(getRoomName);
  ws.emit("START_TIMER", roomName);
}
function* stopTimer() {
  const roomName = yield select(getRoomName);
  ws.emit("STOP_TIMER", roomName);
}
