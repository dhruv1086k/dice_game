import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";
import "./App.css";
import { useState } from "react";

function App() {
  const [gameStarted, setGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setGameStarted((prev) => !prev);
  };

  return (
    <>{gameStarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />}</>
  );
}

export default App;
