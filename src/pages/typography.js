import { Container, Row, Col } from "react-bootstrap";
import {Text} from "react-bootstrap-text"


function Typography() {

  return (
          <div>
            <Container style={{background:"white",borderBottom:"1px solid lightgrey",borderTop:"1px solid lightgrey",maxWidth:"100%"}} className="p-2">
              <div className="ms-3">
                <h1 style={{textAlign:"left",fontSize:"30px",color:"grey",marginBottom:"0px"}}>Typography</h1>
                <p style={{textAlign:"left", fontSize:"20px",color:"grey"}}>Text colors and styles</p>
              </div>
            </Container>
              <Row className="p-3">
                <Col xs={12} md={6}>
                  <h2>Headings</h2>
                  <hr/>
                  <h1>Heading 1</h1>
                  <Text>Default text without options.</Text>
                  <h2>Heading 2</h2>
                  <Text align="center">align="center" <br/>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.</Text>
                  <h3>Heading 3</h3>
                  <Text align="end">align='end' <br/>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.</Text>
                  <h4>Heading 4</h4>
                  <Text nowrap>nowrap: Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.</Text>
                  <h5>Heading 5</h5>
                  <Text>&lt;Text uppercase&gt;</Text><Text uppercase>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.</Text>
                  <h6>Heading 6</h6>
                  <Text as="span">&lt;Text uppercase  as="span" fs={3} light bg="secondary"&gt;</Text><br/><Text as="span" fs={3} light bg="secondary">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.</Text>
                </Col>
                <Col xs={12} md={6}>

                </Col>
              </Row>
            
          </div>
  );
}

export default Typography;