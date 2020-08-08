import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { removePlayer } from "../redux/actions";
import { getLocalName } from "../redux/selectors";

import ClueGiverClueWord from "../clueGiverClueWord";
import Seekbar from "../seekbar";
import AddPlayer from "../addPlayer";
import PlayerScoreboard from "../playerScoreboard";

export default function GuesserPage() {
  const dispatch = useDispatch();
  const localName = useSelector(getLocalName);
  return (
    <div>
      <ClueGiverClueWord />
      <Seekbar />
      <PlayerScoreboard />
      <AddPlayer />
      {localName ? (
        <button
          type="submit"
          onClick={(e) => dispatch(removePlayer(localName))}
        >
          Leave Game
        </button>
      ) : (
        <div></div>
      )}
    </div>
  );
}
