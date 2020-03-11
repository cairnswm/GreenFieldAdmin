import React from "react";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PlayerDetail from "../widgets/playerDetail";
import UserContext from '../../userContext.js';

class Squad extends React.Component {
  static contextType = UserContext;
  render() {
    var riders = this.context.riders;
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
                {riders.map((rider,index) => {
                    return (<PlayerDetail rider={rider} />
                  )})}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Squad;
