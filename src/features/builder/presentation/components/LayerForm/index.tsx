import { Card, IconButton, Input, Slider } from "@mui/material";
import { Layer } from "../../../../shared/models/layer";
import { MuiColorInput } from "mui-color-input";
import useColorInput from "../../hooks/useColorInput";
import useSliderInput from "../../hooks/useSliderInput";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

interface Props {
  layer: Layer;
  onChangeLayer: (layer: Layer) => void;
}
const LayerForm = ({ layer, onChangeLayer }: Props) => {
  const onChangeCallback = (id: string) => (newValue: string | number) => {
    if (typeof newValue === "string") {
      const isRgba = newValue.includes("rgba");
      const rgbValues = newValue
        .substring(isRgba ? 5 : 4, newValue.length - 1)
        .split(", ")
        .map(Number);
      console.log("RBG VALUES", rgbValues);

      onChangeLayer({ ...layer, [id]: rgbValues });
    } else {
      onChangeLayer({ ...layer, [id]: newValue });
    }
  };
  const { value: fillValue, onChange: onChangeFill } = useColorInput(
    `rgb (${layer.getFillColor[0]}, ${layer.getFillColor[1]}, ${layer.getFillColor[2]})`,
    onChangeCallback("getFillColor")
  );
  const { value: outlineValue, onChange: onChangeOutline } = useColorInput(
    `rgb (${layer.getLineColor[0]}, ${layer.getLineColor[1]}, ${layer.getLineColor[2]})`,
    onChangeCallback("getLineColor")
  );
  const {
    value: sliderValue,
    onChangeSlider: onChangeRadiusSlider,
    onChangeInput: onChangeInputRadiusSlider,
  } = useSliderInput(
    layer.pointRadiusMinPixels,
    onChangeCallback("pointRadiusMinPixels")
  );
  const {
    value: sliderStrokeValue,
    onChangeSlider: onChangeStrokeSlider,
    onChangeInput: onChangeInputStrokeSlider,
  } = useSliderInput(
    layer.lineWidthMinPixels,
    onChangeCallback("lineWidthMinPixels")
  );

  const onChangeVisibily = () => {
    onChangeLayer({ ...layer, visible: !layer.visible });
  };
  return (
    <Card key={`layer-${layer.id}`}>
      {layer.id}
      <IconButton onClick={onChangeVisibily}>
        {layer.visible ? <VisibilityIcon /> : <VisibilityOffIcon />}
      </IconButton>
      <div>
        Fill Color:
        <MuiColorInput format="rgb" onChange={onChangeFill} value={fillValue} />
      </div>
      <div>
        Outline Color:
        <MuiColorInput onChange={onChangeOutline} value={outlineValue} />
      </div>
      <div>
        Stroke Width:
        <Slider
          value={sliderStrokeValue}
          onChange={onChangeStrokeSlider}
          aria-labelledby="input-slider"
        />
        <Input
          value={sliderStrokeValue}
          size="small"
          onChange={onChangeInputStrokeSlider}
          inputProps={{
            min: 0,
            max: 100,
            type: "number",
            "aria-labelledby": "input-slider",
          }}
        />
      </div>
      <div>
        Radius:
        <Slider
          value={sliderValue}
          onChange={onChangeRadiusSlider}
          aria-labelledby="input-radius-slider"
        />
        <Input
          value={sliderValue}
          size="small"
          onChange={onChangeInputRadiusSlider}
          inputProps={{
            min: 0,
            max: 100,
            type: "number",
            "aria-labelledby": "input-radius-slider",
          }}
        />
      </div>
    </Card>
  );
};

export default LayerForm;
