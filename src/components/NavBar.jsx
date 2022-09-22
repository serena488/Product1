import React from "react";

import { NavLink } from "react-router-dom";

import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/truck.jpeg";
import { useState } from "react";
// import navIcon1 from '../assets/img/nav-icon1.svg';
// import navIcon2 from '../assets/img/nav-icon2.svg';
// import navIcon3 from '../assets/img/nav-icon3.svg';
// import { HashLink } from 'react-router-hash-link';

export const NavBar = () => {
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };
  const [activeLink, setActiveLink] = useState("home");

  return (
    <Navbar expand="md" className="mynav py-2">
      <Container className="sticky-top">
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto sticky-top">
            <NavLink
              to="/"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </NavLink>

            <NavLink
              id="aboutus"
              to="/pricing"
              className={
                activeLink === "aboutus" ? "active navbar-link" : "navbar-link"
              }
              onClick={(aboutus) => onUpdateActiveLink("aboutus")}
            >
              About
            </NavLink>
            <NavLink
              id="pricing"
              to="/pricing#pricing"
              className={
                activeLink === "pricing" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("pricing")}
            >
              Pricing
            </NavLink>
            <NavLink
              to="/agreement"
              className={
                activeLink === "agreement"
                  ? "active navbar-link"
                  : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("agreement")}
            >
              Agreement
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
