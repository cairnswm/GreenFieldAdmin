import { useState } from "react"
import { Collapse, Container, Col, Nav } from "react-bootstrap";
import { GraphUp, FileEarmark, FileEarmarkFill, BookFill, People, FileEarmarkPersonFill, CloudSunFill, CashCoin, PuzzleFill, MenuButton, 
	TypeBold, ExclamationCircle, ArrowDownRightSquare, Grid3x2, ClockHistory } from "react-bootstrap-icons";

function Sidebar(props) {
	const [openPages, setOpenPages] = useState(false)
	const [openComponents, setOpenComponents] = useState(false)
	const togglePages = () => {
		setOpenPages(!openPages)
	}	
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
								<Nav.Link className="menuLinkChild" href='#timeline'><ClockHistory /> Timeline</Nav.Link>
							</div>
						</Collapse>
						<Nav.Item className="menuLink" onClick={toggleComponents}><PuzzleFill /> Components</Nav.Item>
						<Collapse in={openComponents}>
							<div className="menuLinkChild">
								<Nav.Link className="menuLinkChild" href='#buttons'><MenuButton /> Buttons</Nav.Link>
								<Nav.Link className="menuLinkChild" href='#typography'><TypeBold /> Typography</Nav.Link>
								<Nav.Link className="menuLinkChild" href='#alerts'><ExclamationCircle /> Alerts</Nav.Link>
								<Nav.Link className="menuLinkChild" href='#nav'><ArrowDownRightSquare /> Navbar</Nav.Link>
								<Nav.Link className="menuLinkChild" href='#table'><Grid3x2 /> Table</Nav.Link>
							</div>
						</Collapse>
					</Nav>
				</Container>
			</Col>
		</Collapse>
	);
}

export default Sidebar;
