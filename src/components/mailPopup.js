import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import UserContext from '../userContext.js';

class MailPopup extends React.Component {
  constructor(props) {
    super(props);

    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  handleKeyPress(event) {
      console.log(event);
    if (event.key === "ESC") {
      this.props.onClose();
    }
  }

  static contextType = UserContext;
  render() {
    return (
      <div className="profileOverlay" >
        <div className="profileDialog">
          <span className="profileDialogHeader">Messages </span>
          <FontAwesomeIcon
            icon={faTimes}
            onClick={this.props.onClose}
            className="closeModal"
          />
          <hr></hr>
          From: {this.context.name}<br/>
          Subject: "See you tomorrow"
        </div>
      </div>
    );
  }
}

export default MailPopup;
