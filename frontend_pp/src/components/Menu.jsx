import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Menu({ onCategoryChange, onFilterChange }) {
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg">
      <Container>

        {/* FŐOLDAL */}
        <Navbar.Brand onClick={() => onCategoryChange("ALL")}>
          Pandaplug
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">

          {/* KATEGÓRIÁK */}
          <Nav className="ms-auto">

            <Nav.Link onClick={() => onCategoryChange("shirts")}>Shirts</Nav.Link>
            <Nav.Link onClick={() => onCategoryChange("hoodies")}>Hoodies</Nav.Link>
            <Nav.Link onClick={() => onCategoryChange("pants")}>Pants</Nav.Link>
            <Nav.Link onClick={() => onCategoryChange("shorts")}>Shorts</Nav.Link>

          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default Menu;
