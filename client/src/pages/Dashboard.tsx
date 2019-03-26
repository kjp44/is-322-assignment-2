import React, { Component } from "react";
import { DashboardColumn } from "../components/dashboardColumn";
import { TaskContext } from "../contexts";

class Dashboard extends Component<{}, {}> {
  render() {
    return (
      <TaskContext.Consumer>
        {value => {
          return value ? (
            <div>
              This is Dashboard
              <DashboardColumn title={"To Do"} tasks={value.to_do} />
            </div>
          ) : (
            <div>Loading...</div>
          );
        }}
      </TaskContext.Consumer>
    );
  }
}

export default Dashboard;
