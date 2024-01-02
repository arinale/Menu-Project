import React from "react";
import {
  Container,
  Row,
  Navbar,
  Nav,
  Form,
  Button,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
const NavBar = () => {
  return (
    <Row>
      <Navbar
        bg="dark"
        expand="lg"
        variant="dark"
        className="bg-body-tertiary mb-3"
      >
        <Container fluid>
          <Navbar.Brand href="#">
            <div className="brand-color">עולם הטעמים</div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand`}
            aria-labelledby={`offcanvasNavbarLabel-expand`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3"></Nav>
              <Form className="d-flex">
                <Form.Control
                  type="text"
                  placeholder="חפש.."
                  className="mx-2"
                />
                <Button className="btn-search">חיפוש</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </Row>
  );
};

export default NavBar;
