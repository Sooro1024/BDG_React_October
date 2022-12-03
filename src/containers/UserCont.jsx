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

const changeUserName = (payload) => ({
  type: "",
  payload,
});

export const UserCont = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 2000);
  }, []);

  const userName = useSelector((state) => state.user.personalInfo.name);
  const dispatch = useDispatch();

  return (
    <Modal isOpen={open} toggle={() => setOpen(false)}>
      <ModalHeader toggle={() => setOpen(false)}>Modal title</ModalHeader>
      <ModalBody>
        Hi dear user, please fill your name
        <Input
          value={userName}
          onChange={(ev) =>
            dispatch({ type: "CHANGE_USER_NAME", payload: ev.target.value })
          }
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
