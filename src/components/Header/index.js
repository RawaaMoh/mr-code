import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import styles from './index.module.scss';


function Header({ name, links }) {
  return (
    <Navbar id={Navbar} className={styles.Navbar} sticky="top" collapseOnSelect expand="lg" bg="blue" variant="blue" >
  <Navbar.Brand href="#Navbar">MR CODE</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link  href="#lessons">LESSONS</Nav.Link>
      <Nav.Link href="#games">GAMES</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#Navbar">MR CODE</NavDropdown.Item>
        <NavDropdown.Item href="#lessons">LESSONS</NavDropdown.Item>
        <NavDropdown.Item href="#games">GAMES</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#footer">ABOUT US</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>

  )
}


export default Header;

