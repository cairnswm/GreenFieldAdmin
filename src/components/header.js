import React from 'react';
import { faBars, faUserAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import ProfileDialog from "./profile";
import MailPopup from "./mailPopup";
import Icon from "./icon/icon";

import UserContext from '../userContext.js';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {profileShow: false, mailShow: false};

    this.toggleProfile = this.toggleProfile.bind(this);
    this.toggleMail = this.toggleMail.bind(this);
  }    

  toggleProfile() {
    this.setState(state => ({
      profileShow: !state.profileShow
    }));
  }
  toggleMail() {
    this.setState(state => ({
      mailShow: !state.mailShow
    }));
  }  

  static contextType = UserContext;
    render() {
        return (<header>
            <div className="header">
              <Icon icon={faBars} onClick={this.props.onToggleMenu} className="menuBars" />
              <span className="headerTitle">{this.props.title}</span>              
              <Icon icon={faUserAlt} onClick={this.toggleProfile} className="userProfile" />
              <Icon icon={faEnvelope} onClick={this.toggleMail} className="userMail" count={10}/>   
            </div>
            
            {(this.state.profileShow) ? 
            <ProfileDialog show={this.state.profileShow} onClose={this.toggleProfile} />
             : null }
            {(this.state.mailShow) ? 
            <MailPopup show={this.state.profileShow} onClose={this.toggleMail} />
             : null }             
          </header>);
    }
}

export default Header;