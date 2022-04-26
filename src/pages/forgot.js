import { useState, useContext } from "react";
import { Container, Button, Card, InputGroup, FormControl } from "react-bootstrap";
import { PersonFill } from "react-bootstrap-icons";
import { AuthContext } from "../context/authcontext";

function Forgot(props) {
    const [username, setUserName] = useState("admin")
	const { setUsernamePassword } = useContext(AuthContext);

	const sendPassword = () => {
        setUsernamePassword("admin","admin")
    }

	return (
		<Container className='d-flex my-5'>
			<Card className='text-center mx-auto bg-light my-5'>
				<Card.Header>
					<h1>Green Fields</h1>
					<h2>Forgot Password</h2>
				</Card.Header>
				<Card.Body className='pt-0'>
					<InputGroup className='my-3'>
						<InputGroup.Text>
							<PersonFill />
						</InputGroup.Text>
						<FormControl className='shadow-none' placeholder='Username' onChange={(ev) => { setUserName(ev.target.value); }} value={username}/>
					</InputGroup>

					<Card.Text className='mt-5'>
						<a href='#login'>Login</a>
						&nbsp;&nbsp;
						<a href='#signup'>Don't have an account?</a>
					</Card.Text>
					<Button variant='primary' size='lg' onClick={sendPassword}>
						Request new Password
					</Button>
				</Card.Body>
			</Card>
		</Container>
	);
}

export default Forgot;
