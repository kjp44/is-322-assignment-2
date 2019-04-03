import React, { Component } from "react";
import { Task } from "../components/task";
import { TaskContext } from "../contexts";
import {Link} from "react-router-dom";

class TaskForm extends Component {
  render() {
    return (
      <TaskContext.Consumer>
        {value => {
          return value ? (
            <React.Fragment>
              <Link className="m-5 text-info" to="/">Dashboard</Link>
              <div className="row d-flex m-0 justify-content-center">
                <div className="col-6 col-sm-6 col-md-4 col-lg-4 border h-100 m-1">
                <h2 className="mt-2">Add New Task</h2>
                <form>
                	<label>
                		<strong>Task Title</strong>
                		<br />
                		<input type="text" />
                	</label>
                	<br />
                	<label>
                		<strong>Task Type</strong>
                		<br />
                		<input type="text" />
                	</label>
                	<br />
                	<label>
                		<strong>Task ID</strong>
                		<br />
                		<input type="text" />
                	</label>
                	<br />
                	<input className="btn btn-info m-2" type="submit" value="Submit" />
                </form>
                </div>
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


export default TaskForm;
