import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { newPrompt, addClue, revealLevel } from "../redux/actions";
import { getPlayerInfo, getClueWord } from "../redux/selectors";

import RoomName from "../roomName";
import Timer from "../timer";
import ClueGiverClueWord from "../clueGiverClueWord";
import ShowLevel from "../showLevel";
import { bottomBarStyle } from "../styles";
import Prompt from "../prompt";
import PlayerScoreboard from "../playerScoreboard";

export default function ClueGiverPage() {
  const [value, setValue] = useState({});
  const dispatch = useDispatch();
  const clueWord = useSelector(getClueWord);
  const players = useSelector(getPlayerInfo);
  const playersReady = () => {
    let ready = true;
    Object.keys(players).filter((key) => {
      if (players.guess) {
        ready = false;
      }
    });
    return ready;
  };
  return (
    <div className="ClueGiverPage">
      <RoomName />
      <Timer />
      <ClueGiverClueWord />
      <ShowLevel />
      <div style={bottomBarStyle}></div>
      <Prompt />
      {!clueWord ? (
        <div>
          <input
            type="text"
            placeholder="Clue Word"
            onChange={(e) => {
              setValue({ clueWord: e.target.value });
            }}
          ></input>
          <button
            type="submit"
            onClick={(e) => {
              dispatch(addClue(value.clueWord));
            }}
          >
            Add Clue
          </button>
          <button
            type="submit"
            onClick={(e) => {
              dispatch(newPrompt());
            }}
          >
            New Prompt
          </button>
        </div>
      ) : (
        <div></div>
      )}
      {playersReady ? (
        <button
          type="submit"
          onClick={(e) => {
            dispatch(revealLevel());
          }}
        >
          Reveal Level
        </button>
      ) : (
        <div></div>
      )}
      <PlayerScoreboard />
    </div>
  );
}
