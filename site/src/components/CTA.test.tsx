import { render, screen } from "@testing-library/react";
import CTA from "./CTA";

describe("Contact form", () => {
  it("renders the current business contact fields", () => {
    render(<CTA />);

    expect(screen.getByLabelText("Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Phone")).toBeInTheDocument();
    expect(screen.getByLabelText("Address")).toBeInTheDocument();
    expect(screen.getByLabelText("Subject")).toBeInTheDocument();
    expect(screen.getByLabelText("Message")).toBeInTheDocument();
  });
});
