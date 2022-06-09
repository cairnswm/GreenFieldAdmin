import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";

function NavBars() {
  return (
    <div>
      <Container
        style={{
          background: "white",
          borderBottom: "1px solid lightgrey",
          borderTop: "1px solid lightgrey",
          maxWidth: "100%",
        }}
        className="p-2"
      >
        <div className="ms-3">
          <h1
            style={{
              textAlign: "left",
              fontSize: "30px",
              color: "grey",
              marginBottom: "0px",
            }}
          >
            Navbars
          </h1>
          <p style={{ textAlign: "left", fontSize: "20px", color: "grey" }}>
            Different Navbar colors and styles
          </p>
        </div>
      </Container>
      <Row className="p-3">
        <Col>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="#home">Navbar</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          <br />
          <Navbar bg="primary" variant="dark">
            <Container>
              <Navbar.Brand href="#home">Navbar</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
              </Nav>
            </Container>
          </Navbar>

          <br />
          <Navbar bg="secondary" variant="dark">
            <Container>
              <Navbar.Brand href="#home">Navbar</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
              </Nav>
            </Container>
          </Navbar>

          <br />
          <Navbar bg="light" variant="light">
            <Container>
              <Navbar.Brand href="#home">Navbar</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
              </Nav>
            </Container>
          </Navbar>

          <br />
          <Navbar bg="highlight" variant="dark">
            <Container>
              <Navbar.Brand href="#home">Custom</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
              </Nav>
            </Container>
          </Navbar> 
        </Col>
      </Row>
    </div>
  );
}

export default NavBars;
