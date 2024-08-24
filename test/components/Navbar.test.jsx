import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "../../src/components/Navbar";

const renderWithRouter = (path = "/") => {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <Navbar />
    </MemoryRouter>,
  );
};

describe("Navbar", () => {
  test("should show the navbar", () => {
    renderWithRouter();
    expect(screen.getByText(/Bar Chart/i)).toBeInTheDocument();
    expect(screen.getByText(/Table/i)).toBeInTheDocument();
    expect(screen.getByText(/Simple Chart/i)).toBeInTheDocument();
  });

  test("should apply active class to the current route", () => {
    renderWithRouter("/barchart");
    expect(screen.getByText(/Bar Chart/i)).toHaveClass(
      "text-white shadow-lg shadow-gray-600",
    );
    expect(screen.getByText(/Table/i)).not.toHaveClass(
      "text-white shadow-lg shadow-gray-600",
    );
    expect(screen.getByText(/Simple Chart/i)).not.toHaveClass(
      "text-white shadow-lg shadow-gray-600",
    );
  });

  test("should not apply active class to non-current routes", () => {
    renderWithRouter("/simplechart");
    expect(screen.getByText(/Bar Chart/i)).not.toHaveClass(
      "text-white shadow-lg shadow-gray-600",
    );
    expect(screen.getByText(/Table/i)).not.toHaveClass(
      "text-white shadow-lg shadow-gray-600",
    );
    expect(screen.getByText(/Simple Chart/i)).toHaveClass(
      "text-white shadow-lg shadow-gray-600",
    );
  });
});
