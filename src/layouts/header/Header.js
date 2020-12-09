import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from "@material-ui/core";

import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import PublicIcon from "@material-ui/icons/Public";
import TabIcon from "@material-ui/icons/Tab";
import TabPanels from "./TabPanels";
import MenuIcon from "@material-ui/icons/Menu";
import Sidebar from "../sidebar/Sidebar";
import MenuWidget from './MenuWidget'

export default function LHeader(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [positionSidebar, setPositionSidebar] = useState({ right: "-250px" });
  const [openedSidebar, setOpenedSidebar] = useState(false);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerOpen = () => {
    if (openedSidebar) {
      setPositionSidebar({ right: "0%" });
      setOpenedSidebar(!openedSidebar);
    } else {
      setPositionSidebar({ right: "-250px" });
      setOpenedSidebar(!openedSidebar);
    }
  };

  return (
    <div className="header">
      <AppBar >
        <Toolbar>
          <PublicIcon className="iconApp" />
          <Typography variant="h6" noWrap>
            Oliviewer
          </Typography>
          <TabPanels />
          <div className="spacingBetween" />
          <div className="menuRight">
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              aria-label="show 17 new notifications"
              color="inherit"
              onClick={props.click}
            >
              <TabIcon />
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <IconButton
            className="buttonSidebar"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
        <Sidebar positionSidebar={positionSidebar} />
      </AppBar>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      </Menu>
    </div>
  );
}
