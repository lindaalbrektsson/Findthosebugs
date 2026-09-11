import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoForm from "../components/TodoForm";

//Bugg 4 — Tomma uppgifter går att lägga till

describe("onSubmit", () => {
  it("ska visa felmeddelande när uppgift är tom eller bara har mellanslag", async () => {
    //Arrange
    const user = userEvent.setup();
    const onAdd = vi.fn();

    render(<TodoForm onAdd={onAdd} />);

    //Act
    await user.type(screen.getByLabelText("Ny uppgift"), "   ");
    await user.click(screen.getByRole("button", { name: "Lägg till" }));

    //Assert
    const errorMessage = screen.getByText(
      "En uppgift måste innehålla minst ett tecken.",
    );
    expect(errorMessage).toBeInTheDocument();
    expect(onAdd).not.toHaveBeenCalled();
  });
});
