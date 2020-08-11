import React from "react";

import { useSelector } from "react-redux";

import { getPlayerInfo } from "./redux/selectors";

import { bottomBarStyle, pointerStyle } from "./styles";

export default function DisplayGuesses() {
  const players = useSelector(getPlayerInfo);
  return (
    <div>
    <div className="DisplayGuesses" style={bottomBarStyle}>
      {Object.keys(players).map((key) => {
        if (players[key].guess) {
          return (
            <div
              style={{
                ...pointerStyle,
                borderColor: players[key].color+" transparent",
                left: `calc(${(players[key].guess / 10).toString()}% - 10px)`,
              }}
            ></div>
          );
        }
      })}
    </div>
    </div>
  );
}
