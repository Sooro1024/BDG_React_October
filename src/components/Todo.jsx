import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import React, { memo } from "react";

export const Todo = memo(
  ({
    id,
    title,
    description,
    createdAt,
    updatedAt,
    statusClass,
    handelDelete,
    handleEdit,
  }) => {
    return (
      <li data-id={id} className={`${statusClass} todoElement`}>
        {title}
        <p className="description">{description}</p>
        <p className="createdAt">createdAt: {createdAt}</p>
        <p className="updatedAt">updatedAt: {updatedAt}</p>
        <FontAwesomeIcon onClick={() => handelDelete(id)} icon={faTrashCan} />
        <FontAwesomeIcon onClick={() => handleEdit(id)} icon={faEdit} />
      </li>
    );
  }
);
