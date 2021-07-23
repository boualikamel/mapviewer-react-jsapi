import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
/**
 * this file is used to generate the feature layers in our map
 * **/ 
export const featureLayers = [
  new FeatureLayer({
    url: 'gis/arcgis/rest/services/harmohta/common_geo/FeatureServer/2',
    title: 'polygon',
    outFields: ['couche'],
  }),
  new FeatureLayer({
    url: 'gis/arcgis/rest/services/harmohta/common_geo/FeatureServer/0',
    title: 'point',
    outFields: ['couche'],
  }),
  new FeatureLayer({
    url: 'gis/arcgis/rest/services/harmohta/common_geo/FeatureServer/1',
    title: 'line',
    outFields: ['couche'],
  }),
];
