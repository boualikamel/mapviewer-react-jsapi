import React, { useContext, useEffect, useRef } from 'react';

import { MapContext } from '../hooks/AppContext';

const WebMapView = () => {
  const mapRef = useRef(null);
  const { setContainer } = useContext(MapContext);

  useEffect(() => {
    setContainer(mapRef.current);
  }, [mapRef.current]);

  return <div className="webmap" ref={mapRef} />;
};

export { WebMapView };
