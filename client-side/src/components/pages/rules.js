import React from "react";
import ShowLevel from "../showLevel";
import Prompt from "../prompt";
import Seekbar from "../seekbar";
import { bottomBarStyle } from "../styles";
export default function Rules() {
  return (
    <div className="Rules">
      <h1> Rules</h1>
      <div
        className="Rules"
        style={{
          borderColor: "#002699",
          borderStyle: "solid",
          borderWidth: "10px",
          borderRadius: "20px",
          margin: "20px",
        }}
      >
        <h1>Clue Giver</h1>
        <p>As the Clue Giver, You are given a Level: </p>
        <ShowLevel />
        <div>
          <div style={bottomBarStyle}></div>
        </div>
        <p> which is only visible to You and a Prompt:</p>
        <Prompt />{" "}
        <p>
          which is seen by all players.<br></br>
          <br></br>
          Using the Prompt, You want to devise a word or phrase to guide the
          Guessers to move their Tuner to match the hidden Level. For each
          Guesser to match the Level, You gain 1 point.
        </p>
      </div>
      <div
        className="Rules"
        style={{
          borderColor: "#002699",
          borderStyle: "solid",
          borderWidth: "10px",
          borderRadius: "20px",
          margin: "20px",
        }}
      >
        <h1> Guesser</h1>
        <p>As a Guesser, You are given a Tuner and Prompt:</p> <Seekbar />
        <p>which are visible to all Players, but the Level:</p>
        <ShowLevel />
        <div>
          <div style={bottomBarStyle}></div>
        </div>
        <p>
          on the other hand is hidden to You and everyone else except for the
          Clue Giver.<br></br>
          <br></br>The Clue Giver will give a clue word or phrase based on the
          prompt to guide You to the Level.<br></br> Move Your Tuner to where
          You think the Level is and if You are right, gain the number of points
          shown on the Level
        </p>
      </div>
      <div
        className="Rules"
        style={{
          borderColor: "#002699",
          borderStyle: "solid",
          borderWidth: "10px",
          borderRadius: "20px",
          margin: "20px",
        }}
      >
        <h1>Clue Rules</h1>
        <p>
          The Clue Rules are not especially concrete, but here are some
          suggestions to make the game more enjoyable
        </p>
        <p>
          1. Don't be afraid to change the rules to make the game more enjoyable
        <br></br>
        <br></br>
          2. Try to keep the Clue to a single item, idea, or thingy. Often times
          you will want to compare 2 things to put the Level in better
          perspective. It is fun when other players have to guess what you are
          gauging on when you give the Clue
        <br></br>
        <br></br>
          3. Limit the use of New Prompt. While some prompts may seem impossible
          with the corresponding Level, this is an opporunity to express your
          creativity and challenge yourself.
        <br></br>
        <br></br>
          4. Don't worry about making a mistake. While it is nice to win, maybe the real
          treasure was the friends we made along the way.
        </p>
      </div>
    </div>
  );
}
