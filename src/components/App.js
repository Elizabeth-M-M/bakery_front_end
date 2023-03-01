import './App.css';
import { Routes, Route} from "react-router-dom";
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import Navbar from './Navbar';
import About from './About';
import Team from './Team';
import Signin from './Signin';
import Footer from './Footer'
import ForgotPassword from './ForgotPassword';

function App() {
  return (
    <div >
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/signup' element={<Signup/>}>Sign up</Route>
        <Route path='/forgotpassword' element={<ForgotPassword/>}>Forgot Password</Route>
        <Route path='/signin' element={<Signin/>}>Sign in</Route>
        <Route path='/login' element={<Login/>}>Log in</Route>
        <Route path='/' element={<Home/>}>Log in</Route>
        <Route path='/about' element={<About/>}>Log in</Route>
        <Route path='/team' element={<Team/>}>Log in</Route>

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
