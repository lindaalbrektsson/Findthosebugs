import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoApp from "../components/TodoApp";

//Bugg 3 — Filtret 'Klara' visar fel uppgifter

describe("filteredTodos", () => {
  it("ska visa rätt uppgifter baserat på filtret", async () => {
    //Arrange
    const user = userEvent.setup();
    render(<TodoApp />);

    const input = screen.getByLabelText("Ny uppgift");
    const addButton = screen.getByRole("button", { name: "Lägg till" });

    await user.type(input, "Handla mjölk");
    await user.click(addButton);

    await user.type(input, "Städa köket");
    await user.click(addButton);

    const checkboxes = screen.getAllByRole("checkbox");
    await user.click(checkboxes[0]); //Markerar "Handla mjölk" som klar

    //Act
    await user.click(screen.getByRole("button", { name: "Klara" }));

    //Assert
    expect(screen.getByText("Handla mjölk")).toBeInTheDocument();
    expect(screen.queryByText("Städa köket")).not.toBeInTheDocument();
  });
});
