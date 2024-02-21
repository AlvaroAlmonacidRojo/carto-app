import { Box, InputLabel, MenuItem, Select, Typography } from "@mui/material";
// @ts-expect-error no types definition for this library
import * as cartoColors from "cartocolor";
import useSelectChange from "../../hooks/useSelect";


interface Props {
  id: string;
  initialValue: string;
  label: string;
  onChangeCallback: (id: string) => (newValue: string | number) => void;
}

const PaletteSelect = ({ id, label, initialValue, onChangeCallback }: Props) => {
  const { value, onChange } = useSelectChange(initialValue, onChangeCallback(id));
  return (
    <Box>
      <InputLabel id="color-select-type">{label}</InputLabel>
      <Select
        labelId="color-select-type"
        id="color-select"
        inputProps={{ style: { display: "flex" } }}
        style={{ display: "flex" }}
        label="Color base on"
        value={value}
        fullWidth
        onChange={onChange}
      >
        {Object.keys(cartoColors)
          .filter((k) => k !== "default")
          .map((key, index) => (
            <MenuItem value={key} key={key + index}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography>{key}</Typography>
                <Box display="flex" marginLeft="4px">
                  {cartoColors[key][6].map((color: string, index: number) => (
                    <span
                      key={index}
                      style={{
                        backgroundColor: color,
                        width: "19px",
                        height: "4px",
                        margin: "1px",
                      }}
                    ></span>
                  ))}
                </Box>
              </Box>
            </MenuItem>
          ))}
      </Select>
    </Box>
  );
};

export default PaletteSelect;
