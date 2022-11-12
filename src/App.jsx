// import React, { useState } from "react";

// export default function () {
//   const [state, setState] = useState({
//     toDoList: [],
//     text: "",
//   });

//   const handleChange = (evt) => {
//     setState({ text: evt.target.value });
//   };

//   const handleAdd = () => {
//     setState({ text: "", toDoList: [...state.toDoList, state.text] });
//   };
//   return (
//     <>
//       <h2>My Lists</h2>
//       <input placeholder="Create Lists" value={text} onChange={handleChange} />
//       <button onClick={handleAdd}>Click To Add</button>
//       <ul>
//         {toDoList.map((elem, index) => (
//           <li key={index}>{elem}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

// import NewToDoList from "./newToDoList/toDoList";
// import React, { Component } from "react";

// function App() {
//   return (
//     <div>
//             <NewToDoList />;
//     </div>
//   );
// }
// export default App();

/*export default class ToDoList extends Component {
  state = {
    todos: [],
    text: "",
  };

  handleChange = (ev) => {
    this.setState({ text: ev.target.value });
  };

  handleAdd = () => {
    this.setState({ text: "", todos: [...this.state.todos, this.state.text] });
  };
  render() {
    const { todos, text } = this.state;
    return (
      <>
        <input
          placeholder="Add todo"
          value={text}
          onChange={this.handleChange}
        />
        <button onClick={this.handleAdd}>Click To Add</button>
        <ul>
          {todos.map((elem, index) => (
            <Fragment key={index}>
              <li>{elem}</li>
            </Fragment>
          ))}
        </ul>
      </>
    );
  }
}*/

// import React, { useState } from "react";
// import "./App.css";

// export default function App() {
//   const [state, setState] = useState({
//     toDoList: [],
//     text: "",
//   });

//   const handleChange = (evt) => {
//     setState({ text: evt.target.value });
//   };

//   const handleAdd = () => {
//     setState({ text: "", toDoList: [...state.toDoList, state.text] });
//   };
//   return (
//     <>
//       <h2>My Lists</h2>
//       <input placeholder="Create Lists" value={text} onChange={handleChange} />
//       <button onClick={handleAdd}>Click To Add</button>
//       <ul>
//         {toDoList.map((elem, index) => (
//           <li key={index}>{elem}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

// // import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import './App.css'

// // function App() {
// //   const [count, setCount] = useState(0)

// //   return (
// //     <div className="App">
// //       <div>
// //         <a href="https://vitejs.dev" target="_blank">
// //           <img src="/vite.svg" className="logo" alt="Vite logo" />
// //         </a>
// //         <a href="https://reactjs.org" target="_blank">
// //           <img src={reactLogo} className="logo react" alt="React logo" />
// //         </a>
// //       </div>
// //       <h1>Vite + React</h1>
// //       <div className="card">
// //         <button onClick={() => setCount((count) => count + 1)}>
// //           count is {count}
// //         </button>
// //         <p>
// //           Edit <code>src/App.jsx</code> and save to test HMR
// //         </p>
// //       </div>
// //       <p className="read-the-docs">
// //         Click on the Vite and React logos to learn more
// //       </p>
// //     </div>
// //   )
// // }

// // export default App

import ToDo from "./newToDoList/newToDoList";

function App() {
  return (
    <div className="App">
      <ToDo />
    </div>
  );
}
export default App;
