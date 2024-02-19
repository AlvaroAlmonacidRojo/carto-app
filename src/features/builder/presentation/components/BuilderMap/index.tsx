import Box from "@mui/material/Box";
import DeckGL from "@deck.gl/react/typed";
import { setDefaultCredentials, API_VERSIONS } from "@deck.gl/carto/typed";
import { LayersList, MapViewState } from "@deck.gl/core/typed";
import "mapbox-gl/dist/mapbox-gl.css";
import Map from "react-map-gl";
import { useState } from "react";

const CARTO_ACCESS_TOKEN = import.meta.env.VITE_CARTO_ACCESS_TOKEN;
const MAPBOX_ACCESS_TOKEN = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

setDefaultCredentials({
  apiVersion: API_VERSIONS.V3,
  accessToken: CARTO_ACCESS_TOKEN,
  apiBaseUrl: API_BASE_URL,
});

interface Props {
  layers: LayersList;
}
const BuilderMap = ({ layers }: Props) => {
  const [viewState, setViewState] = useState<MapViewState>({
    latitude: 39.8283,
    longitude: -98.5795,
    zoom: 2,
    bearing: 0,
    pitch: 0,
  });

  return (
    <Box padding="1em">
      <DeckGL
        style={{ margin: "1em" }}
        // width="80%"
        // height="100%"
        // onHover={(info, e) => console.log("INFO", e)}
        onViewStateChange={(params) =>
          setViewState({
            ...viewState,
            latitude: params.viewState.latitude,
            longitude: params.viewState.longitude,
            zoom: params.viewState.zoom,
          })
        }
        controller={true}
        viewState={viewState}
        layers={layers}
      >
        <Map
          id="map-id"
          mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
          mapStyle="https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json"
        />
      </DeckGL>
    </Box>
  );
};

export default BuilderMap;
