import { renderHook, act } from "@testing-library/react";
import useColorInput from "../useColorInput";

describe("useColorInput", () => {
  it("should return the newValue", () => {
    const { result } = renderHook(() => useColorInput("", () => null));
    const newValue = "newValue";

    act(() => {
      result.current.onChange(newValue);
    });

    expect(result.current.value).toBe("newValue");
  });
});
