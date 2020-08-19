import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { addGuess } from "./redux/actions";
import { getClueWord, getLocalName, getPlayerInfo } from "./redux/selectors";
import { topBarStyle, bottomBarStyle, pointerStyle } from "./styles";
import Prompt from "./prompt";

export default function Seekbar() {
  const [value, setValue] = useState({ position: 500, dragging: false });
  const dispatch = useDispatch();

  const clueWord = useSelector(getClueWord);
  const localName = useSelector(getLocalName);
  const players = useSelector(getPlayerInfo);

  const getClickLocation = (e) => {
    let location =
      ((e.clientX - e.currentTarget.offsetLeft) / e.currentTarget.clientWidth) *
      1000;
    if (location > 998) {
      location = 998;
    }
    if (location < 2) {
      location = 2;
    }
    return location;
  };

  return (
    <div className="Seekbar">
      <div
        style={topBarStyle}
        onMouseDown={(e) => {
          setValue({ position: getClickLocation(e), dragging: true });
        }}
        onMouseMove={(e) => {
          if (value.dragging) {
            setValue({ position: getClickLocation(e), dragging:true });
          }
        }}
        onMouseUp={(e) => {
          setValue({ position: getClickLocation(e), dragging: false });
        }}
      ></div>
      <div
        style={bottomBarStyle}
        onMouseDown={(e) => {
          setValue({ position: getClickLocation(e), dragging: true });
        }}
        onMouseMove={(e) => {
          if (value.dragging) {
            setValue({ position: getClickLocation(e), dragging:true });
          }
        }}
        onMouseUp={(e) => {
          setValue({ position: getClickLocation(e), dragging: false });
        }}
      >
        {localName ? (
          <div
            style={{
              ...pointerStyle,
              borderColor: players[localName].color + " transparent",
              left: `calc(${(value.position / 10).toString()}% - 10px)`,
            }}
          ></div>
        ) : (
          <div
            style={{
              ...pointerStyle,
              borderColor: "red transparent",
              left: `calc(${(value.position / 10).toString()}% - 10px)`,
            }}
          ></div>
        )}
      </div>
      <Prompt style={{ width: "100%" }} />
      {clueWord ? (
        <button
          type="submit"
          onClick={(e) => {
            dispatch(addGuess(localName, value.position));
          }}
        >
          {players[localName].guess ? (
            <div>Update Guess</div>
          ) : (
            <div>Add Guess</div>
          )}
        </button>
      ) : (
        <div></div>
      )}
    </div>
  );
}
