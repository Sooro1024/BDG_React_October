import React, { Fragment, useState } from 'react';
import TodoList from './TodoList';

function Todo() {
    const[lists, setLists] = useState([]);
    const[input,setInput] =useState("");

    const handleAddTodo=(todo)=> { //submit change
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
        <button onClick={() =>handleAddTodo(input)}>Add Todo</button>
        <ul>
        {lists.map((todo,index) =>(
                <Fragment key={index}>
                    <TodoList todo = {todo}  key={index}/>
                </Fragment>
            ))}
        </ul>
    </div>
  )
}

export default Todo