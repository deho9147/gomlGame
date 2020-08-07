import React from "react";

import { useSelector } from "react-redux";

import { getPLayerInfo } from "./redux/selectors";

export default function PlayerScoreboard() {
  const playerInfo = useSelector(getPLayerInfo);
  return (
    <div className="playerScores">
      {Object.keys(playerInfo).map((key) => {
        return (
          <div className="singleScoreboard" style={{ borderColor: playerInfo[key].color }}>
            <h1>{key}</h1>
            <h1>{playerInfo[key].score}</h1>
          </div>
        );
      })}
    </div>
  );
}
