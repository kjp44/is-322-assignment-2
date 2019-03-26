import React, { Component } from "react";
import { DashboardColumn } from "../components/dashboardColumn";
import { TaskContext } from "../contexts";
import {Link} from "react-router-dom";

class Dashboard extends Component<{}, {}> {
  render() {
    return (
      <TaskContext.Consumer>
        {value => {
          return value ? (
            <React.Fragment>
              <Link className="m-5 text-info" to="/add_task">Add Task</Link>
              <div className="row d-flex m-0 justify-content-center">
                <DashboardColumn title={"To Do"} tasks={value.to_do} />
                <DashboardColumn
                  title={"In Progress"}
                  tasks={value.in_progress}
                />
                <DashboardColumn title={"Review"} tasks={value.review} />
                <DashboardColumn title={"Done"} tasks={value.done} />
              </div>
            </React.Fragment>
          ) : (
            <div>Loading...</div>
          );
        }}
      </TaskContext.Consumer>
    );
  }
}

export default Dashboard;
