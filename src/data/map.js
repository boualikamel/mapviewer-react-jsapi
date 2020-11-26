import featureLayers from "./featureLayers";
import ArcGISMap from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";



const map = new ArcGISMap({
  basemap: "gray-vector",
});

export const view = new MapView({
  container: "viewDiv",
  map: map,
  zoom: 6, // Sets zoom level based on level of detail (LOD)
  center: [3.262939, 36.618283], // Sets center point of view using longitude,latitude
});

map.addMany(featureLayers);

export const initialize = (container) => {
  view.container = container;
  view
    .when()
    .then((_) => {
      console.log("Map and View are ready");
    })
    .catch((error) => {
      console.warn("An error in creating the map occured:", error);
    });
};
