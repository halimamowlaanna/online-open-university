import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'

const Header = () => {
    
    return (
        <div>
            
        <Navbar bg="dark" variant="dark">
        <Container>
        <Nav className="me-auto" >  
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/services">Services</Nav.Link>
        <Nav.Link href="/registration">Registration</Nav.Link>
        </Nav>
        </Container>
        </Navbar>

        </div>
    );
};

export default Header;