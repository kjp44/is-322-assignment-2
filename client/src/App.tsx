import React, { Component } from "react";
import Dashboard from "./pages/Dashboard";
import { TaskContext } from "./contexts";

interface AppState {
  to_do: Array<object>;
}

class App extends Component<{}, AppState> {
  public state = { to_do: [] };

  async componentDidMount() {
    const response = await fetch("http://localhost:3000/to_do", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });

    const result = await response.json();

    this.setState({ to_do: result });
  }

  render() {
    const { to_do } = this.state;
    return (
      <TaskContext.Provider
        value={{
          to_do
        }}
      >
        <div>
          <Dashboard />
        </div>
      </TaskContext.Provider>
    );
  }
}

export default App;
