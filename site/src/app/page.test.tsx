import { render, screen } from "@testing-library/react";
import Home from "./page";

describe("Home page redesign target", () => {
  it("removes the top-of-page stats strip from the composition", () => {
    render(<Home />);

    expect(
      screen.queryByText("Years in fire protection")
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText("Business day turnaround")
    ).not.toBeInTheDocument();
  });
});
