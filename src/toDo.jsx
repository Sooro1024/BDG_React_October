import React, { useState } from 'react'

export default function() {

    const [state , setState] = useState({

        todos:[],
        text:"",
    })


        const handleChange= (ev)=>{
            setState({text:ev.target.value})

        };
        
       const handleAdd= (ev)=>{
            setState({
                text:'',
                todos:[...state.todos, state.text]})

        };


  render() {
      const {todos,text}= this.state  
    return (
      <>
      <h6>Todo list</h6>
      <ul>
        
       {todos.map((el, index)=><li key={index}>{el}</li>)}
            
      </ul>
      <input placeholder='Add todo' value={text} onChange={this.handleChange}></input>
      <button onClick={handleAdd}>Hit to add</button>
      </>
    )
  }
}