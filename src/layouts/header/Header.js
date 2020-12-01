import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Fab from "@material-ui/core/Fab";
import FilterNoneIcon from '@material-ui/icons/FilterNone';

export default function Lheader(props) {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit">
            <MenuIcon />
          </IconButton>
       
          <Button onClick={props.click}><FilterNoneIcon /></Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
