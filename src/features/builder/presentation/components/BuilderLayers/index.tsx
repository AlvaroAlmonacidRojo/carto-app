import { MuiColorInput } from "mui-color-input";
import { Layer } from "../../../constants/layers";
import { Box, Card } from "@mui/material";
import useColorInput from "../../hooks/useColorInput";
import LayerForm from "../LayerForm";

interface Props {
  layers: Layer[];
  onChangeLayer: (layer: Layer) => void;
}
const BuilderLayers = ({ layers, onChangeLayer }: Props) => {
  return (
    <Box display="grid" gap={1}>
      Layers
      {layers.map((layer) => {
        return (
          <LayerForm
            onChangeLayer={onChangeLayer}
            layer={layer}
            key={layer.id}
          />
        );
      })}
    </Box>
  );
};

export default BuilderLayers;
