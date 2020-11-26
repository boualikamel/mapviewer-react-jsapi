import featureLayers from "./featureLayers";
import ArcGISMap from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";

const map = new ArcGISMap({
  basemap: "gray-vector",
});

export const view = new MapView({
  container: "viewDiv",
  map: map,
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
