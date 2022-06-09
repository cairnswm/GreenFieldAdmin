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
                  <h2>react-bootstrap-text</h2>
                  <hr/>
                  <Text as="span">&lt;Text as="h1"&gt;</Text><br/>
                  <Text as="h1">Heading 1 using as="h1"</Text>
                  <br/>
                  <Text as="span">&lt;Text&gt;</Text><br/>
                  <Text>Default text without options.</Text>
                  
                  <br/>
                  <Text as="span">&lt;Text align="center"&gt;</Text><br/>
                  <Text align="center">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.</Text>
                  
                  <br/>
                  <Text as="span">&lt;Text align="end"&gt;</Text><br/>
                  <Text align="end">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.</Text>
                  
                  <br/>
                  <Text as="span">&lt;Text nowrap&gt;</Text><br/>
                  <Text nowrap>nowrap: Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.</Text>
                  
                  <br/>
                  <Text>&lt;Text uppercase&gt;</Text>
                  <Text uppercase>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.</Text>
                  
                  <br/>
                  <Text as="span">&lt;Text uppercase  as="span" fs={3} light bg="secondary"&gt;</Text><br/>
                  <Text as="span" fs={3} light bg="secondary">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.</Text>
                  <br/>
                  <br/>
                  <Text as="span">&lt;Text fs={3} text="primary"&gt;</Text><br/>
                  <Text fs={3} text="primary">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.</Text>
                </Col>
                <Col xs={12} md={6}>

                </Col>
              </Row>
            
          </div>
  );
}

export default Typography;