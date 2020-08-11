import React from "react";

import { useSelector } from "react-redux";
import { getTimer, getClueWord } from "./redux/selectors";

export default function Timer() {
  const timer = useSelector(getTimer);
  const clueWord = useSelector(getClueWord);
  const style = {fontSize:"40px"}
  if (clueWord) {
    return (
      <div className="timer">
        {timer < 11 ? (<span style={{...style,color:"red"}}>{timer}</span>) : (<span style={style}>{timer}</span>)}
      </div>
    );
  } else {
    return <div></div>;
  }
}
