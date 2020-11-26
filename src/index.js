import React from "react";
import ReactDOM from "react-dom";
// import App from './App';
import reportWebVitals from "./reportWebVitals";
import "@arcgis/core/assets/esri/themes/dark/main.css";

import { AppProvider } from "./contexts/AppContext";
import { WebMapView } from "./components/WebMapView";
import Drawing from "./components/widgets/Drawing";
import "./App.css";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'


ReactDOM.render(
  <AppProvider>
    <div className="mapContainer">
      <WebMapView />
      <div className='widgetContainer'>
        <Drawing></Drawing>
      </div>
    </div>
  </AppProvider>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
