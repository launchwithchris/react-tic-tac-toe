import { render, screen, fireEvent } from "@testing-library/react";
import GameBoard from "../components/GameBoard";
import "@testing-library/jest-dom";

describe("GameBoard", () => {
  test("renders a 3x3 board and calls onSelectSquare when a cell is clicked", () => {
    const handleSelect = jest.fn();
    render(<GameBoard onSelectSquare={handleSelect} turns={[]} />);

    // there should be 9 buttons
    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(9);

    // clicking top-left should call the handler with row 0, col 0
    fireEvent.click(buttons[0]);
    expect(handleSelect).toHaveBeenCalledWith(0, 0);
  });

  test("derives board state from turns prop and displays player symbols in correct cells", () => {
    const turns = [
      { player: "X", square: { row: 0, col: 0 } },
      { player: "O", square: { row: 1, col: 2 } },
    ];

    render(<GameBoard onSelectSquare={() => {}} turns={turns} />);

    const buttons = screen.getAllByRole("button");

    // index mapping: row * 3 + col
    const firstIndex = 0 * 3 + 0; // 0
    const secondIndex = 1 * 3 + 2; // 5

    expect(buttons[firstIndex]).toHaveTextContent("X");
    expect(buttons[secondIndex]).toHaveTextContent("O");
  });
});
