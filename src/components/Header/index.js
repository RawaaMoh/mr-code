import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import styles from './index.module.scss';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';


function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 4),
  },
}));

function Header({ name, links }) {

  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  return (
    <div>
      <Navbar style={{ backgroundColor: 'pink' }} sticky="top" collapseOnSelect expand="lg" bg="blue" variant="blue">
        <Navbar.Brand href="#home">MR CODE</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">LESSONS</Nav.Link>
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
            <Button onClick={handleOpen} className={styles.button}>
              <Nav.Link className={styles.NavLink} href="#signin">
                SIGN IN
              </Nav.Link>
            </Button>
            <Button onClick={handleOpen} className={styles.button}>
              <Nav.Link className={styles.NavLink} eventKey={2} href="#signup">
                SIGN UP
         </Nav.Link>
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">Text in a modal</h2>
          <p id="simple-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
        </div>
      </Modal>
    </div>
  )

}
export default Header;
  // export default SimpleModal;

