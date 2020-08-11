import React from "react";

import { useSelector } from "react-redux";

import { getPlayerInfo } from "./redux/selectors";

export default function PlayerScoreboard() {
  const playerInfo = useSelector(getPlayerInfo);
  return (
    <div className="PlayerScores">
      {Object.keys(playerInfo).map((key) => {
        return (
          <div className="SingleScoreboard" style={{ borderColor: playerInfo[key].color }}>
            <h1>{key}</h1>
            <h1>{playerInfo[key].score}</h1>
          </div>
        );
      })}
    </div>
  );
}
