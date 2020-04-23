import React, { Component } from "react";
import "./App.css";
import ToDoListItem from "./ToDoListItem.js";

class App extends Component {
  state = {
    todoList: [],
  };

  render() {
    return (
      <div className="App">
        <form
          className="App-form"
          onSubmit={(e) => {
            e.preventDefault();

            //idがtitleのElementを取得
            const titleElement = e.target.elements["title"];
            //idがdescriptionのElementを取得
            const descriptionElement = e.target.elements["description"];

            //todoList　stateに追加
            this.setState(
              {
                todoList: this.state.todoList.concat({
                  title: titleElement.value,
                  description: descriptionElement.value,
                }),
              },
              //stateの変更後に入力した値を空にする
              () => {
                titleElement.value = "";
                descriptionElement.value = "";
              }
            );
          }}
        >
          <div>
            <input id="title" placeholder="title" />
            <textarea id="description" placeholder="description" />
          </div>
          <div>
            <button type="submit">登録</button>
          </div>
        </form>
        <div>
          {this.state.todoList.map((todo) => (
            <ToDoListItem
              key={todo.title}
              title={todo.title}
              description={todo.description}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
