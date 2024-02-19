import { useState } from "react";

const useSliderInput = (
  initialValue: number,
  onChangeCallback: (newValue: number) => void
) => {
  const [value, setValue] = useState<number>(initialValue);

  const handleSliderChange = (_: Event, newValue: number | number[]) => {
    setValue(newValue as number);
    onChangeCallback(newValue as number);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value === "" ? 0 : Number(event.target.value);
    setValue(newValue);
    onChangeCallback(newValue);
  };

  return {
    value,
    onChangeSlider: handleSliderChange,
    onChangeInput: handleInputChange,
  };
};

export default useSliderInput;
