import { render, screen } from "@testing-library/react";
import Log from "../components/Log";
import "@testing-library/jest-dom";

describe("Log", () => {
  test("renders a chronological list of turns", () => {
    const turns = [
      { player: "X", square: { row: 0, col: 0 } },
      { player: "O", square: { row: 2, col: 1 } },
    ];

    render(<Log turns={turns} />);

    // Rows/cols are 1-indexed in the rendered text
    expect(
      screen.getByText(/Player X selected row 1, column 1/)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Player O selected row 3, column 2/)
    ).toBeInTheDocument();
  });
});
