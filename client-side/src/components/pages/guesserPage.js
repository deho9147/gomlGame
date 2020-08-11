import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { removePlayer } from "../redux/actions";
import { getLocalName } from "../redux/selectors";

import RoomName from "../roomName";
import Timer from "../timer";
import ClueGiverClueWord from "../clueGiverClueWord";
import Seekbar from "../seekbar";
import Prompt from "../prompt";
import AddPlayer from "../addPlayer";
import PlayerScoreboard from "../playerScoreboard";

export default function GuesserPage() {
  const dispatch = useDispatch();
  const localName = useSelector(getLocalName);
  return (
    <div className="GuesserPage">
      <RoomName />
      <Timer />
      <ClueGiverClueWord />
      <Seekbar />
      <Prompt />
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
