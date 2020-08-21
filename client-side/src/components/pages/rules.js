import React from "react";
import ShowLevel from "../showLevel";
import Prompt from "../prompt";
import Seekbar from "../seekbar";
import { bottomBarStyle } from "../styles";
export default function Rules() {
  return (
    <div className="Rules">
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
        <h1>Clue Giver Role</h1>
        <p>As the Clue Giver, You are given a Level and a Prompt: </p>
        <ShowLevel />
        <div>
          <div style={bottomBarStyle}></div>
          <Prompt />
        </div>
        <p>
          The Prompt is seen by all players, but the Level is only visible to
          you
        </p>
        <p>
          - Use the Prompt to devise a word or phrase to guide the Guessers to
          the hidden Level.<br></br>- For each Guesser to match the Level, You
          gain 1 point.
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
        <h1> Guesser Role</h1>
        <p>As a Guesser, You are given a Tuner and Prompt:</p>
        <Seekbar />
        <p>but the level is hidden from you and all other Guessers</p>
        <p>
          - Using the clue given by the Clue Giver, move Your Tuner to try and
          match the Level. <br></br>- If You succesfully match the Tuner to the
          Level, you gain the number of points shown on the Level
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
        <h1>Clue Restrictions</h1>
        <p>
          The Restrictions are not especially concrete, but here are some
          suggestions to make the game more enjoyable<br></br>
          <br></br>
          1. Add or remove restrictions to make the game more
          fun.<br></br>Suggestions: - Only movie references - Only Job Titles - No
          Proper Nouns
          <br></br>
          <br></br>
          2. Try to keep the Clue to a single item, idea, or thingy. Often times
          you will want to compare two things to put the Level in better
          perspective. It is fun when other players have to guess what you are
          gauging on when you give the Clue
          <br></br>
          <br></br>
          3. Limit the use of New Prompt. While some prompts may seem impossible
          with the corresponding Level, this is an opporunity to express your
          creativity and challenge yourself.
          <br></br>
          <br></br>
          4. Don't worry about making a mistake. While it is nice to win, maybe
          the real treasure was the friends we made along the way.
        </p>
      </div>
    </div>
  );
}
