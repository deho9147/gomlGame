import React from "react";

import { useSelector } from "react-redux";

import { getClueGiver, getClueWord, getLocalName } from "./redux/selectors";
export default function ClueGiverHintWord() {
  const clueGiver = useSelector(getClueGiver);
  const clueWord = useSelector(getClueWord);
  const localName = useSelector(getLocalName);

  return (
    <div>
      {clueGiver === localName ? (
        !clueWord ? (
          <div> You are the Clue Giver</div>
        ) : (
          <div>
            You gave the clue: <span>{clueWord}</span>
          </div>
        )
      ) : !clueWord ? (
        <div>
          Waiting on <span>{clueGiver}</span> to give the clue
        </div>
      ) : (
        <div>
          <span>{clueGiver}</span>gave the clue: <span>{clueWord}</span>
        </div>
      )}
    </div>
  );
}
