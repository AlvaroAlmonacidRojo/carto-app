import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import BuilderMap from "../BuilderMap";
import BuilderLayers from "../BuilderLayers";
import { layers } from "../../../constants/layers";
import { CartoLayer } from "@deck.gl/carto/typed";
import { useState } from "react";
import { Layer } from "../../../../shared/models/layer";

const BuilderContainer = () => {
  const [layersList, setLayersList] = useState<Layer[]>(layers);
  const replaceItemById = (layers: Layer[], newLayer: Layer) =>
    layers.map((layer) => (layer.id === newLayer.id ? newLayer : layer));

  const onChangeLayer = (layer: Layer) => {
    console.log("New layer 1", layer);
    const newLayers = replaceItemById(layersList, layer);
    console.log('New Layers', newLayers)
    setLayersList(newLayers);
  };

  const getCartoLayers = (list: Layer[]) =>
    list.map((layer) => new CartoLayer(layer));

  return (
    <div>
      <CssBaseline />
      <AppBar component="nav">Carto Builder</AppBar>
      <Grid
        container
        display={"flex"}
        marginTop="2em"
        height="100%"
        minHeight="700px"
      >
        <Grid item xs={2} borderRight="1px solid grey">
          <BuilderLayers onChangeLayer={onChangeLayer} layers={layersList} />
        </Grid>
        <Grid item xs={10} position="relative">
          <BuilderMap layers={getCartoLayers(layersList)} />
        </Grid>
      </Grid>
    </div>
  );
};

export default BuilderContainer;
