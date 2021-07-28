import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  test("renders App component", () => {
    render(<App />);
  });

  test("renders FrontPage month elements", () => {
    render(<App />);

    const janMonthElement = screen.getByText("Jan");
    const decMonthElement = screen.getByText("Dec");

    expect(janMonthElement).toBeInTheDocument();
    expect(decMonthElement).toBeInTheDocument();
  });

  test("make sure ResultsPage elements do not render initially", () => {
    render(<App />);

    const resultElement = screen.queryByText(/Life Path/);

    expect(resultElement).toBeNull();
  });
});
