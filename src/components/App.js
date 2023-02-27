import './App.css';
import { Routes, Route} from "react-router-dom";
import Login from './Login';
import Signup from './Signup';
import Home from './Home';

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/signup' element={<Signup/>}>Sign up</Route>
        <Route path='/login' element={<Login/>}>Log in</Route>

      </Routes>
    </div>
  );
}

export default App;
