import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { removePlayer } from "../redux/actions";
import { getLocalName } from "../redux/selectors";

import Header from "../header";
import Timer from "../timer";
import ClueGiverClueWord from "../clueGiverClueWord";
import Seekbar from "../seekbar";
import AddPlayer from "../addPlayer";
import PlayerScoreboard from "../playerScoreboard";

export default function GuesserPage() {
  const dispatch = useDispatch();
  const localName = useSelector(getLocalName);
  //prompt in seekbar componenent
  return (
    <div className="GuesserPage">
      <Header />
      <Timer />
      <ClueGiverClueWord />
      <Seekbar />
      <PlayerScoreboard />
      <AddPlayer />
      <div>
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
    </div>
  );
}
