import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import SearchBar from "./SearchBar";

function Menu({ onCategoryChange, onFilterChange, onSearch }) {
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg">
      <Container>
        {/* FŐOLDAL */}
        <Navbar.Brand
          style={{ cursor: "pointer" }}
          onClick={() => {
            onCategoryChange("ALL");
            if (typeof onSearch === "function") onSearch(""); // kereső mező ürítése
          }}
        >
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
          {/* Kereső a navbar jobb oldalán */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
