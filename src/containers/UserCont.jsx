import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Input,
  Button,
} from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { changeUserNameAction } from "../store/user/actions";
import { userNameSelector } from "../store/user/seletor";

export const UserCont = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 2000);
  }, []);

  const userName = useSelector(userNameSelector);
  const dispatch = useDispatch();

  return (
    <Modal isOpen={open} toggle={() => setOpen(false)}>
      <ModalHeader toggle={() => setOpen(false)}>Modal title</ModalHeader>
      <ModalBody>
        Hi dear user, please fill your name
        <Input
          value={userName}
          onChange={(ev) => dispatch(changeUserNameAction(ev))}
        />
      </ModalBody>
      <ModalFooter>
        <Button
          disabled={!userName}
          color="primary"
          onClick={() => setOpen(false)}
        >
          Sign in
        </Button>
      </ModalFooter>
    </Modal>
  );
};
