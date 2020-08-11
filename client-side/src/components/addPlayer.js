import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { addPlayer } from "./redux/actions";
import { getPlayerInfo, getLocalName } from "./redux/selectors";

export default function AddPlayer() {
  const [value, setValue] = useState({});

  const dispatch = useDispatch();

  const playerInfo = useSelector(getPlayerInfo);
  const localName = useSelector(getLocalName);
  if (!localName) {
    return (
      <div>
        <input
          type="text"
          placeholder="Input Name"
          onChange={(e) => {
            setValue({ playerName: e.target.value });
          }}
        ></input>
        <button
          type="submit"
          onClick={(e) => {
            if (value.playerName) {
              if (playerInfo[value.playerName.toUpperCase()]) {
                const reply = window.confirm(
                  "This name has been taken.\n Press OK if you are rejoining otherwise press Cancel and pick a new name"
                );
                if (reply === true) {
                  dispatch(addPlayer(value.playerName.toUpperCase()));
                }
              } else {
                dispatch(addPlayer(value.playerName.toUpperCase()));
              }
            }
          }}
        >
          Join
        </button>
      </div>
    );
  } else {
    return <div></div>
  }
}
