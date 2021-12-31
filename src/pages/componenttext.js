import { Container } from "react-bootstrap";
import { Text } from "react-bootstrap-text";

function ComponentText() {
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
					<h1 style={{ textAlign: "left", fontSize: "30px", color: "grey", marginBottom: "0px" }}>
						Component : Text
					</h1>
					<p style={{ textAlign: "left", fontSize: "20px", color: "grey" }}>Format your paragraphs</p>
				</div>
			</Container>
			<Container className='p-3'>
				<h2>Text Alignment</h2>
        <a href="https://www.npmjs.com/package/react-bootstrap-text">https://www.npmjs.com/package/react-bootstrap-text</a>
				<Text>Easily realign text to components with text alignment classes. For start, end, and center alignment,
				responsive classes are available that use the same viewport width breakpoints as the grid system.</Text>
				<Text start>Start aligned text on all viewport sizes.</Text>
				<Text center>Center aligned text on all viewport sizes.</Text>
				<Text end>End aligned text on all viewport sizes.</Text>
				<Text sm='end'>End aligned text on viewports sized SM (small) or wider.</Text>
				<Text md='end'>End aligned text on viewports sized MD (medium) or wider.</Text>
				<Text lg='end'>End aligned text on viewports sized LG (large) or wider.</Text>
				<Text xl='end'>End aligned text on viewports sized XL (extra-large) or wider.</Text>
				<Container as='pre' className='bg-dark text-white'>
					{`
    <Text start>Start aligned text on all viewport sizes.</Text>    
    <Text center>Center aligned text on all viewport sizes.</Text>
    <Text end>End aligned text on all viewport sizes.</Text>

    <Text sm="end">End aligned text on viewports sized SM (small) or wider.</Text>
    <Text md="end">End aligned text on viewports sized MD (medium) or wider.</Text>
    <Text lg="end">End aligned text on viewports sized LG (large) or wider.</Text>
    <Text xl="end">End aligned text on viewports sized XL (extra-large) or wider.</Text>
    `}
				</Container>
			</Container>
		</div>
	);
}

export default ComponentText;
