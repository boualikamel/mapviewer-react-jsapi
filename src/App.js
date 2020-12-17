import React, { useState } from "react";

import { AppProvider } from "./contexts/AppContext";
import { WebMapView } from "./components/WebMapView";
import LHeader from "./layouts/header/Header";

import "@arcgis/core/assets/esri/themes/light/main.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.scss";

import WidgetList from "./config/widgetList";

const App = () => {
  const [fix, setFix] = useState(false);
  const switchMode = () => {
    setFix(!fix);
  };
  return (
    <AppProvider>
      <LHeader click={switchMode} />
      <div className="mapContainer">
        <WebMapView />
        <WidgetList fix={fix} />
      </div>
    </AppProvider>
  );
};

export default App;
