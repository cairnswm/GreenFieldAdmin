import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./final.css";
import { Row, Col } from "react-bootstrap";

import Header from "./components/header";

import PageRouting from "./components/pagerouting";
import Sidebar from "./components/sidebar"

function App() {
	const [show, setShow] = useState(true);
	const toggleShow = () => setShow(!show);

	return (
		<div className='App' style={{ height: "100%" }}>
			<Header menuShow={toggleShow} />
			<div>
				<Row>
					<Sidebar show={show}/>
					<Col xs={12} sm={8} xl={10} style={{ background: "#EEEEEE", padding: "0" }}>
						<PageRouting />
					</Col>
				</Row>
			</div>
		</div>
	);
}

export default App;
