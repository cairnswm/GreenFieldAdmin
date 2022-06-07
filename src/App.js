import { useState, useContext } from "react";
import "./styles/greenfield.scss";
import { Row, Col } from "react-bootstrap";

import Header from "./components/header";

import PageRouting from "./components/pagerouting";
import AuthRouting from "./components/authrouting";
import Sidebar from "./components/sidebar"
import { AuthContext } from "./context/authcontext"; 

function App() {
	const [show, setShow] = useState(true);
	const toggleShow = () => setShow(!show);
	
	const { authenticated } = useContext(AuthContext);

	return (
			<div className='App' style={{ height: "100%" }}>
				{authenticated ? <>
				<Header menuShow={toggleShow} />
				<div>
					<Row>
						<Sidebar show={show}/>
						<Col xs={12} sm={show ? 8 : 12} xl={show ? 10 : 12} style={{ background: "#EEEEEE", padding: "0" }}>
							<PageRouting />
						</Col>
					</Row>
				</div>
				</> : 
				<>
					<AuthRouting />
				</>}
			</div>
	);
}

export default App;
