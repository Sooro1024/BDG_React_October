import React, { Component } from "react";

export default class Todo extends Component {
  state = {
    todoList: [],
    text: "",
  };

  handleChange = (evnt) => {
    this.setState({ text: evnt.target.value });
  };
  handleAdd = () => {
    this.setState({
      text: "",
      todoList: [...this.state.todoList, this.state.text],
    });
  };
  render() {
    const { todoList: todo_list, text } = this.state;
    return (
      <>
        <h2>My ToDo List</h2>
        <ul>
          {todo_list.map((elem, index) => (
            <li key={index}>{elem}</li>
          ))}
        </ul>
        <input
          placeholder="Input ToDo"
          value={text}
          onChange={this.handleChange}
        ></input>
        <button onClick={this.handleAdd}>Add</button>
      </>
    );
  }
}
