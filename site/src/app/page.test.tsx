import { render, screen } from "@testing-library/react";
import Home from "./page";

describe("Home page redesign target", () => {
  it("keeps the animated stats as a separate proof section after the hero", () => {
    render(<Home />);

    expect(
      screen.getByText("Years in fire protection")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Business day turnaround")
    ).toBeInTheDocument();
  });
});
