import React, { useState } from "react";

export default function () {
  const [state, setState] = useState({
    todos: [],
    text: "",
  });

  const handleChange = (ev) => {
    setState((prevState) => ({ ...prevState, text: ev.target.value }));
  };

  const handleAdd = (ev) => {
    setState({
      text: "",
      todos: [...state.todos, state.text],
    });
  };

  return (
    <>
      <h6>Todo list</h6>
      <ul>
        {state.todos.map((el, index) => (
          <li key={index}>{el}</li>
        ))}
      </ul>
      <input
        placeholder="Add todo"
        value={state.text}
        onChange={handleChange}
      ></input>
      <button onClick={handleAdd}>Hit to add</button>
    </>
  );
}
