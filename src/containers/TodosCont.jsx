import React, { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Todo } from "../components/Todo";
import { networkProvider } from "../network";
import {
  getTodosAction,
  handelDeleteAction,
  handelEditAction,
} from "../store/todo/actions";
import { CreateTodoCont } from "./CreateTodoCont";
import { TodoColoum } from "./TodoColoum";
import { todoSelector } from "../store/todo/selectors";

export const TodosCont = () => {
  const dispatch = useDispatch();

  const todos = useSelector(todoSelector);

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
    dispatch(getTodosAction());
  }, [dispatch]);
  const handelDelete = (id) => {
    dispatch(handelDeleteAction(id));
  };

  const handelEdit = (inputTitle, inputName, inputDec, id) => {
    dispatch(handelEditAction(inputTitle, inputName, inputDec, id));
  };

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
              handelEdit={handelEdit}
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
              handelEdit={handelEdit}
            />
          ))}
        </TodoColoum>
      </div>
      <CreateTodoCont />
    </>
  );
};
