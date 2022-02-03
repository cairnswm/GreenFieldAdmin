import { useState, useContext } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./final.css";
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
						<Col xs={12} sm={8} xl={10} style={{ background: "#EEEEEE", padding: "0" }}>
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
