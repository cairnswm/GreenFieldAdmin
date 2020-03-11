import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import UserContext from '../userContext.js';

class ProfileDialog extends React.Component {
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
    //this.context.name = "Yolande";
    return (
      <div className="profileOverlay" >
        <div className="profileDialog">
          <span className="profileDialogHeader">Profile </span>
          <FontAwesomeIcon
            icon={faTimes}
            onClick={this.props.onClose}
            className="closeModal"
          />
          <hr></hr>
          Name: {this.context.name}
        </div>
      </div>
    );
  }
}

export default ProfileDialog;
