import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import React, { memo, useState } from "react";

export const Todo = memo(
  ({
    id,
    title,
    userName,
    description,
    createdAt,
    updatedAt,
    statusClass,
    handelEdit,
    handelDelete,
  }) => {
    // const [style, setStyle] = useState({visibility:"hidden"})

    const [inputName, setName] = useState(userName);
    const [inputTitle, setTitle] = useState(title);
    const [inputDec, setDec] = useState(description);
    const [update, setUpdate] = useState();
    const [newElement, setNewElement] = useState()

    const hendelEditChange1 = (ev) => {
      setTitle((prevStat) => ev.target.value);
    };
    const hendelEditChange2 = (ev) => {
      setName((prevStat) => ev.target.value);
    };
    const hendelEditChange3 = (ev) => {
      setDec((prevStat) => ev.target.value);
    };
    // const hendelEditChange4 = (ev) => {
    //   setUpdate(ev.target.value);

    // };

    const hendelAdd = (ev) => {
      const newElement = {
        _id: ev.target.name,
        title: inputTitle,
        userName: inputName,
        description: inputDec,
        updatedAt: ev.target.getAttribute("update"),
      };
      setNewElement(newElement)
      return newElement
    };
    // console.log(newElement);
    return (
      <li data-id={id} className={`${statusClass} todoElement`}>
        {title}
        <p className="description">description: {description}</p>
        <p className="usernm">user name: {userName}</p>
        <p className="createdAt">createdAt: {createdAt}</p>
        <p className="updatedAt">updatedAt: {updatedAt}</p>

        <div className="modal">
          {/* <select
            name="status"
            // onChange={handelChangeValues}
            // value={formValues.status}
            >
            <option value="todo">Todo</option>
            <option value="in progress">In progress</option>
            <option value="done">Done</option>
          </select> */}

          <input type="text" placeholder={title} onChange={hendelEditChange1} />
          <input
            type="text"
            placeholder={userName}
            onChange={hendelEditChange2}
          />
          <input
            type="text"
            placeholder={description}
            onChange={hendelEditChange3}
          />
          {/* <input
            type="text"
            placeholder={updatedAt}
            value={new Date()}
            onClick={hendelEditChange4}
          /> */}


          <button name={id} onClick={hendelAdd} update={new Date()}>
            Edit
          </button>
          <button onClick={()=>handelEdit(newElement)}>SaveEdit</button> 


        </div>
               {/* <button  name={id}  update={new Date()} onClick={()=>handelEdit(inputTitle,inputName,inputDec,id)}>SaveEdit</button> */}
        <FontAwesomeIcon onClick={() => handelDelete(id)} icon={faTrashCan} />
      </li>
    );
  }
);
