import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Todo } from "../Component/Todo";
import { networkProvider } from "../network";
import { CreateTodoCont } from "./CreateTodoCont";
import { TodoColoum } from "./TodoColoum";

export const TodosCont = () => {
  const [todos, setTodos] = useState([]);
  const [newElement, setNewElement] = useState({})

  const lists = useMemo(() => {
    return todos.reduce(
      (acc, el) => {
        if (el.status === "in progress") {
          acc.inProgress.push(el);
        } else if (el.status === "done") {
          acc.done.push(el);
        } else {
          acc.todo.push(el);
        }

        return acc;
      },
      {
        done: [],
        inProgress: [],
        todo: [],
      }
    );
  }, [todos]);

  useEffect(() => {
    networkProvider
      .get("/todos")
      .then(({ data }) => {
        setTodos(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handelDelete = useCallback(async (id) => {
    try {
      await networkProvider.delete(`/todos/${id}`);
      setTodos((prevTodos) => prevTodos.filter((el) => el._id !== id));
    } catch (error) {
      console.log(error);
    }
  }, []);
  {
    console.log(lists);
  }

  const handelEdit = (newElement) => {  
    
    console.log(newElement)
                        //  `/todos/${ev.target.name}`
    networkProvider.put(`/todos/${newElement._id}`,newElement).then(respond=>
      {
        setTodos(prevState=>{

          return prevState.map(el =>{
            if (el._id === newElement._id)
            {
              return ({...el, ...newElement})
            }
            return el
          }
            )

        })
      }).catch(error=>console.log(error))
  
  
  };
  // const handelEdit = (inputTitle,inputName,inputDec,id)=>
  // {
  //   const newElement = {
  //         _id: id,
  //         title: inputTitle,
  //         userName: inputName,
  //         description: inputDec,
  //         updatedAt: new Date(),
  //       };
  //       setNewElement(newElement)
  //         networkProvider.put(`/todos/${newElement._id}`, newElement).then(respond=>
  //     {
  //       setTodos(prevState=>{

  //         return prevState.map(el =>{
  //           if (el._id === newElement._id)
  //           {
  //             return ({...el, ...newElement})
  //           }
  //           return el
  //         }
  //           )

  //       })
  //     }).catch(error=>console.log(error))



  // }

console.log(newElement);



  return (
    <>
      <div className="app">
        <TodoColoum title="Todo">
          {lists.todo.map((todo) => (
            <Todo
              key={todo._id}
              statusClass="red"
              id={todo._id}
              userName={todo.userName}
              title={todo.title}
              description={todo.description}
              createdAt={todo.createdAt}
              updatedAt={todo.updatedAt}
              handelDelete={handelDelete}
              handelEdit={handelEdit}
            />
          ))}
        </TodoColoum>
        <TodoColoum title="In progress">
          {lists.inProgress.map((todo) => (
            <Todo
              key={todo._id}
              statusClass="yellow"
              id={todo._id}
              title={todo.title}
              userName={todo.userName}
              description={todo.description}
              createdAt={todo.createdAt}
              updatedAt={todo.updatedAt}
              handelDelete={handelDelete}
              handelEdit={handelEdit}
            />
          ))}
        </TodoColoum>
        <TodoColoum title="Done">
          {lists.done.map((todo) => (
            <Todo
              key={todo._id}
              statusClass="green"
              id={todo._id}
              title={todo.title}
              userName={todo.userName}
              description={todo.description}
              createdAt={todo.createdAt}
              updatedAt={todo.updatedAt}
              handelDelete={handelDelete}
              handelEdit={handelEdit}
            />
          ))}
        </TodoColoum>
      </div>
      <CreateTodoCont updateTodoState={setTodos} />
    </>
  );
};
