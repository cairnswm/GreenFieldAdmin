import {
	Button,
	Badge,
	Nav,
	Navbar,
	Container,
	Dropdown,
	Image,
	DropdownButton,
} from "react-bootstrap";
import { AlarmFill, AspectRatioFill, WindowSidebar } from "react-bootstrap-icons";

function Header(props) {
	return (
		<Navbar collapseOnSelect expand='lg' bg='primary' variant='dark'>
			<Container style={{ maxWidth: "100%", paddingLeft: "1rem",paddingRight: "1rem" }}> 
				<Button aria-label='open menu' onClick={props.menuShow}>
					<WindowSidebar />
				</Button>
				<Navbar.Brand style={{ paddingLeft: "20px" }} href='#home'>
					Green Field Admin
				</Navbar.Brand>
				<span> </span>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='me-auto'></Nav>
					<Nav>
						<DropdownButton
							align='end'
							className="nocaret"
							title={
								<span>
									<AlarmFill />
									<span
										style={{
											position: "relative",
											left: "-5px",
											top: "-5px",
											fontSize: "12px",
											verticalAlign: "top",
										}}>
										<Badge bg='danger' pill>
											9
										</Badge>
									</span>
								</span>
							}
							id='dropdown-menu-align-end'>
							<Dropdown.Item href="#notification?id=1">Notification 1</Dropdown.Item>
							<Dropdown.Item eventKey='2'>Notification 2</Dropdown.Item>
							<Dropdown.Item eventKey='3'>Notification 3</Dropdown.Item>
							<Dropdown.Divider />
							<Dropdown.Item eventKey='4'>Todo 1</Dropdown.Item>
						</DropdownButton>
             	 <DropdownButton
                align='end'
				className="nocaret"
                title={
                  <AspectRatioFill /> 
                }
                id='dropdown-menu-align-end'>
                <Dropdown.Item eventKey='1'>Action</Dropdown.Item>
                <Dropdown.Item eventKey='2'>Another action</Dropdown.Item>
                <Dropdown.Item eventKey='3'>Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey='4'>Separated link</Dropdown.Item>
              </DropdownButton>							
              <DropdownButton
                align='end'
				className="nocaret"
                title={
                  <Image src='./images/WC2.png' width='40px' roundedCircle />
                }
                id='dropdown-menu-align-end'>
                <Dropdown.Item href="#profile">Profile</Dropdown.Item>
                <Dropdown.Item href="#settings">Settings</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#logout">Logout</Dropdown.Item>
              </DropdownButton>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Header;
