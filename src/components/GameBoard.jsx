import { useState } from "react";

export default function GameBoard({ onSelectSquare, board }) {
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <ol key={rowIndex} className="game-row">
          {row.map((playerSymbol, cellIndex) => (
            <li key={cellIndex} className="game-cell">
              <button
                disabled={playerSymbol !== null}
                onClick={() => onSelectSquare(rowIndex, cellIndex)}
              >
                {playerSymbol}
              </button>
            </li>
          ))}
        </ol>
      ))}
    </ol>
  );
}
