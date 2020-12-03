import React, { useState } from "react";
import { Paper, Tabs, Tab } from "@material-ui/core";

export default function TabPanels() {
  const [value, setValue] = useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      aria-label="tabs example"
    >
      <Tab label="Menu 3" />
      <Tab label="Menu 1" />
      <Tab label="Menu 2" />
      <Tab label="Menu 5" />
      <Tab label="Menu 6" />

    </Tabs>
  );
}
