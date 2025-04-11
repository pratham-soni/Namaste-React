import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Cases", () => {
  it("should load contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    // Assertions
    expect(heading).toBeInTheDocument();
  });

  it("should load button inside Contact Page", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  it("should find the input box with placeholder 'name' ", () => {
    render(<Contact />);

    const placeholder = screen.getByPlaceholderText("name");

    expect(placeholder).toBeInTheDocument();
  });

  it("should load two input boxes once Contact component rendered", () => {
    render(<Contact />);
    // whenever multiple items, we write getAll
    const inputBoxes = screen.getAllByRole("textbox");

    // below expect statements are same thing
    expect(inputBoxes.length).toBe(2);
    expect(inputBoxes.length).not.toBe(3);
  });
});
