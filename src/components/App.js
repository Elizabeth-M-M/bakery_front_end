import './App.css';
import { Routes, Route} from "react-router-dom";
import React, {useState, useEffect} from 'react'
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import Navbar from './Navbar';
import About from './About';
import Team from './Team';
import Signin from './Signin';
import Footer from './Footer'
import ForgotPassword from './ForgotPassword';
import Products from './Products';
import ProductItemOne from './ProductItemOne'
import Cart from './Cart';

function App() {
  const[products, setProducts]= useState([])
  
  useEffect(() => {
    fetch('http://localhost:9292/products').then(r=>r.json()).then(data=>setProducts(data))
  }, []);
  return (
    <div >
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/signup' element={<Signup/>}>Sign up</Route>
        <Route path='/forgotpassword' element={<ForgotPassword/>}>Forgot Password</Route>
        <Route path='/signin' element={<Signin/>}>Sign in</Route>
        <Route path='/login' element={<Login/>}>Log in</Route>
        <Route path='/about' element={<About/>}>About</Route>
        <Route path='/team' element={<Team/>}>Team</Route>
        <Route path='/cart' element={<Cart/>}>Team</Route>
        <Route path='/products' element={<Products products={products}/>}>Products</Route>
        <Route path='/products/:productId' element={<ProductItemOne products={products}/>}>Products</Route>
        {/* <Route path="products" element={<Products/>}>
        <Route path="/products/:productId" element={<ProductItemOne/>} />
        
      </Route> */}

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
