import React, { useState } from "react";

import { useDispatch } from "react-redux";

import { createRoom, joinRoom } from "../redux/actions";

export default function FrontPage() {
  const [value, setValue] = useState({ roomName: "" });
  const dispatch = useDispatch();

  return (
    <div className="FrontPage">
      <button
        type="submit"
        onClick={(e) => {
          dispatch(createRoom());
        }}
      >
        Create Room
      </button>
      <div>or</div>
      <div>
        <input
          type="text"
          onChange={(e) => {
            setValue({ roomName: e.target.value });
          }}
          placeholder="Enter Room Name"
        ></input>
        <button
          type="submit"
          onClick={(e) => {
            dispatch(joinRoom(value.roomName.toUpperCase()));
          }}
        >
          Join Room
        </button>
      </div>
    </div>
  );
}
