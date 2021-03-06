import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { startGuessing } from "../redux/actions";
import { getLocalName } from "../redux/selectors";

import Header from "../header";
import AddPlayer from "../addPlayer";
import PlayerScoreboard from "../playerScoreboard";
import Rules from "./rules";

export default function WaitingRoom() {
  const localName = useSelector(getLocalName);
  const dispatch = useDispatch();

  return (
    <div className="WaitingRoom">
      <Header/>
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
      <Rules/>
    </div>
  );
}
