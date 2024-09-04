import React from "react";
import {Navbar,Nav,Container} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import {MdLocalOffer} from 'react-icons/md'
import{About} from './About';
const TopBar=()=>{
  return(
    <>
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <h6  className="text-light">
          <MdLocalOffer className="text-warning"/>
         &nbsp; &nbsp; Free Home Delivery on order above 459</h6>
        <Nav className="ms-auto">
          <LinkContainer to='/' activeClassName>
          <Nav.Link>Home</Nav.Link>
        </LinkContainer>
        <LinkContainer to='/about' activeClassName>
          <Nav.Link>About</Nav.Link>
        </LinkContainer>
        <LinkContainer to='/contact' activeClassName>
          <Nav.Link>Contact Us</Nav.Link >
        </LinkContainer>
        <LinkContainer to='/policy' activeClassName>
          <Nav.Link>terms and policy</Nav.Link>
        </LinkContainer>
        </Nav>
      </Container>
    </Navbar>
    </>
  )
}

export default TopBar;