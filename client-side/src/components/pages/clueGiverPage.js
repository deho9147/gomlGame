import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { newPrompt, addClue, revealLevel } from "../redux/actions";
import { getClue, getPlayerInfo } from "../redux/selectors";

import ClueGiverClueWord from "../clueGiverClueWord";
import ShowLevel from "../showLevel";
import PlayerScoreboard from "../playerScoreboard";

export default function ClueGiverPage() {
  const [value, setValue] = useState({});
  const dispatch = useDispatch();
  const clueWord = useSelector(getClue);
  const players = useSelector(getPlayerInfo)
  const playersReady = () =>{
      let ready = true;
      Object.keys(players).filter((key) => {
        if (players.guess){
            ready = false
        }
    })
    return ready
  }
  return (
    <div className="ClueGiverPage">
      <ClueGiverClueWord />
      <ShowLevel />
      {!clueWord ? (
        <div>
          <input
            type="range"
            placeholder="Clue Word"
            onChange={(e) => {
              setValue({ clueWord: e.target });
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
      { playersReady ? (<button type="submit" onClick={(e)=>{dispatch(revealLevel)}}>Reveal Level</button>):(<div></div>)}
      <PlayerScoreboard />
    </div>
  );
}
