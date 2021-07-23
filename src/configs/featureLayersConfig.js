import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
/**
 * this file is used to generate the feature layers in our map
 * **/ 
export const featureLayers = [
  new FeatureLayer({
    url: 'https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Road_Closure/FeatureServer/0',
    
  }),
  new FeatureLayer({
    url: 'https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Hazard_Areas/FeatureServer/0',
  }),
  new FeatureLayer({
    url: 'https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Hazards_Uptown_Charlotte/FeatureServer/0',
  
  }),
];
