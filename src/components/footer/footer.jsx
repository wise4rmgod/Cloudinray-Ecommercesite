import React from "react";
import { Container, Row, Navbar, Col, Nav } from "react-bootstrap";

function Footer() {
  return (
    <div>
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        style={{ marginTop: "50px", height: "200px", marginLeft: "auto" }}>
        <Container bg="dark" variant="dark">
          <Nav className="justify-content-center">
            <Nav.Link
              href="#link"
              style={{
                fontSize: "25px",
              }}>
              &copy; Cloudcommerce
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
export default Footer;
