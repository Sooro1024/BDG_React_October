import React, { useState } from "react";
import { networkProvider } from "../network";

export const CreateTodoCont = ({ updateTodoState }) => {
  const [toggle, setToggle] = useState(false);

  const [formValues, setFormValues] = useState({
    userName: "",
    description: "",
    title: "",
    status: "todo",
  });

  const handelSave = (ev) => {
    ev.preventDefault();
    networkProvider
      .post("/todos", formValues)
      .then(({ data }) => {
        updateTodoState((prevTodos) => [...prevTodos, data]);
      })
      .catch((error) => console.log(error));
  };
  const handelCancel = () => {
    setToggle(false);
  };

  const handelChangeValues = (ev) => {
    setFormValues((prevFormState) => ({
      ...prevFormState,
      [ev.target.name]: ev.target.value,
    }));
  };

  if (toggle) {
    return (
      <form className="d-flex flex-col " onSubmit={handelSave}>
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
    );
  }

  return <button onClick={() => setToggle(true)}>New Todo</button>;
};
