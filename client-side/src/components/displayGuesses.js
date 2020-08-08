import React from "react";

import { useSelector } from "react-redux";

import { getPlayerInfo } from "./redux/selectors";

import { bottomBarStyle, pointerStyle } from "./styles";

export default function DisplayGuesses() {
  const players = useSelector(getPlayerInfo);
  return (
    <div className="DisplayGuesses" style={bottomBarStyle}>
      {Object.keys(players).map((key) => {
        return (
          <div
            style={{
              ...pointerStyle,
              backgroundColor: players[key].color,
              left: `calc(${(players[key].guess / 10).toString()}% - 10px)`,
            }}
          ></div>
        );
      })}
    </div>
  );
}
