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

function* sendState() {}

export default function* wsSagas() {
  yield all([takeEvery("ADD_PLAYER", sendState)]);
}
