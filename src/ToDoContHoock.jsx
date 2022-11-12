import React, { useState } from "react";

export default function () {
  const [state, setState] = useState({
    todos: [],
    text: "",
  });
  console.table(state.todos)
  //   console.log(state)
  const handleChange = (ev) => {
    setState({ text: ev.target.value });
    // console.log(state);
    // console.log(setState);
  };
  const handleAdd = () => {
    setState({
      text: "",
      todos: [...state.todos, state.text],
    });
    // console.log(state.text)
    // console.table(state.todos)


  };

  return (
    <>
      <h1>To do list Hook</h1>
      {/* <ul>
          {state.todos.map((el, index) => (
            <li key={index}>{el}</li>
          ))}
        </ul> */}
      <input
        placeholder="Add todo"
        value={state.text}
        onChange={handleChange}
      />
      <button onClick={handleAdd}>Hit to add</button>
    </>
  );
}
