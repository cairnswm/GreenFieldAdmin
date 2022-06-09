import { Container, Row, Col, Alert } from "react-bootstrap";

function Alerts() {
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
            Alerts
          </h1>
          <p style={{ textAlign: "left", fontSize: "20px", color: "grey" }}>
            Alert colors and styles
          </p>
        </div>
      </Container>
      <Row className="p-3">
        <Col>
          {[
            "primary",
            "secondary",
            "success",
            "danger",
            "warning",
            "info",
            "light",
            "dark",
            "highlight"
          ].map((variant) => (
            <Alert key={variant} variant={variant}>
              This is a {variant} alert—check it out!
            </Alert>
          ))}
        </Col>
      </Row>
    </div>
  );
}

export default Alerts;
