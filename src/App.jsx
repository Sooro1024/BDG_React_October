import "./App.css";
import Footer from "./components/footer/Footer";
import TodoCont from "./containers/TodoCont";
import { HeaderComp, Heading } from "./components/header/HeaderComp";

function App() {
  return (
    <div>
      <HeaderComp>
        <Heading />
      </HeaderComp>
      <TodoCont />
      <Footer />
    </div>
  );
}

export default App;
