import Box from "@mui/material/Box";
import DeckGL from "@deck.gl/react/typed";
import {
  setDefaultCredentials,
  API_VERSIONS,
} from "@deck.gl/carto/typed";
import Map, {
  FullscreenControl,
  GeolocateControl,
  ScaleControl,
} from "react-map-gl";
import { layers } from "../../../constants/layers";

const CARTO_ACCESS_TOKEN = import.meta.env.VITE_CARTO_ACCESS_TOKEN;
const MAPBOX_ACCESS_TOKEN = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

setDefaultCredentials({
  apiVersion: API_VERSIONS.V3,
  accessToken: CARTO_ACCESS_TOKEN,
  apiBaseUrl: API_BASE_URL,
});

const BuilderMap = () => {
  const viewState = {
    latitude: 39.8283,
    longitude: -98.5795,
    zoom: 3,
    bearing: 0,
    pitch: 30,
  };
  return (
    <Box padding="1em">
      <DeckGL
        style={{ margin: "1em" }}
        width="80%"
        height="80%"
        controller={true}
        initialViewState={viewState}
        viewState={viewState}
        layers={layers}
      >
        <Map  
          mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
          mapStyle="https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json"
        ></Map>
      </DeckGL>
    </Box>
  );
};

export default BuilderMap;
