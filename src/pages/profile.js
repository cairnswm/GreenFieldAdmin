import {  useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

function Profile(props) {

	const [validated, setValidated] = useState(false);

	const handleSubmit = (event) => {
	  const form = event.currentTarget;
	  if (form.checkValidity() === false) {
		event.preventDefault();
		event.stopPropagation();
	  }
  
	  setValidated(true);
	};

	return (
		<div>
			<Container
				style={{
					background: "white",
					borderBottom: "1px solid lightgrey",
					borderTop: "1px solid lightgrey",
					maxWidth: "100%",
				}}
				className='p-2'>
				<div className='ms-3'>
					<h1 style={{ textAlign: "left", fontSize: "30px", color: "grey", marginBottom: "0px" }}>
						Profile
					</h1>
					<p style={{ textAlign: "left", fontSize: "20px", color: "grey" }}>User profile page</p>
				</div>
			</Container>
			<Row className='p-3'>			
				<Col md={4}>
					
				</Col>
				<Col md={8}>
					
					<Form noValidate validated={validated} onSubmit={handleSubmit}>
					</Form>
				</Col>
			</Row>
		</div>
	);
}

export default Profile;
