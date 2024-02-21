import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import SliderInput from ".";

describe("SliderInput component", () => {
  it("should render with correct label and initial value", () => {
    const onChangeCallback = jest.fn();
    const { getByText, getByRole } = render(
      <SliderInput
        id="test"
        label="Test Label"
        initialValue={50}
        onChangeCallback={onChangeCallback}
      />
    );
    expect(getByText("Test Label")).toBeInTheDocument();
    expect(getByRole("textbox")).toHaveValue(50);
  });

  it("should update value when slider changes", () => {
    const onChangeCallback = () => () => null;
    const { getByRole } = render(
      <SliderInput
        id="test"
        label="Test Label"
        initialValue={50}
        onChangeCallback={onChangeCallback}
      />
    );
    const slider = getByRole("slider");
    fireEvent.change(slider, { target: { value: 75 } });
    expect(slider).toHaveAttribute("aria-valuenow", "75");
  });

  it("should update value when input changes", () => {
    const onChangeCallback = () => () => null;
    const { getByRole } = render(
      <SliderInput
        id="test"
        label="Test Label"
        initialValue={50}
        onChangeCallback={onChangeCallback}
      />
    );
    const input = getByRole("textbox");
    fireEvent.change(input, { target: { value: "25" } });
    expect(input).toHaveValue(25);
  });
});
