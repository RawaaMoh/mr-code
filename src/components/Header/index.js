import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import styles from './index.module.scss';


function Header({ name, links }) {
  return (
    <Navbar style={{backgroundColor: 'pink'}} sticky="top" collapseOnSelect expand="lg" bg="blue" variant="blue">
  <Navbar.Brand href="#home">MR CODE</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link  href="#features">LESSONS</Nav.Link>
      <Nav.Link href="#pricing">GAMES</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">MR CODE</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">LESSONS</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">GAMES</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">ABOUT US</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Button className={styles.button}>
      <Nav.Link className={styles.NavLink} href="#deets">SIGN IN</Nav.Link>
      </Button>
      <Button className={styles.button}>
      <Nav.Link  className={styles.NavLink} eventKey={2} href="#memes">
        SIGN UP
      </Nav.Link>
     </Button>
     </Nav>
  </Navbar.Collapse>
</Navbar>

  )
}


export default Header;

