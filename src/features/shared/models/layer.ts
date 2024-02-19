import { CartoLayerProps } from "@deck.gl/carto/typed";

export interface Layer extends CartoLayerProps {
  pointRadiusMinPixels: number;
  getLineColor: number[];
  getFillColor: number[];
  lineWidthMinPixels: number;
}
