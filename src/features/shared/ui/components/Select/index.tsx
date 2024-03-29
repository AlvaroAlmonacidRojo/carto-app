import { Box, InputLabel, MenuItem, Select as SelectMui } from "@mui/material";
import useSelectChange from "../../hooks/useSelect";

interface Props {
  id: string;
  label: string;
  initialValue: string;
  options: {
    value: string;
    label: string;
  }[];
  onChangeCallback: (newValue: string) => void;
}

const Select = ({
  id,
  label,
  initialValue,
  options,
  onChangeCallback,
}: Props) => {
  const { value, onChange } = useSelectChange(initialValue, onChangeCallback);
  return (
    <Box>
      <InputLabel id="select-label-id">{label}</InputLabel>
      <SelectMui
        labelId="select-label-id"
        id={`select-${id}`}
        value={value}
        fullWidth
        onChange={onChange}
      >
        {options.map((item, key) => (
          <MenuItem value={item.value} key={item.value + key}>
            {item.label}
          </MenuItem>
        ))}
      </SelectMui>
    </Box>
  );
};

export default Select;
