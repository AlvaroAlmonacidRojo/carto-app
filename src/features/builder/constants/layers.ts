import { MAP_TYPES } from "@deck.gl/carto/typed";
import { Layer } from "../../shared/models/layer";
import { getFillColor } from "./colors";

const connection = "carto_dw";
const data = "carto-demo-data";

const RETAIL_STORES_LAYER: Layer = {
  id: "Retail stores",
  type: MAP_TYPES.QUERY,
  connection,
  pickable: true,
  data: `SELECT * FROM ${data}.demo_tables.retail_stores`,
  pointRadiusMinPixels: 1,
  getFillColor: getFillColor("revenue", "PinkYl"),
  getLineColor: [53, 160, 166],
  visible: true,
  lineWidthMinPixels: 0,
  basedOn: 'revenue'
};

const WORLD_AIRPORTS_LAYER: Layer = {
  id: "World airports",
  type: MAP_TYPES.TABLE,
  connection,
  pickable: true,
  data: `${data}.demo_tables.world_airports`,
  pointRadiusMinPixels: 1,
  getFillColor: [255, 153, 31],
  getLineColor: [255, 153, 31],
  visible: false,
  lineWidthMinPixels: 0,
  basedOn: undefined
};

const SOCIODEMOGRAPHICS_USA_BLOCKGROUP_LAYER: Layer = {
  id: "Sociodemographics USA blockgroup",
  type: MAP_TYPES.TILESET,
  connection,
  pickable: true,
  data: `${data}.demo_tilesets.sociodemographics_usa_blockgroup`,
  pointRadiusMinPixels: 1,
  getFillColor: [34, 63, 154],
  getLineColor: [34, 63, 154],
  visible: false,
  lineWidthMinPixels: 0,
  basedOn: undefined
};

export const layers = [
  RETAIL_STORES_LAYER,
  WORLD_AIRPORTS_LAYER,
  SOCIODEMOGRAPHICS_USA_BLOCKGROUP_LAYER,
];
