import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Button } from "reactstrap";
import { Todo } from "../components/Todo";
import { networkProvider } from "../network";
import { CreateTodoCont } from "./CreateTodoCont";
import { TodoColoum } from "./TodoColoum";

export const TodosCont = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [todos, setTodos] = useState([]);
  const [updateBody, setUpdateBody] = useState({});

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

  const setNewTodos = useCallback((data) => {
    setIsOpen(!isOpen);
    setTodos(data);
  }, []);

  const handelEdit = useCallback((data) => {
    console.log(data, "edited data");
    setIsOpen(true);
    setUpdateBody(data);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handelDelete = useCallback(async (id) => {
    try {
      await networkProvider.delete(`/todos/${id}`);
      setTodos((prevTodos) => prevTodos.filter((el) => el._id !== id));
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <div className="app">
        <TodoColoum title="Todo">
          {lists.todo.map((todo) => (
            <Todo
              key={todo._id}
              color="danger"
              id={todo._id}
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
              color="warning"
              id={todo._id}
              title={todo.title}
              description={todo.description}
              createdAt={todo.createdAt}
              updatedAt={todo.updatedAt}
              handelDelete={handelDelete}
              handelEdit={() => setIsOpen(true)}
            />
          ))}
        </TodoColoum>
        <TodoColoum title="Done">
          {lists.done.map((todo) => (
            <Todo
              key={todo._id}
              color="success"
              id={todo._id}
              title={todo.title}
              description={todo.description}
              createdAt={todo.createdAt}
              updatedAt={todo.updatedAt}
              handelDelete={handelDelete}
              handelEdit={() => setIsOpen(true)}
            />
          ))}
        </TodoColoum>
      </div>
      <Button onClick={() => setIsOpen(true)}>Create new Todo</Button>
      {isOpen ? (
        <CreateTodoCont
          updateTodoState={setNewTodos}
          isOpen={isOpen}
          todoData={updateBody}
          setIsOpen={closeModal}
        />
      ) : null}
    </>
  );
};
