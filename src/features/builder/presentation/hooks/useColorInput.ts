import { useState } from "react";

const useColorInput = (
  initialValue: string,
  onChangeCallback: (newValue: string) => void
) => {
  const [value, setValue] = useState<string>(initialValue);

  const onChange = (newValue: string) => {
    setValue(newValue);
    onChangeCallback(newValue);
  };

  return { value, onChange };
};

export default useColorInput;
