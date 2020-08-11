import React from "react";

import { useSelector } from "react-redux";
import { getTimer, getClueWord } from "./redux/selectors";

export default function Timer() {
  const timer = useSelector(getTimer);
  const clueWord = useSelector(getClueWord);
  if (clueWord) {
    return (
      <div className="timer">
        {timer < 11 ? <span>{timer}</span> : <span>{timer}</span>}
      </div>
    );
  } else {
    return <div></div>;
  }
}
