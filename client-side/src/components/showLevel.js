import React from "react";

import { useSelector } from "react-redux";

import { getGameState, getLevel } from "./redux/selectors";
import { topBarStyle, bottomBarStyle } from "./styles";

export default function ShowLevel() {
  const gameState = useSelector(getGameState);
  const levelPercentage = useSelector(getLevel) / 10;

  const outsideColor = "#ffff1a";
  const insideColor = "#ff6600";
  const centerColor = "#ff1a1a";
  const textColor = "#000000";

  const indicatorOutsideStyleLeft = {
    width: "3%",
    color: textColor,
    height: "30px",
    backgroundColor: outsideColor,
    position: "absolute",
    left: (levelPercentage - 9).toString() + "%",
    borderBottomLeftRadius: "5px",
    borderTopLeftRadius: "5px",
    lineHeight: "30px",
  };
  const indicatorOutsideStyleRight = {
    width: "3%",
    color: textColor,
    height: "30px",
    backgroundColor: outsideColor,
    position: "absolute",
    left: (levelPercentage + 3).toString() + "%",
    borderBottomRightRadius: "5px",
    borderTopRightRadius: "5px",
    lineHeight: "30px",
  };
  const indicatorInsideStyleLeft = {
    width: "3%",
    color: textColor,
    height: "30px",
    backgroundColor: insideColor,
    position: "absolute",
    left: (levelPercentage - 6).toString() + "%",
    lineHeight: "30px",
  };
  const indicatorInsideStyleRight = {
    width: "3%",
    color: textColor,
    height: "30px",
    backgroundColor: insideColor,
    position: "absolute",
    left: levelPercentage.toString() + "%",
    lineHeight: "30px",
  };
  const indicatorCenterStyle = {
    width: "3%",
    color: textColor,
    height: "30px",
    backgroundColor: centerColor,
    position: "absolute",
    left: (levelPercentage - 3).toString() + "%",
    lineHeight: "30px",
  };
  return (
    <div>
      <div className="ShowLevel" style={topBarStyle}>
        <div style={indicatorOutsideStyleLeft}>2</div>
        <div style={indicatorInsideStyleLeft}>3</div>
        <div style={indicatorCenterStyle}>4</div>
        <div style={indicatorInsideStyleRight}>3</div>
        <div style={indicatorOutsideStyleRight}>2</div>
      </div>
      {gameState === "GUESSING" ? (<div style={bottomBarStyle}></div>):(<div></div>)}
    </div>
  );
}
