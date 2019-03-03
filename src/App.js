import React, { Component } from "react";
import "./App.css";
import TodoList from "./TodoList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList title="First To Do List" />
      </div>
    );
  }
}

export default App;
