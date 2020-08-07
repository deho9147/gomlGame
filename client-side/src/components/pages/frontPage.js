import React, { useState } from "react";

import { useDispatch } from "react-redux";

import { createRoom, joinRoom } from "../redux/actions";

export default function FrontPage() {
  const [value, setValue] = useState({ roomName: "" });
  const dispatch = useDispatch();

  return (
    <div>
      <button
        type="submit"
        onClick={(e) => {
          dispatch(createRoom());
        }}
      >
        Create Room
      </button>
      <h2>or</h2>
      <input
        type="text"
        onChange={(e) => {
          setValue({ roomName: e.target });
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
  );
}
