import React, { Component } from "react";
import { DashboardColumn } from "../components/dashboardColumn";
import { TaskContext } from "../contexts";

class Dashboard extends Component<{}, {}> {
  render() {
    return (
      <TaskContext.Consumer>
        {value => {
          return value ? (
            <div className="row d-flex m-0 justify-content-center">
              <DashboardColumn title={"To Do"} tasks={value.to_do} />
              <DashboardColumn
                title={"In Progress"}
                tasks={value.in_progress}
              />
              <DashboardColumn title={"Review"} tasks={value.review} />
              <DashboardColumn title={"Done"} tasks={value.done} />
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
