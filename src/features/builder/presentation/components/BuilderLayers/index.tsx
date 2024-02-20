import { Box, Card } from "@mui/material";
import LayerForm from "../LayerForm";
import { Layer } from "../../../../shared/models/layer";

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
