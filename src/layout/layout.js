import { Container, Row, Col, Card } from "react-bootstrap";

const Header = ({ title, subtitle, children }) => {
  return (
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
        {children}
		{title ? <HeaderTitle>{title}</HeaderTitle> : null}
		{subtitle ? <HeaderSubtitle>{subtitle}</HeaderSubtitle> : null}
      </div>
    </Container>
  );
};

export const HeaderTitle = ({children}) => {
	return <h1
	style={{
	  textAlign: "left",
	  fontSize: "30px",
	  color: "grey",
	  marginBottom: "0px",
	}}
  >
	{children}
  </h1>
}

export const HeaderSubtitle = ({children}) => {
	return         <p style={{ textAlign: "left", fontSize: "20px", color: "grey" }}>
	{children}
  </p>
}

function Layout({ children }) {
  return <div>{children}</div>;
}

export const Content = ({ children }) => {
  return <Container className="p-3">
    <Row>
      <Col md={12}>
        <Card>
          {children}
        </Card>
      </Col>
    </Row>
  </Container>;
};

export const ContentHeader = ({children}) => {
	return <Card.Header>{children}</Card.Header>
}
export const ContentBody = ({children}) => {
	return <Card.Body>{children}</Card.Body>
}
export const ContentFooter = ({children}) => {
	return <Card.Footer>{children}</Card.Footer>
}
Content.Header = ContentHeader;
Content.Body = ContentBody;
Content.Footer = ContentFooter;

Layout.Header = Header;
Layout.Title = HeaderTitle;
Layout.Subtitle = HeaderSubtitle;
Layout.Content = Content;

export default Layout;
