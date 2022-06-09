import { useState, useContext } from "react";
import {
  Container,
  Button,
  Card,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { KeyFill, PersonFill, Eye, EyeSlash } from "react-bootstrap-icons";
import { AuthContext } from "../context/authcontext";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUserName] = useState("admin");
  const [password, setPassword] = useState("admin");
  const { setUsernamePassword } = useContext(AuthContext);

  const login = () => {
    setUsernamePassword(username, password);
  };

  const onMouseDown = () => {
    setShowPassword(true);
  };

  const onMouseUp = () => {
    setShowPassword(false);
  };

  return (
    <Container className="d-flex my-5">
      <Card className="text-center mx-auto bg-light my-5">
        <Card.Header>
          <h1>Green Fields</h1>
          <h2>Login</h2>
        </Card.Header>
        <Card.Body className="pt-0">
          <InputGroup className="my-3">
            <InputGroup.Text>
              <PersonFill />
            </InputGroup.Text>
            <FormControl
              className="shadow-none"
              placeholder="Username"
              aria-label="user"
              onChange={(ev) => {
                setUserName(ev.target.value);
              }}
              value={username}
            />
          </InputGroup>

          <InputGroup className="justify-content-end">
            <InputGroup.Text>
              <KeyFill />
            </InputGroup.Text>
            <Button
              variant="white"
              className="my-1 mr-1 px-0 btn-sm bg-white shadow-none position-absolute"
              style={{ zIndex: 4 }}
              onMouseDown={onMouseDown}
              onMouseUp={onMouseUp}
              onMouseLeave={onMouseUp}
              onTouchStart={onMouseDown}
              onTouchEnd={onMouseUp}
            >
              {showPassword ? (
                <EyeSlash aria-label="Show Password" className="me-2" />
              ) : (
                <Eye aria-label="Show Password" className="me-2" />
              )}
            </Button>
            <FormControl
              type={showPassword ? "text" : "password"}
              className="shadow-none pr-4"
              placeholder="Password"
              aria-label="Password"
              value={password}
              onChange={(ev) => {
                setPassword(ev.target.value);
              }}
            />
          </InputGroup>

          <Card.Text className="mt-5">
            <a href="#forgot">Forgot Password?</a>
            &nbsp;&nbsp;
            <a href="#signup">Don't have an account?</a>
          </Card.Text>
          <Button variant="primary" size="lg" onClick={login}>
            Login
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Login;
