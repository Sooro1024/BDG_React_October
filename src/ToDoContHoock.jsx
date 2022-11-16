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
    // console.log(state.todos);
    let val = ev.target.getAttribute("keysave");
    // console.log(val);
    state.todos[val] = state.text;
    // console.log(state.todos[val]);
    // console.log(state.todos);

    setState({
      text: "",
      todos: [...state.todos],
    });
    setStyle({ visibility: "hidden" });
  };
  const handelDelete = (ev) => {
    let val = ev.target.getAttribute("keydelete");
    console.log(val)
     let s= state.todos.filter((item,index) => index !== val);
     console.log(s)

     setState({
      text: "",
      todos: [...s],
    });

//     console.log(state.todos[val]);
//     delete state.todos[val];
//     setState({
//       text: "",
//       todos: [...state.todos],
//     });
  };
  return (
    <>
      <h1>To do list Hook</h1>
      <ul>
        {state.todos.map((el, index) => (
          <li key={index}>
            {el}
            <input style={style} onChange={hendelEditChange} />
            <button keyedit={index} onClick={handelEdit}>
              Edit
            </button>
            <button keydelete={index} onClick={handelDelete}>
              Delete
            </button>
            <button keysave={index} onClick={handelSave}>
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
