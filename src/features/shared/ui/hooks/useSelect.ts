import { SelectChangeEvent } from "@mui/material";
import { useState } from "react";

function useSelectChange<T>(
  initialState: T,
  onChangeCallback: (newValue: T) => void
) {
  const [value, setValue] = useState<T>(initialState);

  const handleChange = (event: SelectChangeEvent<string>) => {
    const newValue = event.target.value as T;
    setValue(newValue);
    onChangeCallback(newValue);
  };

  return {
    value,
    onChange: handleChange
  };
}

export default useSelectChange;
