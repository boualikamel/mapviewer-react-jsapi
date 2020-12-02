import React, { useState } from "react";

import { AppProvider } from "./contexts/AppContext";
import { WebMapView } from "./components/WebMapView";
import LHeader from "./layouts/header/Header";

import "@arcgis/core/assets/esri/themes/dark/main.css";
import "./App.scss";
import { Layout } from "antd";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

import WidgetList from "./config/widgetList";

const App = () => {
  const [fix, setFix] = useState(false);
  const switchMode = () => {
    setFix(!fix);
  };
  return (
    <AppProvider>
      <Layout className="layout">
        <LHeader click={switchMode} />
        <div className="mapContainer">
          <WebMapView />
          <WidgetList fix={fix} />
        </div>
      </Layout>
    </AppProvider>
  );
};

export default App;
