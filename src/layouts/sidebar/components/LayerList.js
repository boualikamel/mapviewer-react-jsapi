import React, { useEffect, useRef } from "react";

// import baseMaps from "../../../config/baseMaps";
import LayerList from "@arcgis/core/widgets/LayerList";
// import LocalBasemapsSource from "@arcgis/core/widgets/BasemapGallery/support/LocalBasemapsSource";
import { view } from "../../../config/map";

// main application provider
const LayerListe = () => {
  const refLayerListContainer = useRef(null);



  useEffect(() => {
  
    const layerList  = new LayerList({
        view: view,
        container: refLayerListContainer.current
    });

  
  }, []);
  return <div className='layerList' ref={refLayerListContainer}></div>;
};

export default LayerListe;
