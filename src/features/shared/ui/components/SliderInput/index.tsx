import { Box, Grid, Input, Slider, Typography } from "@mui/material";
import useSliderInput from "../../../../builder/presentation/hooks/useSliderInput";

interface Props {
  id: string;
  label: string;
  initialValue: number;
  onChangeCallback: (id: string) => (newValue: string | number) => void;
}

const SliderInput = ({ id, label, initialValue, onChangeCallback }: Props) => {
  const { value, onChangeSlider, onChangeInput } = useSliderInput(
    initialValue,
    onChangeCallback(id)
  );
  return (
    <Box sx={{ width: 250 }} >
      <Typography id="input-slider" gutterBottom>
        {label}
      </Typography>
      <Grid container spacing={2} alignItems="center" justifyContent="space-between">
        <Grid item xs={8}>
          <Slider
            value={value}
            onChange={onChangeSlider}
            aria-labelledby="input-slider"
          />
        </Grid>
        <Grid item>
          <Input
            value={value}
            size="small"
            onChange={onChangeInput}
            inputProps={{
              min: 0,
              max: 100,
              type: "number",
              "aria-labelledby": "input-slider",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default SliderInput;
