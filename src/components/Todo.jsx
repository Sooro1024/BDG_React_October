import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import React, { memo } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardText,
  CardTitle,
  CardSubtitle,
  Button,
  CardFooter,
} from "reactstrap";

const TodoComp = ({
  id,
  title,
  description,
  userName,
  createdAt,
  updatedAt,
  color,
  handelDelete,
}) => {
  return (
    <Card className="m-2" color={color} inverse>
      <CardHeader>{title}</CardHeader>
      <CardBody>
        <CardTitle tag="h4">{userName}</CardTitle>
        <CardText tag={"h5"}>{description}</CardText>
        <CardSubtitle tag={"h6"}>
          createdAt: {new Date(createdAt).toLocaleString()}
        </CardSubtitle>
        <CardSubtitle tag={"h6"}>updatedAt: {updatedAt}</CardSubtitle>
      </CardBody>
      <CardFooter>
        <Button color="primary">
          Delete
          <FontAwesomeIcon
            className="ms-3"
            onClick={() => handelDelete(id)}
            icon={faTrashCan}
          />
        </Button>
      </CardFooter>
    </Card>
  );
};

export const Todo = memo(TodoComp);
