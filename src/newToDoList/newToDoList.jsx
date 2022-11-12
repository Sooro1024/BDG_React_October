import React, { useState } from "react";

export default function () {
  const [list, setList] = useState([]);
  const [inputs, setInputs] = useState("");

  const createToDo = (todo) => {
    setList([...list, todo]);
    setInputs("");
  };
  return (
    <div className="MainToDo">
      <input
        type="text"
        placeholder="Create Lists"
        value={inputs}
        onChange={(ev) => setInputs(ev.target.value)}
      />
      <button onClick={() => createToDo(inputs)}>Click to Create</button>
      <ul>
        {list.map((list, index) => (
          <li key={index}>{list}</li>
        ))}
      </ul>
    </div>
  );
}
