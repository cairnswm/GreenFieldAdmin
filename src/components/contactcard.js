import { Card, ButtonGroup, Button, Image } from "react-bootstrap";

export function ContactCard(props) {
    const sendMessage = () => {
        console.log("Send Message Clicked")
        if (props.onSendMessage) {
            props.onSendMessage(props.id)
        }
    }
    const view = () => {
        console.log("View clicked")
        if (props.onView) {
            props.onView(props.id)
        }
    }    
    return (<Card>
        <Card.Header>
            <Image width='125' className='mx-auto d-block' roundedCircle src={props.image} />
            <Card.Title>
                <h4>{props.name}</h4>
            </Card.Title>
        </Card.Header>
        <Card.Body>
            <p>
                {props.blurb}
            </p>
        </Card.Body>
        <Card.Footer>
            <ButtonGroup>
                <Button onClick={sendMessage}>Send message</Button>
                <Button onClick={view}>View</Button>
            </ButtonGroup>
        </Card.Footer>
    </Card>)
}