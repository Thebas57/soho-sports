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

  /* Toggle la classe active link et enlève la classe sur les autres */
  const toggleActiveLink = (e) => {
    let elements = document.getElementsByClassName("active-navlink");
    if (elements.length > 0) {
      // Parcours le tableau des éléments récupérés
      for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        // Fait quelque chose avec l'élément courant
        element.classList.remove("active-navlink");
      }
    }
    e.target.classList.toggle("active-navlink");
  };

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
                onClick={(e) => toggleActiveLink(e)}
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
                onClick={(e) => toggleActiveLink(e)}
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
                onClick={(e) => toggleActiveLink(e)}
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
                onClick={(e) => toggleActiveLink(e)}
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
