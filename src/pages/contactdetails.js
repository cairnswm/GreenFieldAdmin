import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Image, Form, Button, Dropdown } from "react-bootstrap";
import { ThreeDotsVertical } from "react-bootstrap-icons";

function ContactDetails() {

	const [validated, setValidated] = useState(false);
	const [recent, setRecent] = useState([]);

	const handleSubmit = (event) => {
	  const form = event.currentTarget;
	  if (form.checkValidity() === false) {
		event.preventDefault();
		event.stopPropagation();
	  }
  
	  setValidated(true);
	};

	useEffect(() => {
		setRecent([
			{ id: '1', image: '04.jpg', name: 'Floyd Ortiz', lastContact: '2 min ago'},
			{ id: '2', image: '05.jpg', name: 'Luis Vasquez', lastContact: '2hrs ago'},
			{ id: '3', image: '06.jpg', name: 'Duane Mckinney', lastContact: 'yesterday'},
			{ id: '4', image: '07.jpg', name: 'Connie Lambert', lastContact: 'last week'}
		])
	},[])

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
						Contacts
					</h1>
					<p style={{ textAlign: "left", fontSize: "20px", color: "grey" }}>Example contact details</p>
				</div>
			</Container>
			<Row className='p-3 '>			
				<Col lg={4} className="pb-3">
					<Card className="pb-3">
						<Card.Body>
							<Image className='mx-auto d-block' roundedCircle src="images/02.jpg" alt="Contact" />
							<h3>Audrey Hunt</h3>
							<p>Hello, I'm a just a dummy contact in your contact list and this is my presentation text. Have fun!</p>
							<Button>Send message</Button>
						</Card.Body>
					</Card>
					<div  className="pb-3"></div>
					<Card className="pb-3">
						<Card.Body>
							
							<Card.Title>Recent contacts</Card.Title>
							{recent.map(recentContact => {
								return (<Row key={recentContact.id} >
									<Col xs={4}>
										<Image style={{"maxWidth":"60px"}} roundedCircle src={`images/${recentContact.image}`} alt={recentContact.name}/>
									</Col>
									<Col style={{"fontSize":"10px"}}>
										<p className="mt-2 closetext" size="6">{recentContact.name}</p>
										<p>{recentContact.lastContact}</p>
									</Col>
								</Row>)
							})}
							
						</Card.Body>
					</Card>
				</Col>
				<Col md={8} className="pb-3">
					<Card>
						<Card.Body>
							<span style={{"float":"right"}}>
								<Dropdown className="nocaret end" >
								<Dropdown.Toggle as="span">
									<ThreeDotsVertical/>
								</Dropdown.Toggle>

								<Dropdown.Menu>
									<Dropdown.Item href="#/action-1">Send Message</Dropdown.Item>
									<Dropdown.Item href="#/action-2">Share Contact</Dropdown.Item>
									<Dropdown.Item href="#/action-3">Block Contact</Dropdown.Item>
									<Dropdown.Item href="#/action-3">Delete Contact</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
							</span>
							
							<Card.Title>Contact Information</Card.Title>
							<Row>
							<Col xs={2} />
							<Col xs={8}>
								<Form noValidate validated={validated} onSubmit={handleSubmit}>
									
									<Form.Group className="mb-3" controlId="formBasicName">
										<Form.Label>Name</Form.Label>
										<Form.Control required placeholder="Enter name" defaultvalue="Audrey Hunt"/>
									</Form.Group>
									<Form.Group className="mb-3" controlId="formBasicEmail">
										<Form.Label>Email address</Form.Label>
										<Form.Control required type="email" placeholder="Enter email" />
										<Form.Text className="text-muted">
										We'll never share your email with anyone else.
										</Form.Text>
									</Form.Group>
									<Form.Group className="mb-3" controlId="formBasicPhone">
										<Form.Label>Phone</Form.Label>
										<Form.Control required type="tel" placeholder="Enter phone" defaultvalue="+1 785 261 9811"/>
									</Form.Group>
									<Form.Group className="mb-3" controlId="formBasicMobile">
										<Form.Label>Mobile</Form.Label>
										<Form.Control required type="tel" placeholder="Enter mobile number" defaultvalue="+1 785 261 9811"/>
									</Form.Group>
									
									<Form.Group className="mb-3" controlId="formBasicWebSite">
										<Form.Label>Website</Form.Label>
										<Form.Control placeholder="Enter webaddress"/>
									</Form.Group>

									<Form.Group className="mb-3" controlId="formBasicAddress">
										<Form.Label>Address</Form.Label>
										<Form.Control as="textarea" placeholder="Enter webaddress"/>
									</Form.Group>
									<Button variant="primary" type="submit">Submit</Button>
								</Form>
								<Button>Delete this contact</Button>
							</Col>
							</Row>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</div>
	);
}

export default ContactDetails;
