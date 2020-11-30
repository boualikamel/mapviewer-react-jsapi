import React from "react";
import "@arcgis/core/assets/esri/themes/dark/main.css";

import { AppProvider } from "./contexts/AppContext";
import { WebMapView } from "./components/WebMapView";
import LHeader from "./layouts/header/Header";
import Sidebar from "./layouts/sidebar/Sidebar";

import Widget from "./layouts/widgetLayout/Widget";

import "./App.scss";

// main application provider
const App = () => {
  return (
    <AppProvider>
      <LHeader />
      <div className="mapContainer">
        <Widget></Widget>
        <WebMapView />
        {/* <Sidebar></Sidebar> */}
      </div>
    </AppProvider>
  );
};

export default App;
