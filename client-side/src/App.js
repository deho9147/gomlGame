import React from "react";
import "./App.css";

import { useSelector } from "react-redux";
import {
  getGameState,
  getLocalName,
  getClueGiver,
} from "./components/redux/selectors";

import FrontPage from "./components/pages/frontPage";
import WaitingRoom from "./components/pages/waitingRoom";
import ClueGiverPage from "./components/pages/clueGiverPage";
import GuesserPage from "./components/pages/guesserPage";
import LevelRevealPage from "./components/pages/levelRevealPage";

import Footer from "./components/footer";

function App() {
  const gameState = useSelector(getGameState);
  const localName = useSelector(getLocalName);
  const clueGiver = useSelector(getClueGiver);

  const setPage = (gameState) => {
    switch (gameState) {
      case "FRONT_PAGE":
        return <FrontPage />;
      case "WAITING":
        return <WaitingRoom />;
      case "GUESSING":
        if (localName === clueGiver) {
          return <ClueGiverPage />;
        } else {
          return <GuesserPage />;
        }
      case "REVEAL_LEVEL":
        return <LevelRevealPage />;
      default:
        return <div>Something went wrong</div>;
    }
  };
  return (
      <body> <div className="App">{setPage(gameState)}</div> <Footer/> </body>
  );
}

export default App;
