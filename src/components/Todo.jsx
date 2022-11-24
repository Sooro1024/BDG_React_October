import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import React, { memo, useState } from "react";

export const Todo = memo(
  ({
    id,
    title,
    description,
    createdAt,
    updatedAt,
    statusClass,
    handelDelete,
  }) => {
    const [Title,setTitle]=useState(title);
    const [Description,setDescription]=useState(description);
 console.log(description)
    return (
      <li data-id={id} className={`${statusClass} todoElement`}>
        {Title}
        <p className="description">{Description}</p>
        <p className="createdAt">createdAt: {createdAt}</p>
        <p className="updatedAt">updatedAt: {updatedAt}</p>
        <input placeholder="Edit:Title" onChange={(e)=>setTitle(e.target.value)}/>
        <input placeholder="Edit:Description" onChange={(e)=>setDescription(e.target.value)}/>
        <FontAwesomeIcon onClick={() => handelDelete(id)} icon={faTrashCan} />
      </li>
    );
  }
);

export default Todo