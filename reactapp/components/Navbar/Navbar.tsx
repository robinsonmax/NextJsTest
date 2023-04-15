"use client";

import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import ThemeDropdownOptions from "./ThemeDropdownOptions";

export default function CsNavbar() {
  return (
    <Navbar expand="lg" className={"border-bottom"}>
      <Container>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="/WeatherExample">Weather Forecast Example</Nav.Link>
          </Nav>
          <Nav className={"ms-auto me-5"}>
            <NavDropdown title="Theme" id="basic-nav-dropdown">
              <ThemeDropdownOptions />
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
