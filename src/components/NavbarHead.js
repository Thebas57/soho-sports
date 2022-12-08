import React, { useState } from "react";
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
import Matchs from "./Matchs";
import Leagues from "./Leagues";
import { NavLink } from "react-router-dom";

const NavbarHead = () => {
  const [selectSport, setSelectSport] = useState("foot");
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <NavLink exact to="/" className="navbar-brand">
            SOHO SPORT
          </NavLink>
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
              <NavLink
                to={{
                  pathname: "/leagues",
                  name: "basketball",
                }}
                exact
                className="nav-link"
                activeClassName="noclass"
                onClick={(e) => e.target.classList.toggle('active-navlink')}
              >
                <FaBasketballBall />
              </NavLink>
              <NavLink
                to={{
                  pathname: "/leagues",
                  name: "rugby",
                }}
                exact
                className="nav-link"
                activeClassName="noclass"
                onClick={(e) => e.target.classList.toggle('active-navlink')}
              >
                <FaFootballBall />
              </NavLink>
              <NavLink
                to={{
                  pathname: "/leagues",
                  name: "foot",
                }}
                exact
                className="nav-link"
                activeClassName="noclass"
                onClick={(e) => e.target.classList.toggle('active-navlink')}
              >
                <FaFutbol />
              </NavLink>
              <NavLink
                to={{
                  pathname: "/leagues",
                  name: "volley",
                }}
                exact
                className="nav-link"
                activeClassName="noclass"
                onClick={(e) => e.target.classList.toggle('active-navlink')}
              >
                <FaVolleyballBall />
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarHead;
