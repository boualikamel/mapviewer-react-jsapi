import React, {useState, useEffect} from "react";

import BaseMapGalery from "./components/BaseMapGalery";
import LegendList from "./components/LegendList";
import LayerListe from "./components/LayerList";
import CoordinateConv from "./components/CoordinateConv";


import { Tabs, Tab } from "react-bootstrap";

export default function Sidebar(props) {
  const [display, setDisplay] = useState('')
  useEffect(() => {
   props.hide ? setDisplay('block') : setDisplay('none');
  }, [props.hide])

  return (
    <div className="sidebar" style={{display:display}}>
      <Tabs defaultActiveKey="1">
        <Tab eventKey="1" title={<i className="esri-icon-basemap"></i>}>
          <BaseMapGalery />
        </Tab>
        <Tab eventKey="2" title={<i className="esri-icon-collection"></i>}>
          <LegendList />
        </Tab>
        <Tab eventKey="3" title={<i className="esri-icon-layers"></i>}>
          <LayerListe />
        </Tab>
        <Tab eventKey="4" title={<i className="esri-icon-locate"></i>}>
          <CoordinateConv />
        </Tab>
      </Tabs>
    </div>
  );
}
