import { useState } from "react"
import { Collapse, Container, Col, Nav } from "react-bootstrap";
import { PuzzleFill, Lightbulb, GraphUp, FileEarmark, FileEarmarkFill, BookFill, People, Type, FileEarmarkPersonFill, CloudSunFill, CashCoin } from "react-bootstrap-icons";

function Sidebar(props) {
	const [openPages, setOpenPages] = useState(false)
	const togglePages = () => {
		setOpenPages(!openPages)
	}	
	const [openComponents, setOpenComponents] = useState(false)
	const toggleComponents = () => {
		setOpenComponents(!openComponents)
	}
	return (
		<Collapse in={props.show} style={{ paddingRight: "0px" }}>
			<Col xs={12} sm={4} xl={2} style={{ height: "100%" }}>
				<Container
					style={{
						paddingLeft: "5px",
						paddingRight: "0px",
						borderRight: "1px solid lightgrey",
						height: "100%",
						width: "100%",
					}}
					fluid>
					<Nav defaultActiveKey='#home' className='flex-column' style={{ textAlign: "left" }}>
						<Nav.Link href='#home'><GraphUp /> Dashboard</Nav.Link>
						<Nav.Link href='#blank'><FileEarmark /> Blank</Nav.Link>
						<Nav.Item className="menuLink" onClick={togglePages}><FileEarmarkFill /> Pages</Nav.Item>
						<Collapse in={openPages}>
							<div className="menuLinkChild">
								<Nav.Link className="menuLinkChild" href='#contacts'><People /> Contacts</Nav.Link>
								<Nav.Link className="menuLinkChild" href='#contactdetails'><FileEarmarkPersonFill /> Contact Details</Nav.Link>
								<Nav.Link className="menuLinkChild" href='#blog'><BookFill /> Blog</Nav.Link>
								<Nav.Link className="menuLinkChild" href='#weather'><CloudSunFill /> Weather</Nav.Link>
								<Nav.Link className="menuLinkChild" href='#invoice'><CashCoin /> Invoice</Nav.Link>
							</div>
						</Collapse>
						<Nav.Item className="menuLink" onClick={toggleComponents}><PuzzleFill /> Components</Nav.Item>
						<Collapse in={openComponents}>
							<div className="menuLinkChild">
								<Nav.Link className="menuLinkChild" href='#typography'><Type /> Typography</Nav.Link>
								<Nav.Link className="menuLinkChild" href='#component/text'><Lightbulb /> Text</Nav.Link>
							</div>
						</Collapse>
					</Nav>
				</Container>
			</Col>
		</Collapse>
	);
}

export default Sidebar;
