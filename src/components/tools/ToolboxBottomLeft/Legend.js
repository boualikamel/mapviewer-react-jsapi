import React, { useEffect, useRef } from 'react';

import Legend from '@arcgis/core/widgets/Legend';
import { view } from '../../../hooks/MapProvider';

const LegendList = () => {
  const refLegendContainer = useRef(null);

  useEffect(() => {
    new Legend({
      view,
      container: refLegendContainer.current,
    });
  }, []);
  return <div className="legend" ref={refLegendContainer} />;
};

export default LegendList;
