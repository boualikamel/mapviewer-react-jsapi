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

export default function LHeader() {
  const [hideSidebar, setHideSidebar] = useState(false);
  return (
    <header className="header">
      <Navbar className="header-bar" bg="light" expand="lg">
        <Navbar.Brand className="header-logo" href="#home">
          <FontAwesomeIcon icon={faGlobeEurope} />
          <p>Map Viewer</p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="header-menu" id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="header-menu-elem">Home</Nav.Link>
            <Nav.Link className="header-menu-elem">Link</Nav.Link>
            <NavDropdown
              className="header-menu-elem"
              title="Dropdown"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item>Action</NavDropdown.Item>
              <NavDropdown.Item>Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            </NavDropdown>
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
