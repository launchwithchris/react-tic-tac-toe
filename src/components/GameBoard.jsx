import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare, activePlayerSymbol }) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleSelectSquare(rowIndex, cellIndex) {
    setGameBoard((prevGameBoard) => {
      const newGameBoard = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ].map((row, rIndex) => {
        if (rIndex === rowIndex) {
          return row.map((cell, cIndex) => {
            if (cIndex === cellIndex) {
              return activePlayerSymbol;
            }
            return cell;
          });
        }
        return row;
      });
      return newGameBoard;
    });

    onSelectSquare && onSelectSquare(rowIndex, cellIndex);
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
