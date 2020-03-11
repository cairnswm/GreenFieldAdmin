import React from "react";

import "./App.css";
import "./css/bootstrap.css";

import Header from "./components/header";
import Body from "./components/body";
import Footer from "./components/footer";
import { UserProvider, defaultContext } from "./userContext";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showMenu: true };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState(state => ({
      showMenu: !state.showMenu
    }));
  }

  render() {
    const user = defaultContext;// { name: "William", loggedIn: true };
    return (
      <UserProvider value={user}>
        <div className="App">
          <Header title="Green Field" onToggleMenu={this.toggleMenu} />
          <Body showMenu={this.state.showMenu}/>
          <Footer />
        </div>
      </UserProvider>
    );
  }
}

export default App;
