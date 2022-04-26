import { useState, useContext } from "react";
import { Container, Button, Card, InputGroup, FormControl } from "react-bootstrap";
import { KeyFill, PersonFill, Eye, EyeSlash, Envelope } from "react-bootstrap-icons";
import { AuthContext } from "../context/authcontext";

function Signup(props) {
	const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("cairnswm@gmail.com")
    const [username, setUserName] = useState("admin")
    const [password, setPassword] = useState("admin")
    const [confirmPassword, setConfirmPassword] = useState("admin")
	const { signup } = useContext(AuthContext);

    const submit = () => {
        signup({username, password, email, confirmPassword});
    }

	const onMouseDown = () => {
		setShowPassword(true);
	};

	const onMouseUp = () => {
		setShowPassword(false);
	};

	return (
		<Container className='d-flex my-5'>
			<Card className='text-center mx-auto bg-light my-5'>
				<Card.Header>
					<h1>Green Fields</h1>
					<h2>Register</h2>
				</Card.Header>
				<Card.Body className='pt-0'>
					<InputGroup className='my-3'>
						<InputGroup.Text>
							<PersonFill />
						</InputGroup.Text>
						<FormControl className='shadow-none' placeholder='Username' onChange={(ev) => { setUserName(ev.target.value); }} value={username}/>
					</InputGroup>

                    <InputGroup className='my-3'>
						<InputGroup.Text>
							<Envelope />
						</InputGroup.Text>
						<FormControl className='shadow-none' placeholder='eMail' onChange={(ev) => { setEmail(ev.target.value); }} value={email}/>
					</InputGroup>

					<InputGroup className='justify-content-end'>
						<InputGroup.Text>
							<KeyFill />
						</InputGroup.Text>
						<Button
							variant='white'
							className='my-1 mr-1 px-0 btn-sm bg-white shadow-none position-absolute'
							style={{ zIndex: 4 }}
							onMouseDown={onMouseDown}
							onMouseUp={onMouseUp}
							onMouseLeave={onMouseUp}
							onTouchStart={onMouseDown}
							onTouchEnd={onMouseUp}>
							{showPassword ? <EyeSlash className='me-2' /> : <Eye className='me-2' />}
						</Button>
						<FormControl
							type={showPassword ? "text" : "password"}
							className='shadow-none pr-4'
							placeholder='Password'
                            value={password}
							onChange={(ev) => { setPassword(ev.target.value); }}
						/>
					</InputGroup>
                    <InputGroup className='justify-content-end'>
						<InputGroup.Text>
							<KeyFill />
						</InputGroup.Text>
						<FormControl
							type={showPassword ? "text" : "password"}
							className='shadow-none pr-4'
							placeholder='Password'
                            value={confirmPassword}
							onChange={(ev) => { setConfirmPassword(ev.target.value); }}
						/>
					</InputGroup>

					<Card.Text className='mt-5'>
						<a href='#forgot'>Forgot Password?</a>
						&nbsp;&nbsp;
						<a href='#login'>Login</a>
					</Card.Text>
					<Button variant='primary' size='lg' onClick={submit}>
						Register
					</Button>
				</Card.Body>
			</Card>
		</Container>
	);
}

export default Signup;
