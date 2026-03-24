import { render, screen } from "@testing-library/react";
import Services from "./Services";

describe("Services motion cues", () => {
  it("marks service numbers as right-side fly-in elements", () => {
    render(<Services />);

    expect(screen.getByText("01")).toHaveAttribute("data-fly-in", "right");
    expect(screen.getByText("02")).toHaveAttribute("data-fly-in", "right");
    expect(screen.getByText("03")).toHaveAttribute("data-fly-in", "right");
  });
});
