import { render, screen } from "@testing-library/react";
import About from "./About";

describe("About scene", () => {
  it("marks the about section as a pinned cinematic scene", () => {
    render(<About />);

    expect(screen.getByTestId("about-scene")).toHaveAttribute("data-pin-scene", "true");
  });
});
