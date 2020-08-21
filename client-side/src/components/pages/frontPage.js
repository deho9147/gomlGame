import React, { useState } from "react";

import { useDispatch } from "react-redux";

import { createRoom, joinRoom } from "../redux/actions";
import Rules from "./rules";
import Header from "../header";
import Footer from "../footer";

export default function FrontPage() {
  const [value, setValue] = useState({ roomName: "" });
  const dispatch = useDispatch();

  return (
    <div className="FrontPage">
      <Header />
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
          placeholder="Room Name"
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
      <Rules />
      <Footer />
    </div>
  );
}
