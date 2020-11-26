import React, { useRef, useEffect } from "react";

import Graphic from "@arcgis/core/Graphic";
import Draw from "@arcgis/core/views/draw/Draw";
import { view } from "../../data/map";
import { Button, Tooltip } from "antd";
import baseMaps from "../../data/baseMaps";
import BasemapGallery from "@arcgis/core/widgets/BasemapGallery";
import LocalBasemapsSource from "@arcgis/core/widgets/BasemapGallery/support/LocalBasemapsSource";

const Drawing = () => {
  const ref = useRef(null);
  const refBaseMapGalery = useRef(null);

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
    const localSource = new LocalBasemapsSource({
      basemaps: baseMaps,
    });
    const basemapGallery = new BasemapGallery({
      view: view,
      source: localSource,
      container: refBaseMapGalery.current
    });
    
    ref.current = drawPolyline;
  }, []);
  return (
    <Tooltip title="Draw a line">
      <Button type="primary" shape="round" onClick={() => ref.current()}>
        Drawing
      </Button>
      <div className='baseMapGalery' ref={refBaseMapGalery}></div>
    </Tooltip>
  );
};

export default Drawing;
