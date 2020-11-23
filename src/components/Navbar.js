import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaHome } from "react-icons/fa";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect id="ab-nav" bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#intro">
          <FaHome fontSize="1.5em" className="mr-2 mb-2" />
          Alyson B.
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#about">à propos</Nav.Link>
            <Nav.Link href="#competences">Compétences</Nav.Link>
            <Nav.Link href="#experiences">Expériences</Nav.Link>
            <Nav.Link href="#formation">Formations</Nav.Link>
            <Nav.Link href="#portefolio">Portefolio</Nav.Link>
            <Nav.Link href="#cv">CV & CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
