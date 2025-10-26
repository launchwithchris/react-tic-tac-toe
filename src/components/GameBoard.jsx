import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleSelectSquare(rowIndex, cellIndex) {
    setGameBoard((prevGameBoard) => {
      const newGameBoard = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ].map((row, rIndex) => {
        if (rIndex === rowIndex) {
          return row.map((cell, cIndex) => {
            if (cIndex === cellIndex) {
              return "X"; // Example: mark with 'X', in real game logic would determine current player
            }
            return cell;
          });
        }
        return row;
      });
      return newGameBoard;
    });
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <ol key={rowIndex} className="game-row">
          {row.map((playerSymbol, cellIndex) => (
            <li key={cellIndex} className="game-cell">
              <button onClick={() => handleSelectSquare(rowIndex, cellIndex)}>
                {playerSymbol}
              </button>
            </li>
          ))}
        </ol>
      ))}
    </ol>
  );
}
