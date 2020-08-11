import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { getRoomName, getRoomNameHidden } from "./redux/selectors";
import { toggleRoomNameHidden } from "./redux/actions";

export default function RoomName() {
  const roomName = useSelector(getRoomName);
  const hidden = useSelector(getRoomNameHidden);
  const dispatch = useDispatch();

  return (
    <div className="RoomName">
      {!hidden ? (<h1>{roomName}</h1>):(<h1>Hidden</h1>)}
      <button
        type="submit"
        onClick={(e) => {
          dispatch(toggleRoomNameHidden());
        }}
      >
        {hidden ? "Show" : "Hide"}
      </button>
      <button
        type="submit"
        onClick={(e) => {
          const text = document.createElement("textarea");
          text.value = roomName;
          document.body.appendChild(text);
          text.select();
          document.execCommand("copy");
          document.body.removeChild(text);
        }}
      >
        Copy
      </button>
    </div>
  );
}
