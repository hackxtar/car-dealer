import React from "react";
import {
  Container,
  Nav,
  Navbar as Navigation,
  NavDropdown,
} from "react-bootstrap";

const Navbar = () => {
  return (
    <>
      <Navigation bg="dark" expand="lg" variant="dark">
        <Container>
          <Navigation.Brand href="#home">Car Delear</Navigation.Brand>
          <Navigation.Toggle aria-controls="basic-Navigation-nav" />
          <Navigation.Collapse id="basic-Navigation-nav">
            <Nav className="me-auto text-uppercase">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navigation.Collapse>
        </Container>
      </Navigation>
    </>
  );
};

export default Navbar;
