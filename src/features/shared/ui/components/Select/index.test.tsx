import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Select from ".";

describe("Select component", () => {
  test("should render with correct label and options", () => {
    const options = [
      { value: "default", label: "New color" },
      { value: "revenue", label: "revenue" },
    ];
    const onChangeCallback = jest.fn();
    const { getByText, getByRole } = render(
      <Select
        id="test"
        label="Test Label"
        initialValue="default"
        options={options}
        onChangeCallback={onChangeCallback}
      />
    );
    expect(getByText("Test Label")).toBeInTheDocument();
    expect(getByRole("combobox")).toHaveTextContent("New color");
  });

  test("should call onChangeCallback when an option is selected", () => {
    const options = [
      { value: "default", label: "New color" },
      { value: "revenue", label: "revenue" },
    ];
    const onChangeCallback = jest.fn();
    const { getByRole } = render(
      <Select
        id="test"
        label="Test Label"
        initialValue="default"
        options={options}
        onChangeCallback={onChangeCallback}
      />
    );
    const select = getByRole("combobox");
    fireEvent.mouseDown(select);
    const option = getByRole("option", { name: "revenue" });
    fireEvent.click(option);
    expect(onChangeCallback).toHaveBeenCalledWith("revenue");
    expect(select).toHaveTextContent("revenue");
  });
});
