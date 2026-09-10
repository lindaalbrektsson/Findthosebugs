import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import TodoList from "./TodoList";

describe("Bugg 2 - rätt uppgift markeras som klar", () => {
  it("skickar rätt todo-id när användaren bockar av en uppgift", async () => {
    // Arrange
    const user = userEvent.setup();
    const onToggle = vi.fn();

    const todos = [
      { id: 10, text: "Handla mjölk", completed: false },
      { id: 25, text: "Städa köket", completed: false },
      { id: 42, text: "Tvätta kläder", completed: false },
    ];

    render(<TodoList todos={todos} onToggle={onToggle} onDelete={() => {}} />);

    // Act
    const checkboxes = screen.getAllByRole("checkbox");
    await user.click(checkboxes[1]);

    // Assert
    expect(onToggle).toHaveBeenCalledWith(25);
  });
});
