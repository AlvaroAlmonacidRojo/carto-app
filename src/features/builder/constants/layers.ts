import { MAP_TYPES } from "@deck.gl/carto/typed";

const connection = "carto_dw";
const data = "carto-demo-data";

const RETAIL_STORES_LAYER = {
  id: "RETAIL_STORES_LAYER",
  type: MAP_TYPES.TABLE,
  connection,
  data: `${data}.demo_tables.retail_stores`,
  getFillColor: [69, 95, 97],
  getLineColor: [53, 160, 166],
  visible: true,
  lineWidthMinPixels: 0,
};

const WORLD_AIRPORTS_LAYER = {
  id: "WORLD_AIRPORTS_LAYER",
  type: MAP_TYPES.TABLE,
  connection,
  data: `${data}.demo_tables.world_airports`,
  pointRadiusMinPixels: 1,
  getLineColor: [255, 153, 31],
  getFillColor: [255, 153, 31],
  visible: false,
  lineWidthMinPixels: 0,
};

const SOCIODEMOGRAPHICS_USA_BLOCKGROUP_LAYER = {
  id: "SOCIODEMOGRAPHICS_USA_BLOCKGROUP_LAYER",
  type: MAP_TYPES.TILESET,
  connection,
  data: `${data}.demo_tilesets.sociodemographics_usa_blockgroup`,
  pointRadiusMinPixels: 1,
  getLineColor: [34, 63, 154],
  getFillColor: [34, 63, 154],
  visible: true,
  lineWidthMinPixels: 0,
};

export const layers = [
  RETAIL_STORES_LAYER,
  WORLD_AIRPORTS_LAYER,
  SOCIODEMOGRAPHICS_USA_BLOCKGROUP_LAYER,
];
