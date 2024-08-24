import { describe, test, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import RadioButton from "../../src/components/RadioButton";

describe("RadioButton", () => {
  const mockHandleRadioChange = vi.fn();

  test("should render all radio buttons with correct labels", () => {
    render(
      <RadioButton
        selectedValue="Normal"
        handleRadioChange={mockHandleRadioChange}
      />,
    );

    expect(screen.getByLabelText(/Normal/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Ascending/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Descending/i)).toBeInTheDocument();
  });

  test("should select the correct radio button based on selectedValue", () => {
    render(
      <RadioButton
        selectedValue="Ascending"
        handleRadioChange={mockHandleRadioChange}
      />,
    );

    expect(screen.getByLabelText(/Normal/i)).not.toBeChecked();
    expect(screen.getByLabelText(/Ascending/i)).toBeChecked();
    expect(screen.getByLabelText(/Descending/i)).not.toBeChecked();
  });

  test("should call handleRadioChange when a radio button is clicked", () => {
    render(
      <RadioButton
        selectedValue="Normal"
        handleRadioChange={mockHandleRadioChange}
      />,
    );

    fireEvent.click(screen.getByLabelText(/Ascending/i));
    expect(mockHandleRadioChange).toHaveBeenCalled();
  });
});
