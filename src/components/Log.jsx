export default function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((turn, index) => {
        const { player, square } = turn;
        const { row, col } = square;
        return (
          <li key={`${row}-${col}-${index}`}>
            Player {player} selected row {row + 1}, column {col + 1}
          </li>
        );
      })}
    </ol>
  );
}
