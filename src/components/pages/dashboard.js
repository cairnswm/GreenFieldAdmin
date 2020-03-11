import React from "react";
import DisplayCard from "../widgets/displayCard";

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <div className="bodyHeader">
          <h2>Dashboard</h2>
        </div>
        <div>
            <DisplayCard header="Card Header" text="Card Text" buttonText="Go Somewhere"/>
            <DisplayCard />
            <DisplayCard />
            <DisplayCard />
        </div>
      </div>
    );
  }
}

export default Dashboard;
