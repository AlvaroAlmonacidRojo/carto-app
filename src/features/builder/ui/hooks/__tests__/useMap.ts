import { act } from "@testing-library/react";
import useMap from "../useMap";
import { PickingInfo } from "@deck.gl/core/typed";
import { ViewStateChangeParameters } from "@deck.gl/core/typed/controllers/controller";

describe("useMap hook", () => {
  it("should return correct tooltip content", () => {
    const { getTooltip } = useMap();

    const info = {
      object: { geometry: { type: "Point" }, properties: { name: "Location" } },
    } as PickingInfo;

    const tooltip = getTooltip(info);
    expect(tooltip).toEqual({
      html: `<p>Point</p><div><span><strong>name:</strong> Location</span></br></div>`,
    });
  });

  it("should return null if not info object", () => {
    const { getTooltip } = useMap();

    const info = {} as PickingInfo;

    const tooltip = getTooltip(info);
    expect(tooltip).toEqual(null);
  });

  it("should execute setViewState", () => {
    const { onViewStateChange } = useMap();
    const setViewState = jest.fn();
    const onViewStateChangeFunction = onViewStateChange(setViewState);
    const params = {
      viewState: { latitude: 40, longitude: -75, zoom: 10 },
      interactionState: {
        inTransition: undefined,
        isDragging: undefined,
        isPanning: undefined,
        isRotating: undefined,
        isZooming: undefined,
      },
      viewId: "",
    } as ViewStateChangeParameters & { viewId: string };

    act(() => {
      onViewStateChangeFunction(params);
    });
    expect(setViewState).toHaveBeenCalled();
  });
});
