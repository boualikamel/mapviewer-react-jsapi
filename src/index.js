import React from "react";
import ReactDOM from "react-dom";
// import App from './App';
import reportWebVitals from "./reportWebVitals";
import "@arcgis/core/assets/esri/themes/dark/main.css";

import { AppProvider } from "./contexts/AppContext";
import { WebMapView } from "./components/WebMapView";
import Drawing from "./components/Drawing";
import "./App.css";

ReactDOM.render(
  <AppProvider>
    <WebMapView>

    </WebMapView>
    <Drawing />
  </AppProvider>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
