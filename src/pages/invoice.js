import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Table, Badge, Button } from "react-bootstrap";
import { Text } from "react-bootstrap-text";
import { Paypal, CreditCard } from "react-bootstrap-icons"

function Dot() {
	return (
		<svg height='15' width='15'>
			<circle cx='5' cy='6' r='3' stroke='blue' stroke-width='3' fill='blue' />
		</svg>
	);
}

function Invoice() {
	const [invoice, setInvoice] = useState({});

	useEffect(() => {
		let exampleInvoice = {
			number: "123123",
			issueDate: "2022-01-77",
			dueDate: "2022-01-31",
			status: "Unpaid",
			to: {
				name: "Alex Doe",
				address: { street: "5 Home Str", city: "London", country: "UK" },
			},
			lineItems: [
				{ name: "Domain Registration", quantity: "2", price: "10", total: "20" },
				{ name: "Web hosting", quantity: "1", price: "30", total: "30" },
				{ name: "Custom Web Development", quantity: "1", price: "170", total: "170" },
			],
			subTotal: "220",
			tax: "10",
			grandTotal: "230",
		};
		setInvoice(exampleInvoice);
	}, []);

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
					<h1 style={{ textAlign: "left", fontSize: "30px", color: "grey", marginBottom: "0px" }}>Invoice</h1>
					<p style={{ textAlign: "left", fontSize: "20px", color: "grey" }}>Invoice #{invoice.number}</p>
				</div>
			</Container>
			<Row className='p-3'>
				{invoice.to ? (
					<Card>
						<Card.Body>
							<Text bold center size='2' color='green'>
								Green Field Web Hosting
							</Text>
							<Text center size='6'>
								Since 2021
							</Text>
						</Card.Body>
						<Card.Body>
							<Row>
								<Col xs={12} md={6}>
									<Text bold size='4' className='mb-1'>
										To:
									</Text>
									<Text bold size='5' className='mb-1 ms-3'>
										{invoice.to.name}
									</Text>
									<p className='ms-3'>
										{invoice.to.address.street}
										<br />
										{invoice.to.address.city}
										<br />
										{invoice.to.address.country}
									</p>
								</Col>
								<Col xs={12} md={2}></Col>
								<Col xs={12} md={4}>
									<Text bold size='4' className='mb-1'>
										Invoice:
									</Text>
									<Text bold className='ms-3 mb-1'>
										<Dot /> # {invoice.number}
									</Text>
									<Text bold className='ms-3 mb-1'>
										<Dot /> Issued: {invoice.issueDate}
									</Text>
									<Text bold className='ms-3 mb-1'>
										<Dot /> Due: {invoice.dueDate}
									</Text>
									<Text bold className='ms-3 mb-1'>
										<Dot /> Status:{" "}
										<Badge pill bg='warning'>
											{invoice.status}
										</Badge>
									</Text>
									-
								</Col>
							</Row>
						</Card.Body>
						<Card.Body></Card.Body>
						<Table striped bordered hover size='sm'>
							<thead>
								<tr>
									<th>#</th>
									<th>Item</th>
									<th>Quantity</th>
									<th>Unit Price</th>
									<th>Total</th>
								</tr>
							</thead>
							<tbody>
								{invoice.lineItems.map((item, idx) => {
									return (
										<tr>
											<td>{idx}</td>
											<td>{item.name}</td>
											<td>{item.quantity}</td>
											<td>
												<p end>${item.price}</p>
											</td>
											<td>
												<p end>${item.total}</p>
											</td>
										</tr>
									);
								})}
							</tbody>
						</Table>
						<Card.Body>
							<Row>
								<Col xs={12} md={{"span":"5","order":"last"}}>
									<Row>
										<Col>Sub total</Col>
										<Col>
											<p end>${invoice.subTotal}</p>
										</Col>
									</Row>
									<Row>
										<Col>Tax</Col>
										<Col>
											<p end>${invoice.tax}</p>
										</Col>
									</Row>
									<Row>
										<Col>Grand total</Col>
										<Col>
											<p end>${invoice.grandTotal}</p>
										</Col>
									</Row>
								</Col>
								<Col md={7} xs={12} >
									<Card>
										<Card.Header>Payment Options</Card.Header>
										<Card.Body>
											<Button><Paypal /></Button>
											<Button className="ms-3"><CreditCard /></Button>
										</Card.Body>
									</Card>
								</Col>
							</Row>
						</Card.Body>
					</Card>
				) : null}
			</Row>
		</div>
	);
}

export default Invoice;
