import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/header.css";

export default function Header() {
  return (
    <Navbar expand={"lg"} className="navbar">
      <Container>
        <Navbar.Toggle aria-controls="minhanav" />
        <Navbar.Collapse
          className="justify-content-between"
          id="minhanav"
          style={{
            justifyContent: "space-between",
            width: "100%",
            alignSelf: "stretch",
          }}
        >
          <Navbar.Brand as={Link} to="/">
            <img
              className="logo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5sfvL10Xpe4UlLDrznXtC7PR9hzCwIcv3-g&s"
              alt="Logo"
            />
          </Navbar.Brand>
          <Navbar.Text className="navbartext" as={Link} to="/">
            Inicial
          </Navbar.Text>
          <Navbar.Text className="navbartext" as={Link} to="/html">
            HTML, CSS E JS
          </Navbar.Text>
          <Navbar.Text className="navbartext" as={Link} to="/react">
            React
          </Navbar.Text>
          <Navbar.Text className="navbartext" as={Link} to="/node">
            Node
          </Navbar.Text>
          <Navbar.Text className="navbartext" as={Link} to="/devops">
            DevOps
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
