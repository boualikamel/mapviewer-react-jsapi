import FeatureLayer from "@arcgis/core/layers/FeatureLayer";

 const featureLayers  = [
    
        new FeatureLayer({
            url:
              "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Alternative_Fuel_Station_March2018/FeatureServer",
            outFields: ["*"]
          
          }),
          new FeatureLayer({
            url:
              "https://services1.arcgis.com/4yjifSiIG17X0gW4/arcgis/rest/services/Alternative_Fuel_Station_March2018/FeatureServer",
            outFields: ["*"]
          })
]

export default featureLayers;