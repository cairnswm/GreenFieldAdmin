import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ContactCard } from "../components/contactcard"

function Contacts() {

	const [contacts, setContacts] = useState([]);
	
	useEffect(() => {
		setContacts([
			{ id: "1", image: '02.jpg', name: 'Audrey Blake', blurb: `Hello, I'm a just a dummy contact in your contact list and this is my presentation text. Have fun!`},
			{ id: "2", image: '05.jpg', name: 'Luis Vasquez', blurb: `Hello, I'm a just a dummy contact in your contact list and this is my presentation text. Have fun!`},
			{ id: "3", image: '06.jpg', name: 'Duane Mckinney', blurb: `Hello, I'm a just a dummy contact in your contact list and this is my presentation text. Have fun!`},
			{ id: "4", image: '07.jpg', name: 'Connie Lambert', blurb: `Hello, I'm a just a dummy contact in your contact list and this is my presentation text. Have fun!`},
			{ id: "5", image: '04.jpg', name: 'Floyd Ortiz', blurb: `Hello, I'm a just a dummy contact in your contact list and this is my presentation text. Have fun!`},
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
					<p style={{ textAlign: "left", fontSize: "20px", color: "grey" }}>Example contact cards</p>
				</div>
			</Container> 
			<Row className='p-3'>
				{contacts.map(contact => {
					return (<Col key={contact.id} md='4' className="mb-3">
						<ContactCard id={contact.id} name={contact.name} blurb={contact.blurb} image={`images/${contact.image}`}/>
					</Col>)
				})}
				
			</Row>
		</div>
	);
}

export default Contacts;
