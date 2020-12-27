import React, { useState,useEffect } from "react";

import { AppProvider } from "./contexts/AppContext";
import { WebMapView } from "./components/WebMapView";
import Drawing from "./components/widgets/Drawing";
import Affaire from "./components/widgets/Affaire";
import Statistique from "./components/widgets/Statistique";
import LHeader from "./layouts/header/Header";

import "@arcgis/core/assets/esri/themes/light/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

import WidgetList from "./config/widgetList";

const App = () => {
  const [listWidget, setListWidget] = useState([
    {
      title: "Affaire",
      menuTitle: "Affaire",
      body: <Affaire />,
      icon: "",
      initialSize: { height: "400px", width: "400px" },
      initalPosition: "",
    },
    {
      title: "Drawing",
      menuTitle: "Drawing",
      body: <Drawing />,
      icon: "",
      initialSize: { height: "500px", width: "500px" },
      initalPosition: "",

    },
    {
      title: "Statistique",
      menuTitle: "Statistique",
      body: <Statistique />,
      icon: "",
      initalPosition: "",

    },
  ]);
  const [fix, setFix] = useState(false);
  useEffect(() => {
   const l = [...listWidget]
   l.map((obj,i) => {
    obj.rendered = false;
    obj.zIndex = 0;
    obj.display = "none";
    obj.i = i
  })
    setListWidget(l);
  },[true]);


  const handleClickMenu = (index) => {
    
    let l = [...listWidget];
    let elem = l.find(e => e.i === index);
    if (elem.rendered) {
      elem.display = "flex";
    } else {
      elem.rendered = true;
      elem.display = "flex";
    }

    setListWidget(l);

  };
  const switchMode = () => {
    setFix(!fix);
  };

  
  return (
    <AppProvider>
      <LHeader
        click={switchMode}
        handleClickMenu={handleClickMenu}
        listWidget={listWidget.map((widget) => {
          return [widget.menuTitle, widget.i];
        })}
      />
      <div className="mapContainer">
        <WebMapView />
        <WidgetList fix={fix} listWidget={listWidget} />
      </div>
    </AppProvider>
  );
};

export default App;
