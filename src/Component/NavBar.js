import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
const NavBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" className="myNavbar">
        <Container>
          <Navbar.Brand href="#home">checkpoint API </Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="/" className="navLink" activeClassName="selectedLink">
              Home
            </NavLink>
            <NavLink
              to="/ListOfUsers"
              className="navLink"
              activeClassName="selectedLink"
            >
              listOfUsers
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
