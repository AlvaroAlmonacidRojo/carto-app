import { MapViewState, PickingInfo } from "@deck.gl/core/typed";
import { ViewStateChangeParameters } from "@deck.gl/core/typed/controllers/controller";
import { TooltipContent } from "@deck.gl/core/typed/lib/tooltip";

type TooltipFunction =
  | ((info: PickingInfo) => TooltipContent)
  | null
  | undefined;

type ViewStateChangeFunction =
  | ((
      setViewState: React.Dispatch<React.SetStateAction<MapViewState>>
    ) => (params: ViewStateChangeParameters & { viewId: string }) => void)
  | undefined;

const useMap = () => {
  const getTooltip: TooltipFunction = (info) => {
    if (info.object) {
      return {
        html: `<p>${info.object.geometry.type}</p><div>${Object.entries(
          info.object.properties
        )
          .map(
            ([key, value]) =>
              `<span><strong>${key}:</strong> ${value}</span></br>`
          )
          .join("")}</div>`,
      };
    }

    return null;
  };

  const onViewStateChange: ViewStateChangeFunction =
    (setViewState) => (params) => {
      setViewState((viewState) => ({
        ...viewState,
        latitude: params.viewState.latitude,
        longitude: params.viewState.longitude,
        zoom: params.viewState.zoom,
      }));
    };

  return { getTooltip, onViewStateChange };
};

export default useMap;
