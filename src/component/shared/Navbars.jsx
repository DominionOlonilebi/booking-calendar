
import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navbars = () => {
  return (
    <>
      <Navbar expand="lg" className="fixed-top bg-light py-3">
        <Container className="header">
          <Navbar.Brand className="brand">
            <span className="logo fw-bold">Royals</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto offset-6 navs " variant="underline">
              <a to="/" className="nav-link">Home</a>
              <a to="#about" className="nav-link  mx-2 text-dark">
                About
              </a>
              <a to="#service" className="nav-link mx-2 text-dark">
                Services
              </a>

              <a to="#contact" className="nav-link mx-2 text-dark">
                Contact
              </a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbars;
