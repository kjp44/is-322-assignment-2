import React, { Component } from "react";

import Dashboard from "./pages/Dashboard";
import TaskForm from "./pages/TaskForm";

import { TaskContext } from "./contexts";
import { fetchFactory } from "./utilities/fetch";
import { Route, Switch } from "react-router-dom";

interface AppState {
  to_do: Array<object>;
  in_progress: Array<object>;
  review: Array<object>;
  done: Array<object>;
}

class App extends Component<{}, AppState> {
  public state = {
    to_do: [],
    in_progress: [],
    review: [],
    done: []
  };

  async componentDidMount() {
    const to_do = await fetchFactory("http://localhost:3000/to_do");
    const in_progress = await fetchFactory("http://localhost:3000/in_progress");
    const review = await fetchFactory("http://localhost:3000/review");
    const done = await fetchFactory("http://localhost:3000/done");

    this.setState({ in_progress, review, done, to_do });
  }

  updateListState(type: string, newItem: object) {
    switch (type) {
      case "to_do":
        this.setState({ to_do: [...this.state.to_do, newItem] });
        break;
      case "in_progress":
        this.setState({ in_progress: [...this.state.in_progress, newItem] });
        break;
      case "review":
        this.setState({ review: [...this.state.review, newItem] });
        break;
      case "done":
        this.setState({ done: [...this.state.done, newItem] });
        break;
    }
  }

  render() {
    const { to_do, in_progress, review, done } = this.state;
    const { updateListState } = this;
    return (
      <React.Fragment>
        <h3 className="m-3 border-bottom border-dark">Task Board</h3>
        <TaskContext.Provider
          value={{
            to_do,
            in_progress,
            review,
            done,
            updateListState: updateListState.bind(this)
          }}
        >
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/add_task" component={TaskForm} />
          </Switch>
        </TaskContext.Provider>
      </React.Fragment>
    );
  }
}

export default App;
