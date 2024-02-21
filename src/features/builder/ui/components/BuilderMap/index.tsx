import { useState } from "react";
import Box from "@mui/material/Box";
import DeckGL from "@deck.gl/react/typed";
import { setDefaultCredentials, API_VERSIONS } from "@deck.gl/carto/typed";
import { LayersList, MapViewState } from "@deck.gl/core/typed";
import "mapbox-gl/dist/mapbox-gl.css";
import Map from "react-map-gl";
import useMap from "../../hooks/useMap";
import { defaultViewState } from "../../../constants/views";
import { BASE_MAP } from "../../../constants/mapStyles";
import { API_BASE_URL } from "../../../constants/api";

const CARTO_ACCESS_TOKEN = import.meta.env.VITE_CARTO_ACCESS_TOKEN;
const MAPBOX_ACCESS_TOKEN = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

setDefaultCredentials({
  apiVersion: API_VERSIONS.V3,
  accessToken: CARTO_ACCESS_TOKEN,
  apiBaseUrl: API_BASE_URL,
});

interface Props {
  layers: LayersList;
}

const BuilderMap = ({ layers }: Props) => {
  const [viewState, setViewState] = useState<MapViewState>(defaultViewState);
  const { getTooltip, onViewStateChange } = useMap();

  return (
    <Box padding="1em">
      <DeckGL
        getTooltip={getTooltip}
        style={{ margin: "1em" }}
        onViewStateChange={onViewStateChange(setViewState)}
        controller={true}
        viewState={viewState}
        layers={layers}
      >
        <Map
          id="map-id"
          mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
          mapStyle={BASE_MAP}
        />
      </DeckGL>
    </Box>
  );
};

export default BuilderMap;
