import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Input,
  Button,
} from "reactstrap";

export const UserCont = ({ setUserName, userName }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 2000);
  }, []);

  return (
    <Modal isOpen={open} toggle={() => setOpen(false)}>
      <ModalHeader toggle={() => setOpen(false)}>Modal title</ModalHeader>
      <ModalBody>
        Hi dear user, please fill your name
        <Input
          value={userName}
          onChange={(ev) => setUserName(ev.target.value)}
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
