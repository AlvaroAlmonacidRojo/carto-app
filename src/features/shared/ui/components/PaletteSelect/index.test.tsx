import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import PaletteSelect from ".";

describe("PaletteSelect component", () => {
  it("should render with correct label and options", () => {
    const onChangeCallback = jest.fn();
    const { getByText, getByRole } = render(
      <PaletteSelect id="test" label="Test Label" initialValue="PinkYl" onChangeCallback={onChangeCallback} />
    );
    expect(getByText("Test Label")).toBeInTheDocument();
    expect(getByRole("combobox")).toHaveTextContent("PinkYl");
  });
});
