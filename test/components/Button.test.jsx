import { describe, test, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../../src/components/Button";

describe("Button", () => {
  const mockHandleClick = vi.fn();

  test("should render the button with the correct text", () => {
    render(<Button text="Click Me" handleClick={mockHandleClick} />);

    expect(screen.getByText(/Click Me/i)).toBeInTheDocument();
  });

  test("should call handleClick when the button is clicked", () => {
    render(<Button text="Click Me" handleClick={mockHandleClick} />);

    fireEvent.click(screen.getByTestId("button"));
    expect(mockHandleClick).toHaveBeenCalled();
  });

  test("should have the correct class names", () => {
    render(<Button text="Click Me" handleClick={mockHandleClick} />);

    const buttonElement = screen.getByTestId("button");
    expect(buttonElement).toHaveClass("relative");
    expect(buttonElement).toHaveClass("rounded");
    expect(buttonElement).toHaveClass("px-5");
    expect(buttonElement).toHaveClass("py-2.5");
    expect(buttonElement).toHaveClass("overflow-hidden");
    expect(buttonElement).toHaveClass("group");
    expect(buttonElement).toHaveClass("bg-gray-900");
    expect(buttonElement).toHaveClass("hover:bg-gradient-to-r");
    expect(buttonElement).toHaveClass("hover:from-gray-900");
    expect(buttonElement).toHaveClass("hover:to-gray-700");
    expect(buttonElement).toHaveClass("text-white");
    expect(buttonElement).toHaveClass("hover:ring-2");
    expect(buttonElement).toHaveClass("hover:ring-offset-2");
    expect(buttonElement).toHaveClass("hover:ring-gray-400");
    expect(buttonElement).toHaveClass("transition-all");
    expect(buttonElement).toHaveClass("ease-out");
    expect(buttonElement).toHaveClass("duration-300");
  });
});
