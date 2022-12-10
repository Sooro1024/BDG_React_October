import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
// import { networkProvider } from "../network";
import { userNameSelector } from "../store/user/seletor";

import { getTodosAction, handelSaveAction } from "../store/todo/actions";
import { todoSelector } from "../store/todo/selectors";

export const CreateTodoCont = () => {
  const [isOpen, setIsOpen] = useState(false);

  const userName = useSelector(userNameSelector);

  const [formValues, setFormValues] = useState({
    userName: "",
    description: "",
    title: "",
    status: "todo",
  });
  const dispatch = useDispatch();

  const handelSave = (ev) => {
    // ev.preventDefault()
    dispatch(handelSaveAction(formValues)).then(() => {
      setFormValues({
        userName: "",
        description: "",
        title: "",
        status: "todo",
      });
      setIsOpen(false);
    });
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
              disabled={!!userName}
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
          <Button color="success" onClick={handelSave}>
            Save
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};
