import React, { Component } from "react";
import Dashboard from "./pages/Dashboard";
import { TaskContext } from "./contexts";
import { fetchFactory } from "./utilities/fetch";

interface AppState {
  to_do: Array<object>;
  in_progress: Array<object>;
  review: Array<object>;
  done: Array<object>;
}

class App extends Component<{}, AppState> {
  public state = { to_do: [], in_progress: [], review: [], done: [] };

  async componentDidMount() {
    const to_do = await fetchFactory("http://localhost:3000/to_do");
    const in_progress = await fetchFactory("http://localhost:3000/in_progress");
    const review = await fetchFactory("http://localhost:3000/review");
    const done = await fetchFactory("http://localhost:3000/done");

    this.setState({ to_do });
    this.setState({ in_progress });
    this.setState({ review });
    this.setState({ done });
  }

  render() {
    const { to_do, in_progress, review, done } = this.state;
    return (
      <React.Fragment>
        <h3 className="m-3 border-bottom border-dark">Task Board</h3>
        <TaskContext.Provider
          value={{
            to_do,
            in_progress,
            review,
            done
          }}
        >
          <div>
            <Dashboard />
          </div>
        </TaskContext.Provider>
      </React.Fragment>
    );
  }
}

export default App;
