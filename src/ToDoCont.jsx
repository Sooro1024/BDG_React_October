import React, { Component } from "react";

export default class ToDoCont extends Component {
  state = {
    todos: [],
    text: "",
  };
  handleChange = (ev) => {
    this.setState({ text: ev.target.value });
    };
  handleAdd = (ev) => {
    this.setState({
      text: "",
      todos: [...this.state.todos, this.state.text],
    });
  };
  render() {
    const { todos, text } = this.state;
    return (
      <>
        <h1>To do list</h1>
        <ul>
          {todos.map((el, index) => (
            <li key={index}>{el}</li>
          ))}
        </ul>
        <input
          placeholder="Add todo"
          value={text}
          onChange={this.handleChange}
        />
        <button onClick={this.handleAdd}>Hit to add</button>
      </>
    );
  }
}
