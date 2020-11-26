import React, { useRef, useEffect } from "react";

import Graphic from "@arcgis/core/Graphic";
import Draw from "@arcgis/core/views/draw/Draw";
import { view } from "../data/map";

const Drawing = () => {
  const ref = useRef(null);

  const draw = new Draw({
    view: view,
  });

  useEffect(() => {

    const drawPolyline = (e) => {
        const action = draw.create("polyline");
    
        view.focus();
    
        action.on(
          [
            "vertex-add",
            "vertex-remove",
            "cursor-update",
            "redo",
            "undo",
            "draw-complete",
          ],
          createGraphic
        );
      };
      const createGraphic = (event) => {
        const vertices = event.vertices;
        view.graphics.removeAll();
    
        const graphic = new Graphic({
          geometry: {
            type: "polyline",
            paths: vertices,
            spatialReference: view.spatialReference,
          },
          symbol: {
            type: "simple-line",
            color: [4, 90, 141],
            width: 4,
            cap: "round",
            join: "round",
          },
        });
        // this.setState({
        //   geom: graphic.geometry,
        // });
    
        view.graphics.add(graphic);
      };
    ref.current = drawPolyline;
  }, []);
  return (
    <button className="drawpolyline" onClick={() => ref.current()}>
      DRAW POLYLINE
    </button>
  );
};

export default Drawing;
