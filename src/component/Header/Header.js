import React from 'react';
import { Container, Form, FormControl, Nav, Navbar, NavDropdown ,Button} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return(
    <Navbar bg="dark" variant={'dark'} expand="lg">
  <Container fluid>
    
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link as={NavLink} to={'/home'}>Home</Nav.Link>
        <Nav.Link as={NavLink} to={'/about'}>About</Nav.Link>
        <Nav.Link as={NavLink} to={'/services'}>Department</Nav.Link>
        <Nav.Link as={NavLink} to={'/registration'}>Registration</Nav.Link>
        
        <NavDropdown title="Faculty" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">CSE</NavDropdown.Item>
          <NavDropdown.Item href="#action4">EEE</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            More
          </NavDropdown.Item>
        </NavDropdown>
        
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="warning">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
    );
};


export default Header;