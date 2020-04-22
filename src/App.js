import React, { Component } from "react";
import "./App.css";
import ToDoListItem from "./ToDoListItem.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <ToDoListItem
            title="React研修"
            description="ReactでToDoListを作って見よう！"
          />
        </div>
      </div>
    );
  }
}

export default App;
