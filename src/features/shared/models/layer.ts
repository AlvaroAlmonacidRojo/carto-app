import { CartoLayerProps } from "@deck.gl/carto/typed";
import { Color } from "@deck.gl/carto/typed/style/palette";
import { AccessorFunction } from "@deck.gl/core/typed";

export interface Layer extends CartoLayerProps {
  pointRadiusMinPixels: number;
  getLineColor: Color;
  getFillColor: AccessorFunction<any,Color> | number[];
  lineWidthMinPixels: number;
  basedOn: string | undefined;
}
