import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { startGuessing } from "../redux/actions";
import { getClueGiver, getLocalName } from "../redux/selectors";

import RoomName from "../roomName";
import ClueGiverHintWord from "../clueGiverClueWord";
import ShowLevel from "../showLevel";
import DisplayGuesses from "../displayGuesses";
import Prompt from "../prompt";
import PlayerScoreboard from "../playerScoreboard";
import AddPlayer from "../addPlayer";

export default function LevelRevealPage() {
  const clueGiver = useSelector(getClueGiver);
  const localName = useSelector(getLocalName);
  const dispatch = useDispatch();

  return (
    <div className="LevelRevealPage">
      <RoomName />
      <ClueGiverHintWord />
      <ShowLevel />
      <DisplayGuesses />
      <Prompt />
      <div>
      {localName === clueGiver ? (
        <button
          type="submit"
          onClick={(e) => {
            dispatch(startGuessing());
          }}
        >
          Next Turn
        </button>
      ) : (
        <div></div>
      )}
      </div>
      <PlayerScoreboard />
      <AddPlayer />
    </div>
  );
}
