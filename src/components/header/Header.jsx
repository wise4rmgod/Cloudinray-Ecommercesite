import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

function Header() {
  return (
    <div>
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        style={{ marginBottom: "40px" }}>
        <Container>
          <Navbar.Brand href="/">Cloudcommerce</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              {/* <Nav.Link href="admin" style={{ color: "#fff!important" }}>
                About
              </Nav.Link> */}
              <Nav.Link href="superadmin" style={{ color: "#fff!important" }}>
                Super Admin
              </Nav.Link>
            </Nav>

            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-light">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
export default Header;
