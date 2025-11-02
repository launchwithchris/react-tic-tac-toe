import { act, useState } from "react";

import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";
import GameOver from "./components/GameOver.jsx";

import { WINNING_COMBINATIONS } from "./winning-combinations.js";

const PLAYERS = { X: "Player 1", O: "Player 2" };

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveWinner(gameBoard, players) {
  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].col];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].col];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].col];
    if (
      firstSquareSymbol &&
      secondSquareSymbol &&
      thirdSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = players[firstSquareSymbol];
    }
  }

  return winner;
}

function deriveGameBoard(gameTurns) {
  let gameBoard = [...INITIAL_GAME_BOARD.map((row) => [...row])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  return gameBoard;
}

function derivedActivePlayer(turns) {
  if (turns.length === 0) {
    return "X";
  }
  return turns[turns.length - 1].player === "X" ? "O" : "X";
}

function App() {
  const [players, setPlayers] = useState(PLAYERS);
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = derivedActivePlayer(gameTurns);

  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard, players);
  const hasDraw = !winner && gameTurns.length === 9;

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns((prevGameTurns) => [
      ...prevGameTurns,
      {
        player: derivedActivePlayer(prevGameTurns),
        square: { row: rowIndex, col: colIndex },
      },
    ]);
  }

  function handleRestart() {
    setGameTurns([]);
  }

  function handleEditPlayer(symbol, newName) {
    setPlayers((prevPlayers) => ({
      ...prevPlayers,
      [symbol]: newName,
    }));
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName={PLAYERS.X}
            symbol="X"
            onChangeName={handleEditPlayer}
            isActive={activePlayer === "X"}
          />
          <Player
            initialName={PLAYERS.O}
            symbol="O"
            onChangeName={handleEditPlayer}
            isActive={activePlayer === "O"}
          />
        </ol>
        {(winner || hasDraw) && (
          <GameOver winner={winner} onRestart={handleRestart} />
        )}
        <GameBoard
          onSelectSquare={handleSelectSquare}
          board={gameBoard}
          activePlayerSymbol={activePlayer}
        />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
