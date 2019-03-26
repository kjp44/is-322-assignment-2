import React, { Component } from "react";
import { DashboardColumn } from "../components/dashboardColumn";

class Dashboard extends Component<{}, {}> {
  render() {
    return (
      <div>
        This is Dashboard
        <DashboardColumn title={"To Do"} />
      </div>
    );
  }
}

export default Dashboard;
