import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import TablePage from "../../src/pages/TablePage";

describe("TablePage", () => {
  const mockWordcount = [
    { word: "hello", count: 5 },
    { word: "world", count: 3 },
  ];

  test("should render table with correct headers", () => {
    render(<TablePage wordcount={mockWordcount} />);

    expect(screen.getByText(/Word/i)).toBeInTheDocument();
    expect(screen.getByText(/Count/i)).toBeInTheDocument();
  });

  test("should render table rows with correct data", () => {
    render(<TablePage wordcount={mockWordcount} />);

    expect(screen.getByText(/hello/i)).toBeInTheDocument();
    expect(screen.getByText(/5/i)).toBeInTheDocument();
    expect(screen.getByText(/world/i)).toBeInTheDocument();
    expect(screen.getByText(/3/i)).toBeInTheDocument();
  });

  test("should render empty table when no data is provided", () => {
    render(<TablePage wordcount={[]} />);

    expect(screen.getByText(/Word/i)).toBeInTheDocument();
    expect(screen.getByText(/Count/i)).toBeInTheDocument();

    expect(screen.queryByText(/hello/i)).toBeNull();
    expect(screen.queryByText(/world/i)).toBeNull();
  });

  test("should render a table row with a single item correctly", () => {
    render(<TablePage wordcount={[{ word: "single", count: 1 }]} />);

    expect(screen.getByText(/single/i)).toBeInTheDocument();
    expect(screen.getByText(/1/i)).toBeInTheDocument();
  });

  test("should render multiple table rows correctly", () => {
    const moreData = [
      { word: "apple", count: 10 },
      { word: "banana", count: 20 },
      { word: "cherry", count: 30 },
      { word: "date", count: 40 },
    ];
    render(<TablePage wordcount={moreData} />);

    expect(screen.getByText(/apple/i)).toBeInTheDocument();
    expect(screen.getByText(/10/i)).toBeInTheDocument();
    expect(screen.getByText(/banana/i)).toBeInTheDocument();
    expect(screen.getByText(/20/i)).toBeInTheDocument();
    expect(screen.getByText(/cherry/i)).toBeInTheDocument();
    expect(screen.getByText(/30/i)).toBeInTheDocument();
    expect(screen.getByText(/date/i)).toBeInTheDocument();
    expect(screen.getByText(/40/i)).toBeInTheDocument();
  });
});
