import { renderHook, act } from "@testing-library/react";
import { SelectChangeEvent } from "@mui/material";
import useSelectChange from "../useSelect";

describe("useSelectChange", () => {
  it("should return the newValue", () => {
    const mockFn = jest.fn();
    const { result } = renderHook(() =>
      useSelectChange<string>("default", mockFn)
    );
    const newValue = "revenue";

    act(() => {
      result.current.onChange({
        target: { value: newValue },
      } as SelectChangeEvent)
    });

    expect(result.current.value).toBe("revenue");
  });
});