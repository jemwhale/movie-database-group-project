import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

function Navigation() {
  return (
    <Navbar sticky='top' bg='light' variant='light' className="mb-4">
      <Container>
        <Navbar.Brand>
          Movies
        </Navbar.Brand>
        <Nav className='me-auto'>
          <Nav.Link href='/'>All Movies</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export { Navigation };