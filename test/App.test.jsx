import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../src/App";
import TablePage from "../src/pages/TablePage";
import countWords from "../src/utils/countWords";

vi.mock("../src/components/Navbar", () => ({
  default: () => <div>Navbar</div>,
}));

vi.mock("../src/components/RadioButton", () => ({
  default: ({ selectedValue, handleRadioChange }) => (
    <div>
      <input
        type="radio"
        value="Normal"
        checked={selectedValue === "Normal"}
        onChange={handleRadioChange}
        aria-label="Normal"
      />
      <input
        type="radio"
        value="Ascending"
        checked={selectedValue === "Ascending"}
        onChange={handleRadioChange}
        aria-label="Ascending"
      />
      <input
        type="radio"
        value="Descending"
        checked={selectedValue === "Descending"}
        onChange={handleRadioChange}
        aria-label="Descending"
      />
    </div>
  ),
}));

vi.mock("../src/pages/TablePage", () => ({
  default: ({ wordcount }) => (
    <div>
      <h1>Table Page</h1>
      <table>
        <thead>
          <tr>
            <th>Word</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {wordcount.map((item, index) => (
            <tr key={index}>
              <td>{item.word}</td>
              <td>{item.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ),
}));

vi.mock("../src/utils/countWords", () => ({
  default: vi.fn(),
}));

describe("App Component", () => {
  it("should render Navbar component", () => {
    render(<App />);
    expect(screen.getByText("Navbar")).toBeInTheDocument();
  });

  it("should render RadioButton component", () => {
    render(<App />);
    expect(screen.getByLabelText("Normal")).toBeInTheDocument();
    expect(screen.getByLabelText("Ascending")).toBeInTheDocument();
    expect(screen.getByLabelText("Descending")).toBeInTheDocument();
  });

  it("should render TablePage component for / route", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TablePage wordcount={[]} />} />
        </Routes>
      </BrowserRouter>,
    );
    expect(screen.getByText("Table Page")).toBeInTheDocument();
  });

  it("should update textarea value on change", () => {
    render(<App />);
    const textarea = screen.getByPlaceholderText("Write or paste your text");
    fireEvent.change(textarea, { target: { value: "New text" } });
    expect(textarea.value).toBe("New text");
  });

  it("should change selected radio button value on change", () => {
    render(<App />);
    const radioButtonNormal = screen.getByLabelText("Normal");
    const radioButtonAscending = screen.getByLabelText("Ascending");
    const radioButtonDescending = screen.getByLabelText("Descending");

    fireEvent.click(radioButtonAscending);
    expect(radioButtonAscending.checked).toBe(true);
    expect(radioButtonNormal.checked).toBe(false);
    expect(radioButtonDescending.checked).toBe(false);

    fireEvent.click(radioButtonDescending);
    expect(radioButtonDescending.checked).toBe(true);
    expect(radioButtonNormal.checked).toBe(false);
    expect(radioButtonAscending.checked).toBe(false);
  });

  it("should call handleCopy on copy event", () => {
    render(<App />);
    const textarea = screen.getByPlaceholderText("Write or paste your text");
    const clipboardData = { getData: vi.fn(() => "Copied text") };
    const event = { clipboardData };

    // Mock console.log to verify it's called
    const consoleLogSpy = vi.spyOn(console, "log");

    fireEvent.copy(textarea, event);

    expect(consoleLogSpy).toHaveBeenCalledWith("Texto copiado:", "Copied text");
    consoleLogSpy.mockRestore(); // Clean up spy
  });

  it("should call countWords on textValue or selectedRadio change", () => {
    render(<App />);

    // Simulate a change in textarea
    fireEvent.change(screen.getByPlaceholderText("Write or paste your text"), {
      target: { value: "New text" },
    });

    // Simulate a change in radio button
    fireEvent.click(screen.getByLabelText("Ascending"));

    // Check if countWords was called
    expect(countWords).toHaveBeenCalled();
  });
});
