import "./App.css";
import Footer from "./components/footer/Footer";
import Todo from "./container/Todo";
import { HeaderComp } from "./components/header/HeaderComp";
import { useState } from "react";

function App() {
  const [toggle, setToggle] = useState(true)
  return (
    <div>
      <HeaderComp></HeaderComp>
      {toggle && <Todo />}
      <Footer />
    </div>
  );
}

export default App;
