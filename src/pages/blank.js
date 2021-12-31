import { Container, Row, Col, Card } from "react-bootstrap";

function BlankPage() {
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
					<h1 style={{ textAlign: "left", fontSize: "30px", color: "grey", marginBottom: "0px" }}>Blank</h1>
					<p style={{ textAlign: "left", fontSize: "20px", color: "grey" }}>Build your masterpeiece</p>
				</div>
			</Container>
			<Container className='p-3'>
				<Row>
					<Col md={12}>
						<Card>
							<Card.Header>Page Sub Heading</Card.Header>
							<Card.Body>Page Body</Card.Body>
							<Card.Footer>Footer</Card.Footer>
						</Card>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default BlankPage;
