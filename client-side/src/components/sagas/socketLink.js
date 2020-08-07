import { eventChannel } from "redux-saga";
import {
  takeEvery,
  takeLatest,
  call,
  take,
  select,
  all,
  spawn,
  put,
} from "redux-saga/effects";

import openSocket from "socket.io-client";

const ws = new openSocket("ws://localhost:3001");

function createEventChannel(mySocket) {
  return eventChannel((emit) => {
    mySocket.on("message", (data) => {
      emit(["gotMessage", data]);
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
  }
}

function createRoom(){
    ws.emit("CREATE_ROOM")
}

function joinRoom(action) {
  console.log(action.payload);
  ws.emit("JOIN_ROOM", action.payload);
}

function* sendState() {}

export default function* wsSagas() {
  yield all([
    takeEvery("CREATE_ROOM", createRoom),
    takeEvery("JOIN_ROOM", joinRoom),
    takeEvery("ADD_PLAYER", sendState),
  ]);
}
