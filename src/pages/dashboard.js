import { Container } from "react-bootstrap";


function Dashboard() {

  return (
          <div>
            <Container style={{background:"white",borderBottom:"1px solid lightgrey",borderTop:"1px solid lightgrey",maxWidth:"100%"}} className="p-2">
              <div className="ms-3">
                <h1 style={{textAlign:"left",fontSize:"30px",color:"grey",marginBottom:"0px"}}>Dashboard</h1>
                <p style={{textAlign:"left", fontSize:"20px",color:"grey"}}>Welcome to React-Bootstrap-Admin</p>
              </div>
            </Container>
            <Container  className="p-3">Body
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            </Container>
            
          </div>
  );
}

export default Dashboard;
