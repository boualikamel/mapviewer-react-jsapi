import React, { useEffect, useRef } from "react";

// import baseMaps from "../../../config/baseMaps";
import Legend from "@arcgis/core/widgets/Legend";
// import LocalBasemapsSource from "@arcgis/core/widgets/BasemapGallery/support/LocalBasemapsSource";
import { view } from "../../../config/map";

// main application provider
const LegendList = () => {
  const refLegendContainer = useRef(null);



  useEffect(() => {
  
    const legend = new Legend({
        view: view,
        container: refLegendContainer.current
    });

  
  }, []);
  return <div className='legendContainer' ref={refLegendContainer}></div>;
};

export default LegendList;
