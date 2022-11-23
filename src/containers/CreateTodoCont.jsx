import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import { UserContext } from "../context/userName";
import { networkProvider } from "../network";

export const CreateTodoCont = ({ updateTodoState }) => {
  const [isOpen, setIsOpen] = useState(false);

  const userName = useContext(UserContext);

  const [formValues, setFormValues] = useState({
    userName: "",
    description: "",
    title: "",
    status: "todo",
  });

  useEffect(() => {
    setFormValues((prev) => ({ ...prev, userName }));
  }, [userName]);

  const handelSave = (ev) => {
    ev.preventDefault();
    networkProvider
      .post("/todos", formValues)
      .then(({ data }) => {
        updateTodoState((prevTodos) => [...prevTodos, data]);
        setIsOpen(false);
        setFormValues({
          userName: "",
          description: "",
          title: "",
          status: "todo",
        });
      })
      .catch((error) => console.log(error));
  };
  const handelCancel = () => {
    setIsOpen(false);
  };

  const handelChangeValues = (ev) => {
    setFormValues((prevFormState) => ({
      ...prevFormState,
      [ev.target.name]: ev.target.value,
    }));
  };

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Create new Todo</Button>
      <Modal isOpen={isOpen} toggle={() => setIsOpen(false)}>
        <ModalHeader toggle={() => setIsOpen(false)}>
          Create new Todo
        </ModalHeader>
        <ModalBody>
          <FormGroup floating>
            <Input
              id="userName"
              placeholder="Username"
              disabled={userName ? true : false}
              name="userName"
              onChange={handelChangeValues}
              value={formValues.userName}
            />
            <Label for="userName">Username</Label>
          </FormGroup>
          <FormGroup floating>
            <Input
              id="description"
              placeholder="Description"
              name="description"
              onChange={handelChangeValues}
              value={formValues.description}
            />
            <Label for="description">Description</Label>
          </FormGroup>
          <FormGroup floating>
            <Input
              id="title"
              placeholder="Title"
              name="title"
              onChange={handelChangeValues}
              value={formValues.title}
            />
            <Label for="title">Title</Label>
          </FormGroup>

          <FormGroup floating>
            <Input
              id="exampleSelect"
              type="select"
              name="status"
              onChange={handelChangeValues}
              value={formValues.status}
            >
              <option value="todo">Todo</option>
              <option value="in progress">In progress</option>
              <option value="done">Done</option>
            </Input>
            <Label for="exampleSelect">Todo status</Label>
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={handelCancel}>
            Cancel
          </Button>
          <button className="btn btn-success " onClick={handelSave}>
            Save
          </button>
        </ModalFooter>
      </Modal>
    </>
  );
};
