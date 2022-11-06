import React, { Fragment, useState } from 'react';

function Todo() {
  //a
    const[lists, setLists] = useState([]);
    const[input,setInput] =useState("");

    const AddTodo=(todo)=> { //submit change
        setLists([...lists, todo]);
        setInput("");
    };
  return (
    <div>
        <input 
        placeholder ='Write a todo' 
        value={input} 
        onChange={(e) =>setInput(e.target.value)}
        />
        <button onClick={() =>AddTodo(input)}>Add Todo</button>
        <ul>
        {lists.map((todo,index) =>(
                <Fragment key={index}>
                    <li>{todo}</li></Fragment>
            ))}
        </ul>
    </div>
  )
}

export default Todo