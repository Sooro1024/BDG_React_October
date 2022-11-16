import React,{useState} from 'react'

function TodoList({todo}) {

  const [newTodo, setNewTodo] = useState(todo);
  const[edit,setEdit] = useState(false);
  const deleteTask = () => {
    setNewTodo("")
} 
const EditTask = () => {
setEdit(!edit);
} 
if(newTodo)
  return (
    <div style={{display:"flex" , alignItems:"center"}} >
       <ol> {newTodo}</ol>
       <button onClick={() =>{deleteTask()}}>Delete </button>  
       <button onClick={() =>{EditTask()}}>Edit </button>
       {edit ?(<input placeholder='EditTask' onChange={(e)=>setNewTodo(e.target.value)}/>):""}  
       
    </div>
  )
}

export default TodoList