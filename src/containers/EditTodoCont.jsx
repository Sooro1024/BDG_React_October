import React, { useState, useEffect } from "react";
import { networkProvider } from "../network";

export const EditTodoCont = ({
  updateTodoState,
  showEditForm,
  setShowEditForm,
  currentEditId,
  todos,
}) => {
  const [formValues, setFormValues] = useState({
    userName: "",
    description: "",
    title: "",
    status: "",
  });

  useEffect(() => {
    if (currentEditId) {
      const currentTodo = todos.find((el) => el._id === currentEditId);
      setFormValues({
        userName: currentTodo.userName,
        description: currentTodo.description,
        title: currentTodo.title,
        status: currentTodo.status,
      });
    }
  }, [currentEditId]);

  const handleSave = (ev) => {
    ev.preventDefault();

    networkProvider
      .put(`/todos/${currentEditId}`, formValues)
      .then(({ data }) => {
        console.log("RESPONSE FROM SERVER");
        console.log(data);
        const newTodos = todos.map((todo) => {
          if (todo._id === currentEditId) {
            return {
              ...todo,
              ...formValues,
            };
          }

          return todo;
        });

        updateTodoState(newTodos);
      })
      .catch((error) => console.log(error));

    setShowEditForm(false);
    console.log("Handle Save");
  };
  const handelCancel = () => {
    setShowEditForm(false);
  };

  const handelChangeValues = (ev) => {
    setFormValues((prevFormState) => ({
      ...prevFormState,
      [ev.target.name]: ev.target.value,
    }));
  };

  if (showEditForm) {
    return (
      <div>
        <h3>EDIT TODO:</h3>
        <form className="d-flex flex-col" onSubmit={handleSave}>
          <label>
            userName
            <input
              name="userName"
              onChange={handelChangeValues}
              value={formValues.userName}
            />
          </label>
          <label>
            description
            <input
              name="description"
              onChange={handelChangeValues}
              value={formValues.description}
            />
          </label>
          <label>
            title
            <input
              name="title"
              onChange={handelChangeValues}
              value={formValues.title}
            />
          </label>
          <label>
            status
            <select
              name="status"
              onChange={handelChangeValues}
              value={formValues.status}
            >
              <option value="todo">Todo</option>
              <option value="in progress">In progress</option>
              <option value="done">Done</option>
            </select>
          </label>
          <div>
            <button type="submit">Save</button>
            <button onClick={handelCancel}>Cancel</button>
          </div>
        </form>
      </div>
    );
  }

  return <div></div>;
};
