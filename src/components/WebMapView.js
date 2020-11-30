import React, { useContext, useEffect, useRef } from 'react';

import { AppContext } from '../contexts/AppContext';

const WebMapView = () => {
    const mapRef = useRef(null);
    const { setContainer } = useContext(AppContext);

    useEffect(() => {
        setContainer(mapRef.current);
    }, [mapRef.current]);

    return <div className="webmap" ref={mapRef}/>;
};

export { WebMapView };
