import { render, screen } from "@testing-library/react";
import Hero from "./Hero";

describe("Hero redesign target", () => {
  it("removes the floating metric cards from the hero composition", () => {
    render(<Hero />);

    expect(screen.queryByText("12 Years")).not.toBeInTheDocument();
    expect(screen.queryByText("Former AHJ")).not.toBeInTheDocument();
    expect(screen.queryByText("10 Days")).not.toBeInTheDocument();
  });
});
