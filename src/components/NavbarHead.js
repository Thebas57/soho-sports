import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaBasketballBall,
  FaFootballBall,
  FaFutbol,
  FaVolleyballBall,
} from "react-icons/fa";

const NavbarHead = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">SOHO SPORT</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Sites favoris" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Site 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Site 2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Site 3</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              <FaBasketballBall />
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              <FaFootballBall />
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              <FaFutbol />
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              <FaVolleyballBall />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarHead;
