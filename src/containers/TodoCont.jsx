import React, { Component } from "react";

export default class TodoCont extends Component {
  state = {
    todos: [],
    text: "",
  };

  handleChange = (evnt) => {
    this.setState({ text: evnt.target.value });
  };
  handleAdd = () => {
    this.setState({
      text: "",
      todos: [...this.state.todos, this.state.text],
    });
  };
  render() {
    const { todos, text } = this.state;
    return (
      <>
        <h2>Todo List</h2>
        <ul>
          {todos.map((elem, index) => (
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
