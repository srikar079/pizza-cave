import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';
import { Image } from 'react-bootstrap';
const NavBar= () => {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" bg='light' variant='light'>
      <Container>
        <Navbar.Brand>
            <Image src="images/logo.png" style={{width:'100px',height:'100px'}} className='ml-0'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to='/login'>
                <Nav.Link>Login</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/cart'>
                <Nav.Link>Cart</Nav.Link>
            </LinkContainer>
           
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default NavBar;