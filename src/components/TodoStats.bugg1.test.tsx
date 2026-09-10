import { render, screen } from "@testing-library/react";
import TodoStats from "./TodoStats";

("Bugg 1 — Fel antal i statistiken");

describe("TodoStats", () => {
  it("visar hur många uppgifter användaren har kvar att göra", () => {
    //Arrange
    const todos = [
      { id: 1, text: "Handla mjölk", completed: false },
      { id: 2, text: "Städa köket", completed: true },
      { id: 3, text: "Tvätta kläder", completed: false },
    ];

    //Act
    render(<TodoStats todos={todos} />);

    //Assert
    expect(screen.getByText("2 kvar av 3")).toBeInTheDocument();
  });
});
