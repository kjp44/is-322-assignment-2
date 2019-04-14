import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import * as React from "react";
import { TaskContext } from "../contexts";

interface FormState {
  taskCategory: string;
  taskTitle: string;
  taskType: string;
  newItem: object;
  message: string;
}

class TaskForm extends React.Component<{}, FormState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      taskCategory: "to_do",
      taskTitle: "",
      taskType: "",
      newItem: {},
      message: ""
    };
  }

  async handleSubmit(e: any, callback: any) {
    const { taskCategory, taskTitle, taskType } = this.state;
    const id = Math.floor(Math.random() * 100000);

    this.setState({ taskTitle: "", taskType: "" });

    e.preventDefault();
    const result = await fetch(
      `http://localhost:3000/${this.state.taskCategory}`,
      {
        method: "POST",
        body: JSON.stringify({
          id,
          type: taskType,
          title: taskTitle
        }),
        headers: { "Content-Type": "application/json" }
      }
    );
    if (result) {
      callback(taskCategory, { id, title: taskTitle, type: taskType });
      this.setState({ message: "Task was added successflly." });
    }
  }

  onSelectChange(e: any) {
    this.setState({
      taskCategory: e.target.value
    });
  }

  public render() {
    return (
      <TaskContext.Consumer>
        {value => {
          return value ? (
            <React.Fragment>
              <Link className="m-5 text-info" to="/">
                Dashboard
              </Link>
              <div className="row m-0 d-flex justify-content-center">
                {this.state.message ? (
                  <div
                    style={{
                      position: "absolute",
                      width: "300px",
                      height: "100px",
                      zIndex: 100,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "rgba(29, 185, 84, 0.8)"
                    }}
                  >
                    <div
                      className="text-white"
                      style={{ position: "absolute", top: 0, right: "10px" }}
                      onClick={() => this.setState({ message: "" })}
                    >
                      X
                    </div>
                    <div className="text-white">
                      Task was added successflly.
                    </div>
                  </div>
                ) : null}
                <div
                  className="col-11 col-sm-6 col-md-4 col-lg-4 border h-100"
                  style={{ marginTop: "150px" }}
                >
                  <h2 className="mt-2">Add New Task</h2>
                  <form
                    onSubmit={e => this.handleSubmit(e, value.updateListState)}
                  >
                    <div className="m-3">
                      <select onChange={e => this.onSelectChange(e)}>
                        <option value="to_do">To Do</option>
                        <option value="in_progress">In Progress</option>
                        <option value="review">Review</option>
                        <option value="done">Done</option>
                      </select>
                    </div>
                    <div className="m-3">
                      <input
                        className="input-group p-2"
                        type="text"
                        placeholder="Task Title"
                        onChange={e =>
                          this.setState({ taskTitle: e.target.value })
                        }
                      />
                    </div>
                    <div className="m-3">
                      <input
                        className="input-group p-2"
                        type="text"
                        placeholder="Task Type"
                        onChange={e =>
                          this.setState({ taskType: e.target.value })
                        }
                      />
                    </div>
                    <input
                      className="btn btn-info m-3"
                      type="submit"
                      value="Submit"
                    />
                  </form>
                </div>
              </div>
            </React.Fragment>
          ) : null;
        }}
      </TaskContext.Consumer>
    );
  }
}

export default TaskForm;
