import React, { Fragment, useState } from "react";

function Todo() {
  const [lists, setLists] = useState([]);
  const [input, setInput] = useState("");

  const AddTodo = (todo) => {
    setLists([...lists, todo]);
    setInput("");
  };
  return (
    <div>
      <input
        placeholder="Add a todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => AddTodo(input)}>Add Todo</button>
      <ul>
        {lists.map((todo, index) => (
          <Fragment key={index}>
            <li>{todo}</li>
          </Fragment>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
