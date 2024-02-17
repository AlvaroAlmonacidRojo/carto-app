import { CartoLayer, MAP_TYPES } from "@deck.gl/carto/typed";

const connection = "carto_dw";
const data = "carto-demo-data";

const RETAIL_STORES_LAYER = new CartoLayer({
  id: "RETAIL_STORES_LAYER",
  type: MAP_TYPES.TABLE,
  connection,
  data: `${data}.demo_tables.retail_stores`,
  pointRadiusMinPixels: 1,
  getLineColor: [53, 160, 166],
  getFillColor: [53, 160, 166]
});

const WORLD_AIRPORTS_LAYER = new CartoLayer({
  id: "WORLD_AIRPORTS_LAYER",
  type: MAP_TYPES.TABLE,
  connection,
  data: `${data}.demo_tables.world_airports`,
  pointRadiusMinPixels: 1,
  getLineColor: [255, 153, 31],
  getFillColor: [255, 153, 31]
});

const SOCIODEMOGRAPHICS_USA_BLOCKGROUP_LAYER = new CartoLayer({
  id: "SOCIODEMOGRAPHICS_USA_BLOCKGROUP_LAYER",
  type: MAP_TYPES.TILESET,
  connection,
  data: `${data}.demo_tilesets.sociodemographics_usa_blockgroup`,
  pointRadiusMinPixels: 1,
  getLineColor: [34, 63, 154],
  getFillColor: [34, 63, 154]
});

export const layers = [
  RETAIL_STORES_LAYER,
  WORLD_AIRPORTS_LAYER,
  SOCIODEMOGRAPHICS_USA_BLOCKGROUP_LAYER,
];
