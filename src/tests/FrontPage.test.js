import { render, screen } from "@testing-library/react";
import FrontPage from "../pages/FrontPage";

describe("FrontPage", () => {
  test("renders FrontPage component", () => {
    render(<FrontPage />);
  });

  test("renders months display initially", () => {
    render(<FrontPage />);

    const monthHeading = screen.getByText("Which month were you born?");

    expect(monthHeading).toBeInTheDocument();
  });
});