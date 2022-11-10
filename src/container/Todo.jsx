import React, { memo, useEffect, useState } from "react";

function InputComp({onAddBtnClick}) {
  const [input, setInput] = useState("");

  useEffect(() => {
    console.log(input)
    return () => {
      console.log('return function input value', input)

    }
    }, [input])

  return (
    <>
      <input
        placeholder="Write a todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={() => {
          onAddBtnClick({value: input, id: new Date().getMilliseconds()});
          setInput("");
        }}
      >
        Add Todo
      </button>
    </>
  );
}

function TodoItem({singleTodoText}) {
  return <li>{singleTodoText}</li>
}

const MemoizedTodo = memo(TodoItem)

function Todo() {
  const [lists, setLists] = useState([]);

  const handleAddTodo = (todo) => {
    //submit change
    setLists([todo, ...lists, ]);
  };
  return (
    <div>
      <InputComp onAddBtnClick={handleAddTodo} />
      <ul>
        {lists.map((todo) => {
          const {value, id} = todo;
          return (
            <>
              {console.log({ value, id })}
              <MemoizedTodo singleTodoText={value} key={id} />
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default Todo;
