import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { startGuessing } from "../redux/actions";
import { getLocalName } from "../redux/selectors";

import RoomName from "../roomName";
import AddPlayer from "../addPlayer";
import PlayerScoreboard from "../playerScoreboard";

export default function WaitingRoom() {
  const localName = useSelector(getLocalName);
  const dispatch = useDispatch();

  return (
    <div className="WaitingRoom">
      <RoomName />
      <h1>Waiting for Players to Join</h1>
      <AddPlayer />
      {localName ? (
        <button type="submit" onClick={(e) => dispatch(startGuessing())}>
          Start Game
        </button>
      ) : (
        <div></div>
      )}
      <PlayerScoreboard />
    </div>
  );
}
