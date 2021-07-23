import React, { useState, useEffect } from 'react';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import { MapContext } from './AppContext';
import { featureLayers, featureLayersForSearch } from '../configs/featureLayersConfig';
import { defaultBaseMap } from '../configs/basemapConfig';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import esriConfig from "@arcgis/core/config.js";
esriConfig.assetsPath = "./assets"; 

// Declare a variable for drawing functionnality uses
export const graphicsLayerForDrawing = new GraphicsLayer();

// Declare a variable for map which contains the default base map OUFOUK
export const map = new Map({
  basemap: defaultBaseMap,
});

// Declare the view and set a container from html (V-DOM)
export const view = new MapView({
  container: 'viewDiv',
  map,
  zoom: 6, // Sets zoom level based on level of detail (LOD)
  center: [3.262939, 36.618283],
  showAttribution: false, // Sets center point of view using longitude,latitude
});


export const MapProvider = ({ children }) => {
  const [container, setContainer] = useState(null);

  const loadMap = async () => {
    if (container) {
      view.container = container;
      view
        .when()
        .then(() => {
          console.log('Map and View are ready');
        })
        .catch((error) => {
          console.warn('An error in creating the map occured:', error);
        });
    }
  };

  useEffect(() => {
    loadMap();
    view.ui._removeComponents(['attribution']);

    map.addMany(featureLayers);
    map.add(graphicsLayerForDrawing);
  }, [container]);

  const value = { container, setContainer };

  return <MapContext.Provider value={value}>{children}</MapContext.Provider>;
};
