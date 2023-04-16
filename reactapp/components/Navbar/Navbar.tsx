//import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import ThemeDropdownOptions from "./ThemeDropdownOptions";
import Link from "next/link";
import Image from "next/image";

export default function CsNavbar() {
  return (
    <nav className="navbar nav-expand-lg border-bottom">
      <div className="container">
        <Link href="/" legacyBehavior passHref>
          <a className="navbar-brand">
            <Image
              src={
                "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg"
              }
              alt="Bootstrap Logo"
              width={30}
              height={24}
              className="me-2"
              style={{ transform: "translateY(-2px)" }}
            />
            Home
          </a>
        </Link>
        <div className="d-flex flex-grow-1">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-row">
            <li className="nav-item pe-3">
              <Link href="/WeatherExample" legacyBehavior passHref>
                <a className="nav-link">Weather Forecast Example</a>
              </Link>
            </li>
            <li className="nav-item pe-3">
              <Link href="/Individual" legacyBehavior passHref>
                <a className="nav-link">Individual</a>
              </Link>
            </li>
            <li className="nav-item">
              Theme Dropdown Goes Here
              {/*<ThemeDropdownOptions />*/}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );

  // COMMENTED OUT NAVBAR BECAUSE:
  // https://github.com/react-bootstrap/react-bootstrap/issues/6475
  // https://github.com/react-bootstrap/react-bootstrap/pull/6532

  /*
  return (
    <Navbar expand="lg" className={"border-bottom"}>
      <Container>
        <Link href="/" legacyBehavior passHref>
          <Navbar.Brand>Home</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Link href="/WeatherExample" legacyBehavior passHref>
              <Nav.Link>Weather Forecast Example</Nav.Link>
            </Link>
          </Nav>
          <Nav>
            <Link href="/Individual" legacyBehavior passHref>
              <Nav.Link>Individual</Nav.Link>
            </Link>
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
  */
}
