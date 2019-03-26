import React, { Component } from "react";
import Dashboard from "./pages/Dashboard";

class App extends Component<{}, {}> {
  public state = {};

  render() {
    return (
      <div>
        <Dashboard />
      </div>
    );
  }
}

export default App;
