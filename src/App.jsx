import { useState } from "react";

import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";

function derivedActivePlayer(turns) {
  if (turns.length === 0) {
    return "X";
  }
  return turns[turns.length - 1].player === "X" ? "O" : "X";
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = derivedActivePlayer(gameTurns);

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns((prevGameTurns) => [
      ...prevGameTurns,
      {
        player: derivedActivePlayer(prevGameTurns),
        square: { row: rowIndex, col: colIndex },
      },
    ]);
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" class="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            onEdit={() => {}}
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            onEdit={() => {}}
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard
          onSelectSquare={handleSelectSquare}
          turns={gameTurns}
          activePlayerSymbol={activePlayer}
        />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
