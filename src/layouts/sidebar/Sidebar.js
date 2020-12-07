import React, { useState, useEffect } from "react";
import { Paper } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import LayersOutlinedIcon from "@material-ui/icons/LayersOutlined";
import GpsNotFixedIcon from "@material-ui/icons/GpsNotFixed";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import LayersIcon from "@material-ui/icons/Layers";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import BaseMapGalery from "./components/BaseMapGalery";
import LegendList from "./components/LegendList";
import LayerListe from "./components/LayerList";
import CoordinateConv from "./components/CoordinateConv";

export default function Sidebar(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    console.log(value);
    setValue(newValue);
  };
  return (
    <Paper className="sidebar" style={props.positionSidebar}>
      <AppBar position="static">
        <Tabs
          onChange={handleChange}
          value={value}
          variant="scrollable"
          scrollButtons="off"
          aria-label="scrollable prevent tabs example"
          className="headerSidebar"
        >
          <Tab icon={<ViewModuleIcon />} aria-label="favorite" />
          <Tab icon={<LayersIcon />} aria-label="phone" />
          <Tab icon={<LayersOutlinedIcon />} aria-label="person" />
          <Tab icon={<GpsNotFixedIcon />} aria-label="help" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <BaseMapGalery />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <LegendList />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <LayerListe />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <CoordinateConv />
      </TabPanel>
    </Paper>
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      className="tab"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-prevent-tabpanel-${index}`}
      aria-labelledby={`scrollable-prevent-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}
