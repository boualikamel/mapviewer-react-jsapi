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
    </Tabs>
  );
}
