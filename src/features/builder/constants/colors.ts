// @ts-expect-error no types definition for this library
import * as cartoColors from "cartocolor";
import { colorBins } from "@deck.gl/carto/typed";

export const CARTO_COLORS = Object.keys(cartoColors).entries();

const DEFAULT_COLOR = "PinkYl";

export const getFillColor = (attr: string, colors: string = DEFAULT_COLOR) =>
  colorBins({
    attr,
    domain: [1350405, 1434442, 1500669, 1565742, 1648251],
    colors,
    nullColor: [53, 160, 166],
  });
