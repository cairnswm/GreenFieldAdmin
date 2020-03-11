import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./about";
import Dashboard from "./pages/dashboard";
import MailBox from "./pages/mailbox";

// Place holder
function Home() {
  return <h2>Home</h2>;
}

// Place holder
function Users() {
  return <h2>Users</h2>;
}

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showMenu: this.props.showMenu };
  }

  render() {
    return (
      <Router>
      <div className="container sidebar">
        <div className="row">
          {this.props.showMenu ? (
            <div className="col-xs sidebar">
              <div>
                <div>
                  <Link to="/">Home</Link><br/>
                  
                  <Link to="/dashboard">Dashboard</Link><br/>
                  <Link to="/users">Users</Link><br/>
                  
                  <Link to="/mail">Mail</Link><br/>
                  <hr style={{width:"80%"}}></hr>
                  <Link to="/about">About</Link><br/>
                </div>
              </div>
            </div>
          ) : null}
          <div className="col">
            <Switch>
              <Route path="/dashboard">
                <Dashboard />
              </Route>
              
              <Route path="/mail">
                <MailBox />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/users">
                <Users />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>);
  }
}

export default Body;
