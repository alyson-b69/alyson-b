import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaHome } from "react-icons/fa";

const NavBar = () => {
  return (
    <Navbar id="ab-nav" bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#intro">
          <FaHome fontSize="1.5em" className="mr-2 mb-2" />
          Alyson B.
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#intro">Accueil</Nav.Link>
            <Nav.Link href="#about">à propos</Nav.Link>
            <Nav.Link href="#competences">Compétences</Nav.Link>
            <Nav.Link href="#experiences">expériences</Nav.Link>
            <Nav.Link href="#education">éducation</Nav.Link>
            <Nav.Link href="#portefolio">Portefolio</Nav.Link>
            <Nav.Link href="#cv">CV</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
