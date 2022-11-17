import React, { useState } from "react";

export default function () {
  const [state, setState] = useState({
    todos: [],
    text: "",
  });

  // const [style, setStyle] = useState({ visibility: "hidden" });
  const [valueInput, setValueInput] = useState(false);
  const [valueEdit, setValueEdit] = useState();
  const [type, setType] = useState();


  const handleChange = (ev) => {
    setState((prevStat) => ({ ...prevStat, text: ev.target.value }));
  };


  const handleAdd = (ev) => {
    setState({
      text: "",
      todos: [...state.todos, state.text],
    });
  };



  const handelEdit = (ev) => {
    const index = ev.target.name;
    setType(index);
    setValueInput(true);
    // setStyle({ visibility: "visible" });
  };


  const hendelEditChange = (ev) => {
    const index = ev.target.name;
    setValueEdit(index);
    setState((prevStat) => ({ ...prevStat, text: ev.target.value }));
  };


  const handelSave = (ev) => {
    const index = ev.target.name;
    setType();
    setState({
      text: "",
      todos: state.todos.map((el, inx) => {
        if (inx === Number(index)) {
          return state.text;
        } else {
          return el;
        }
      }),
    });
    setValueInput(false);
    // setStyle({ visibility: "hidden" });
  };


  const handelDelete = (ev) => {
    const index = ev.target.name;

    setState({
      text: "",
      todos: state.todos.filter((item, inx) => inx != index),
    });
  };

  return (
    <>
      <h1>To do list Hook</h1>
      <ul>
        {state.todos.map((el, index) => (
          <li key={index}>
            {el}
            <input
              name={index}
              value={valueEdit == index ? state.text : ""}
              type={type == index ? "text" : "hidden"}
              onChange={hendelEditChange}
            />
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
        value={valueInput === false ? state.text : "Add todo"}
        onChange={handleChange}
      />
      <button onClick={handleAdd}>Hit to add</button>
    </>
  );
}
