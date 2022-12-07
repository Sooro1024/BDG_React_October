// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
// import React, { memo } from "react";
// // import React, { memo, useState } from "react";

// import {
//   Card,
//   CardBody,
//   CardHeader,
//   CardText,
//   CardTitle,
//   CardSubtitle,
//   Button,
//   CardFooter,
//   Input,
// } from "reactstrap";

// const TodoComp = ({
//   id,
//   title,
//   description,
//   userName,
//   createdAt,
//   updatedAt,
//   color,
//   handelDelete,
// }) => 
// {
// // const [inputName, setName] = useState(userName);
// const [inputTitle, setTitle] = useState(title);
// const [inputDec, setDec] = useState(description);
// const [update, setUpdate] = useState();
// const [newElement, setNewElement] = useState()

// const hendelEditChange1 = (ev) => {
//   setTitle((prevStat) => ev.target.value);
// };
// const hendelEditChange2 = (ev) => {
//   setName((prevStat) => ev.target.value);
// };
// const hendelEditChange3 = (ev) => {
//   setDec((prevStat) => ev.target.value);
// };
// (
  
//   <Card className="m-2" color={color} inverse>
//     <CardHeader>{title}</CardHeader>
//     <CardBody>
//       <CardTitle tag="h4">{userName}</CardTitle>
//       <CardText tag="h5">{description}</CardText>
//       <CardSubtitle tag="h6">
//         createdAt: {new Date(createdAt).toLocaleString()}
//       </CardSubtitle>
//       <CardSubtitle tag="h6">updatedAt: {updatedAt}</CardSubtitle>
//     </CardBody>
//     <CardFooter>
//       <Button color="primary">
//         Delete
//         <FontAwesomeIcon
//           className="ms-3"
//           onClick={() => handelDelete(id)}
//           icon={faTrashCan}
//         />
//       </Button>
//     </CardFooter>
//     {/* <Input  onChange={hendelEditChange1}/>
//     <Input  onChange={hendelEditChange2}/>
//     <Input  onChange={hendelEditChange3}/> */}
// {/* console.log(title) */}
//   </Card>
// )
// };

// export const Todo = memo(TodoComp);


// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

    // const hendelAdd = (ev) => {
    //   const newElement = {
    //     _id: ev.target.name,
    //     title: inputTitle,
    //     userName: inputName,
    //     description: inputDec,
    //     updatedAt: ev.target.getAttribute("update"),
    //   };
    //   setNewElement(newElement)
    //   return newElement
    // };
    // console.log(newElement);
    return (
      <li data-id={id} className={`${statusClass} todoElement`}>
        {title}
        <p className="description">description: {description}</p>
        <p className="usernm">user name: {userName}</p>
        <p className="createdAt">createdAt: {createdAt}</p>
        {/* <p className="updatedAt">updatedAt: {updatedAt}</p> */}

        {/* <div className="modal"> */}
    
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
       {/* 
          <button name={id} onClick={hendelAdd} update={new Date()}>
            Edit
          </button>
          <button onClick={()=>handelEdit(newElement)}>SaveEdit</button>  */}


        {/* </div> */}
               <button  name={id}  update={new Date()} onClick={()=>handelEdit(inputTitle,inputName,inputDec,id)}>SaveEdit</button>
        <button onClick={() => handelDelete(id)} icon={faTrashCan} >Delete </button>
      </li>
    );
  }
);
