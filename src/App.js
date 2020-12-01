import React,{useState} from "react";
import "@arcgis/core/assets/esri/themes/dark/main.css";

import { AppProvider } from "./contexts/AppContext";
import { WebMapView } from "./components/WebMapView";
import LHeader from "./layouts/header/Header";
import Sidebar from "./layouts/sidebar/Sidebar";

import Widget from "./layouts/widgetLayout/Widget";

import "./App.scss";
import Drawing from "./components/widgets/Drawing";

// main application provider
const App = () => {
const [fix, setFix] = useState(false);
const switchMode =()=>{
  setFix(!fix)
}
  return (
    <AppProvider>
     
      <LHeader click={switchMode}  />
      <div className="mapContainer">
        <Widget fix={fix}>
          <Drawing />
        </Widget>
        <Widget fix={fix}>
          <div>blabalablabl</div>
        </Widget>
        <WebMapView />
      </div>
    </AppProvider>
  );
};

export default App;
