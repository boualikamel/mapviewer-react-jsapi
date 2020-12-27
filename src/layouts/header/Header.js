import React, { useState } from "react";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAlignRight,
  faBell,
  faUser,
  faGlobeEurope,
} from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../sidebar/Sidebar";

export default function LHeader(props) {
  const [hideSidebar, setHideSidebar] = useState(false);
  console.log("IN HEADER ", props.listWidget)
  return (

    <header className="header">

      <Navbar className="header-bar"  expand="lg">
        <Navbar.Brand className="header-logo" href="#home">
          <FontAwesomeIcon icon={faGlobeEurope} />
          <p>Viewer</p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="header-menu" id="basic-navbar-nav">
          <Nav className="mr-auto">
          {props.listWidget.map((obj)=>{
            return(
              <Nav.Link onClick={()=>{props.handleClickMenu(obj[1])}}  className="header-menu-elem" key={obj[1]}>{obj[0]}</Nav.Link>
            )
          })}
          </Nav>
        </Navbar.Collapse>
        <div className="right-content">
          <Button variant="transparent">
            <FontAwesomeIcon icon={faBell} />
          </Button>
          <Button variant="transparent">
            <FontAwesomeIcon icon={faUser} />
          </Button>
          <Button
            variant="transparent"
            onClick={() => setHideSidebar(!hideSidebar)}
          >
            <FontAwesomeIcon icon={faAlignRight} />
          </Button>
        </div>
      </Navbar>
      <Sidebar hide={hideSidebar}></Sidebar>
    </header>
  );
}
