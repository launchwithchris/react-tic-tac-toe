import { render, screen, fireEvent } from "@testing-library/react";
import Player from "../components/Player";
import "@testing-library/jest-dom";

describe("Player", () => {
  test("shows initial name and toggles to input on edit", () => {
    render(<Player initialName="Alice" symbol="X" onEdit={() => {}} />);

    // initial render shows the name
    expect(screen.getByText("Alice")).toBeInTheDocument();

    const editButton = screen.getByRole("button", { name: /edit/i });
    fireEvent.click(editButton);

    // when editing, input should appear with the current value
    const input = screen.getByDisplayValue("Alice");
    expect(input).toBeInTheDocument();

    fireEvent.change(input, { target: { value: "Bob" } });
    expect(input).toHaveValue("Bob");
  });
});
