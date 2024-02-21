import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import BuilderMap from "../BuilderMap";
import BuilderLayers from "../BuilderLayers";
import { layers } from "../../../constants/layers";
import { CartoLayer } from "@deck.gl/carto/typed";
import { useState } from "react";
import { Layer } from "../../../../shared/models/layer";
import { Box } from "@mui/material";

const BuilderContainer = () => {
  const [layersList, setLayersList] = useState<Layer[]>(layers);

  const replaceItemById = (layers: Layer[], newLayer: Layer) =>
    layers.map((layer) => (layer.id === newLayer.id ? newLayer : layer));

  const onChangeLayer = (layer: Layer) => {
    const newLayers = replaceItemById(layersList, layer);
    setLayersList([...newLayers]);
  };

  const getCartoLayers = layersList.map(
    (layer) => new CartoLayer({ ...layer })
  );

  return (
    <Box>
      <CssBaseline />
      <AppBar component="nav">Carto Builder</AppBar>
      <Grid container display={"flex"} marginTop="2em">
        <Grid
          sx={{ display: { xs: "none", md: 'block' } }}
          paddingRight="10px"
          item
          lg={3}
          borderRight="1px solid grey"
          maxHeight={window.innerHeight * 0.9}
          overflow="auto"
        >
          <BuilderLayers onChangeLayer={onChangeLayer} layers={layersList} />
        </Grid>
        <Grid
          item
          lg={9}
          sx={{ position: { xs: "inheretic", md: "relative"}}}
          maxHeight={window.innerHeight * 0.9}
        >
          <BuilderMap layers={getCartoLayers} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default BuilderContainer;
