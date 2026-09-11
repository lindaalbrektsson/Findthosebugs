import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoApp from "../components/TodoApp";

// Exempeltest som visar mönstret: Arrange -> Act -> Assert.
// Lägg era egna tester för buggarna i BUGS.md i nya filer.
describe("TodoApp", () => {
  it("lägger till en ny uppgift i listan", async () => {
    //Arrange
    const user = userEvent.setup();
    render(<TodoApp />);

    //Act
    await user.type(screen.getByLabelText("Ny uppgift"), "Handla mjölk");
    await user.click(screen.getByRole("button", { name: "Lägg till" }));

    //Assert
    expect(screen.getByText("Handla mjölk")).toBeInTheDocument();
  });
});
