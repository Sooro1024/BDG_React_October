import React, { useState } from "react";

export default function () {
  const [state, setState] = useState({
    todos: [],
    text: "",
  });
  const [style, setStyle] = useState({ visibility: "hidden" });
  const handleChange = (ev) => {
    setState((prevStat) => ({ ...prevStat, text: ev.target.value }));
  };
  const handleAdd = () => {
    setState({
      text: "",
      todos: [...state.todos, state.text],
    });
  };

  const handelEdit = (ev) => {
    setStyle({ visibility: "visible" });
  };
  const hendelEditChange = (ev) => {
    setState((prevStat) => ({ ...prevStat, text: ev.target.value }));
  };
  const handelSave = (ev) => {
    const index = ev.target.getAttribute("keysave");

    setState({
      text: "",
      todos: state.todos.map((el, inx) => {
        if (inx === Number(index)) {
          return state.text
        } else {
          return el
        }
      }),
    });
    setStyle({ visibility: "hidden" });
  };
  const handelDelete = (ev) => {
    const val = ev.target.name("keydelete");
    console.log(typeof val)
     let newTodoList= state.todos.filter((item,index) => index != val);
     console.log(newTodoList)

     setState({
      text: "",
      todos: newTodoList,
    });

  return (
    <>
      <h1>To do list Hook</h1>
      <ul>
        {state.todos.map((el, index) => (
          <li key={index}>
            {el}
            <input style={style} onChange={hendelEditChange} />
            <button name={index} onClick={handelEdit}>
              Edit
            </button>
            <button name={index} onClick={handelDelete}>
              Delete
            </button>
            <button name={index} onClick={handelSave}>
              Save
            </button>
          </li>
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
