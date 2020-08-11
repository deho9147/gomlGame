import React from "react";

import { useSelector } from "react-redux";

import { getClueGiver, getClueWord, getLocalName } from "./redux/selectors";
export default function ClueGiverHintWord() {
  const clueGiver = useSelector(getClueGiver);
  const clueWord = useSelector(getClueWord);
  const localName = useSelector(getLocalName);

  const style = {
    fontSize:"40px"
  }

  return (
    <div className="ClueGiverClueWord">
      {clueGiver === localName ? (
        !clueWord ? (
          <div> You are the Clue Giver</div>
        ) : (
          <div>
            You gave the clue: <span style={style}>{clueWord}</span>
          </div>
        )
      ) :( !clueWord ? (
        <div>
          Waiting on <span style={style} >{clueGiver}</span> to give the clue
        </div>
      ) : (
        <div>
          <span style={style} >{clueGiver}</span> gave the clue: <span style={style}>{clueWord}</span>
        </div>
      ))}
    </div>
  );
}
