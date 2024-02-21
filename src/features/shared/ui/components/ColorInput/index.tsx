import { Box, Typography } from "@mui/material";
import { MuiColorInput } from "mui-color-input";
import useColorInput from "../../hooks/useColorInput";

interface Props {
  id: string;
  label: string;
  initialValue: string;
  onChangeCallback: (id: string) => (newValue: string | number) => void;
}

const ColorInput = ({ id, label, initialValue, onChangeCallback }: Props) => {
  const { value: outlineValue, onChange: onChangeOutline } = useColorInput(
    initialValue,
    onChangeCallback(id)
  );
  return (
    <Box>
      <Typography id="input-slider" gutterBottom>
        {label}
      </Typography>
      <MuiColorInput onChange={onChangeOutline} value={outlineValue} />
    </Box>
  );
};

export default ColorInput;
