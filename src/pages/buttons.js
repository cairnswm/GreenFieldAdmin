import { Container, Row, Col, Button } from "react-bootstrap";
import { FileEarmarkTextFill, Printer } from "react-bootstrap-icons";


function Buttons() {
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
            Button
          </h1>
          <p style={{ textAlign: "left", fontSize: "20px", color: "grey" }}>
            Buttons colors and styles
          </p>
        </div>
      </Container>
      <Row className="p-3">
        <Col>
          <Button variant="primary">Primary</Button>{" "}
          <Button variant="secondary">Secondary</Button>{" "}
          <Button variant="success">Success</Button>{" "}
          <Button variant="warning">Warning</Button>{" "}
          <Button variant="danger">Danger</Button>{" "}
          <Button variant="info">Info</Button>{" "}
          <Button variant="light">Light</Button>{" "}
          <Button variant="dark">Dark</Button>{" "}
          <Button variant="link">Link</Button>
          <Button variant="highlight">Custom - Highlight</Button>
          <br />
          <br />
          <Button variant="outline-primary">Outline Primary</Button>{" "}
          <Button variant="outline-secondary">Outline Secondary</Button>{" "}
          <Button variant="outline-success">Outline Success</Button>{" "}
          <Button variant="outline-warning">Outline Warning</Button>{" "}
          <Button variant="outline-danger">Outline Danger</Button>{" "}
          <Button variant="outline-info">Outline Info</Button>{" "}
          <Button variant="outline-light">Outline Light</Button>{" "}
          <Button variant="outline-dark">Outline Dark</Button>{" "}
          <Button variant="outline-link">Outline Link</Button>{" "}
          <Button variant="outline-highlight">Outline Highlight</Button>{" "}
          <br/><br/>

          <Button variant="outline-primary"><FileEarmarkTextFill /></Button>{" "}
          <Button variant="outline-primary"><Printer /></Button>{" "}
        </Col>
      </Row>
    </div>
  );
}

export default Buttons;
