import Basemap from "@arcgis/core/Basemap";
import WebTileLayer from "@arcgis/core/layers/WebTileLayer";

const baseMaps = [
  new Basemap({
    baseLayers: [
      new WebTileLayer({
        urlTemplate:
          "http://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{level}/{row}/{col}.png",
      }),
    ],
    title: "satellite",
    id: "satellite",
    thumbnailUrl:
      "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/4/5/4",
  }),
  new Basemap({
    baseLayers: [
      new WebTileLayer({
        urlTemplate:
          "https://{subDomain}.tile.openstreetmap.org/{level}/{col}/{row}.png",
        subDomains: ["a", "b", "c"],
      }),
    ],
    title: "osm",
    id: "osm",
    thumbnailUrl: "https://a.tile.openstreetmap.org/6/31/25.png",
  }),
  new Basemap({
    baseLayers: [
      new WebTileLayer({
        urlTemplate:
          "http://{subDomain}.google.com/vt/lyrs=m&x={col}&y={row}&z={level}",
        subDomains: ["mt0", "mt1", "mt2", "mt3"],
      }),
    ],
    title: "googleStreets",
    id: "google_streets",
    thumbnailUrl: "http://mt3.google.com/vt/lyrs=m&x=17&y=11&z=5",
  }),
  new Basemap({
    baseLayers: [
      new WebTileLayer({
        urlTemplate:
          "http://{subDomain}.google.com/vt/lyrs=s&x={col}&y={row}&z={level}",
        subDomains: ["mt0", "mt1", "mt2", "mt3"],
      }),
    ],
    title: "googleSatellite",
    id: "google_satellite",
    thumbnailUrl: "http://mt3.google.com/vt/lyrs=s&x=17&y=11&z=5",
  }),
];

export default baseMaps;
