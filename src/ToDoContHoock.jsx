import React, { useState } from "react";

export default function () {
  const [state, setState] = useState({
    todos: [],
    text: "",
  });
  const handleChange = (ev) => {
    setState((prevStat) => ({ ...prevStat, text: ev.target.value }));
  };
  const handleAdd = () => {
    setState({
      text: "",
      todos: [...state.todos, state.text],
    });

  };

  return (
    <>
      <h1>To do list Hook</h1>
      <ul>
          {state.todos.map((el, index) => (
            <li key={index}>{el}</li>
          ))}
        </ul>
      <input
        placeholder="Add todo"
        value={state.text}
        onChange={handleChange}
      />
      <button onClick={handleAdd}>Hit to add</button>
    </>
  );
}
