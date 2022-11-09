import React, { Component } from 'react'

export default class Todo extends Component {

    state = {
        todo_list: [],
        text: '',
    }

    handleChange = (evnt) =>{
        this.setState({text: evnt.target.value})
    }
    handleAdd = () =>{
        this.setState({
            text: '', 
        todo_list:[...this.state.todo_list, this.state.text] })
    }
  render() {
      const { todo_list, text} = this.state;
    return (
      <>
      <h2>My ToDo List</h2>
      <ul>
          {todo_list.map((elem,index) => (<li key={index}>{elem}</li>))}
      </ul>
      <input placeholder="Input ToDo" value={text} onChange={this.handleChange}></input>
      <button onClick= {this.handleAdd}>Add</button>
      </>
      
    )
  }
}
