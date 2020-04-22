import React, { Component } from "react";
import "./App.css";
import ToDoListItem from "./ToDoListItem.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <form clasName="App-form">
          <div>
            <input id="title" placeholder="title" />
            <textarea id="description" placeholder="description" />
          </div>
          <div>
            <button type="submit">登録</button>
          </div>
        </form>

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
