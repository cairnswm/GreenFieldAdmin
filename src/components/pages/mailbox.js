import React from "react";
import { faReply, faTimes, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Icon from "../icon/icon";
import UserContext from '../../userContext.js';

class MailBox extends React.Component {
  static contextType = UserContext;
  render() {
    var mail = this.context.mail;
    return (
      <div>
        <div className="bodyHeader">
          <h2>Mail</h2>
        </div>
        <div className="">
          <div className="row">
            <div className="col-2">
              <button type="button" className="btn btn-primary"><FontAwesomeIcon icon={faEnvelope} /> Compose</button><br/>
              <a href="/mail/inbox">Inbox</a><br/>
              <a href="/mail/sent">Sent</a><br/>
            </div>
            <div className="col-10">            
              <div className="container">
                <div className="row">
                  <div className="col-1 col-lg bold">From</div>
                  <div className="col-9 bold">Message</div>
                  <div className="col-1 col-md bold">Sent</div>
                  <div className="col-1 bold"></div>
                </div>
                {mail.map((mailitem,index) => {
                    return (
                      <div className="row mailrow">
                        <div className="col-1 col-lg">{mailitem.from}</div>
                        <div className="col-9">{mailitem.subject}</div>
                        <div className="col-1 col-md">{mailitem.sent}</div>
                        <div className="col-1">
                          <Icon icon={faReply} onClick={this.toggleMail} className="userMail" />
                          <Icon icon={faTimes} onClick={this.toggleMail} className="userMail" />
                        </div>
                      </div>
                  )})}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MailBox;
