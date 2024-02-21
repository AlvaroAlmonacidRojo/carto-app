import { useState } from "react";
import { Card, IconButton, Box, Typography } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { getFillColor } from "../../../constants/colors";
import { Layer } from "../../../../shared/models/layer";
import ColorInput from "../../../../shared/ui/components/ColorInput";
import PaletteSelect from "../../../../shared/ui/components/PaletteSelect";
import Select from "../../../../shared/ui/components/Select";
import SliderInput from "../../../../shared/ui/components/SliderInput";

interface Props {
  layer: Layer;
  onChangeLayer: (layer: Layer) => void;
}

const LayerForm = ({ layer, onChangeLayer }: Props) => {
  const [basedOn, setBasedOn] = useState(layer.basedOn);
  const onChangeCallback = (id: string) => (newValue: string | number) => {
    if (typeof newValue === "string") {
      const isRgba = newValue.includes("rgba");
      const rgbValues = newValue
        .substring(isRgba ? 5 : 4, newValue.length - 1)
        .split(", ")
        .map(Number);
      if (id === "getFillColor") {
        const isBaseOnAttr = layer.basedOn && basedOn !== "default";
        onChangeLayer({
          ...layer,
          getFillColor: isBaseOnAttr
            ? getFillColor(layer.basedOn || "", newValue)
            : rgbValues,
          updateTriggers: {
            getFillColor: isBaseOnAttr
              ? getFillColor(layer.basedOn || "", newValue)
              : rgbValues,
          },
        });
      } else {
        onChangeLayer({ ...layer, [id]: rgbValues });
      }
    } else {
      onChangeLayer({ ...layer, [id]: newValue });
    }
  };
  const onChangeVisibily = () => {
    onChangeLayer({ ...layer, visible: !layer.visible });
  };

  return (
    <Card key={`layer-${layer.id}`} role="listitem">
      <Box display="flex" alignItems="center" justifyContent="space-between" >
        <Typography variant="h6" id="layer-id" gutterBottom margin={0}>
          {layer.id}
        </Typography>
        <IconButton onClick={onChangeVisibily}>
          {layer.visible ? <VisibilityIcon /> : <VisibilityOffIcon />}
        </IconButton>
      </Box>
      <Box>
        {layer.basedOn && (
          <Box>
            <Typography>Fill Color</Typography>
            <Select
              id="base-on-select"
              label="Color base on"
              initialValue={basedOn ? basedOn : "default"}
              options={[
                { value: "default", label: "New color" },
                { value: layer.basedOn, label: layer.basedOn },
              ]}
              onChangeCallback={(newValue) => setBasedOn(newValue)}
            />
          </Box>
        )}
        <Box>
          {!(basedOn && basedOn !== "default") ? (
            <ColorInput
              id="getFillColor"
              label="Color:"
              initialValue={`rgb (${(layer.getFillColor as number[])[0]}, ${
                (layer.getFillColor as number[])[1]
              }, ${(layer.getFillColor as number[])[2]})`}
              onChangeCallback={onChangeCallback}
            />
          ) : (
            <PaletteSelect
              id="getFillColor"
              label={`Palette base on (${basedOn}) `}
              initialValue="PinkYl"
              onChangeCallback={onChangeCallback}
            />
          )}
        </Box>
      </Box>

      <ColorInput
        id="getLineColor"
        label="Outline Color:"
        initialValue={`rgb (${layer.getLineColor[0]}, ${layer.getLineColor[1]}, ${layer.getLineColor[2]})`}
        onChangeCallback={onChangeCallback}
      />
      <SliderInput
        id="lineWidthMinPixels"
        label="Stroke Width:"
        initialValue={layer.lineWidthMinPixels}
        onChangeCallback={onChangeCallback}
      />
      <SliderInput
        id="pointRadiusMinPixels"
        label="Radius:"
        initialValue={layer.pointRadiusMinPixels}
        onChangeCallback={onChangeCallback}
      />
    </Card>
  );
};

export default LayerForm;
