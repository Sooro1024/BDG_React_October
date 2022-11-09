
import './App.css';
import Footer from './components/footer/Footer'
import Todo from './container/Todo'
import {HeaderComp} from './components/header/HeaderComp'

function App() {
  return (
    <div>
      
    <HeaderComp></HeaderComp>
    <Todo />
    <Footer />
    
    </div>
  );
}

export default App;
