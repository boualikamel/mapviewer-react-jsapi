import React, { useEffect, useRef } from "react";

// import baseMaps from "../../../config/baseMaps";
import CoordinateConversion from "@arcgis/core/widgets/CoordinateConversion";
// import LocalBasemapsSource from "@arcgis/core/widgets/BasemapGallery/support/LocalBasemapsSource";
import { view } from "../../../config/map";

// main application provider
const CoordinateConv = () => {
  const refCoordinateConvContainer = useRef(null);



  useEffect(() => {
  
    const coordconv  = new CoordinateConversion({
        view: view,
        container: refCoordinateConvContainer.current
    });

  
  }, []);
  return <div className='coordinateConversion' ref={refCoordinateConvContainer}></div>;
};

export default CoordinateConv;
