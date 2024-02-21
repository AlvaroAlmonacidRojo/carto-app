import { renderHook, act } from "@testing-library/react";
import useSliderInput from "../useSliderInput";
import React from "react";

describe("useSliderInput", () => {
  it("should update value when input changes", () => {
    const mockFn = jest.fn();
    const { result } = renderHook(() =>
      useSliderInput(0, mockFn)
    );
    const newValue = "3";

    act(() => {
      result.current.onChangeInput({
        target: { value: newValue },
      } as React.ChangeEvent<HTMLInputElement>)
    });

    expect(result.current.value).toBe(3);
  });
  it("should update value when input changes and return 0 if event is empty string", () => {
    const mockFn = jest.fn();
    const { result } = renderHook(() =>
      useSliderInput(0, mockFn)
    );
    const newValue = "";

    act(() => {
      result.current.onChangeInput({
        target: { value: newValue },
      } as React.ChangeEvent<HTMLInputElement>)
    });

    expect(result.current.value).toBe(0);
  });

  it("should update value when slider changes", () => {
    const mockFn = jest.fn();
    const { result } = renderHook(() =>
      useSliderInput(0, mockFn)
    );
    const newValue = 3;

    act(() => {
      result.current.onChangeSlider({} as Event, newValue)
    });

    expect(result.current.value).toBe(3);
  });
});