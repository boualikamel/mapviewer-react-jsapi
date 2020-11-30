import React, { useEffect, useRef } from "react";

import baseMaps from "../../config/baseMaps";
import BasemapGallery from "@arcgis/core/widgets/BasemapGallery";
import LocalBasemapsSource from "@arcgis/core/widgets/BasemapGallery/support/LocalBasemapsSource";
import { view } from "../../config/map";

// main application provider
const Sidebar = () => {
  const refBaseMapGalery = useRef(null);



  useEffect(() => {
  
    const localSource = new LocalBasemapsSource({
      basemaps: baseMaps,
    });
    const basemapGallery = new BasemapGallery({
      view: view,
      source: localSource,
      container: refBaseMapGalery.current,
    });

  
  }, []);
  return <div className="sidebar" ref={refBaseMapGalery}></div>;
};

export default Sidebar;
