import "./App.css";
import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";
import Navbar from "./Navbar";
import About from "./About";
import Team from "./Team";
import Signin from "./Signin";
import Footer from "./Footer";
import ForgotPassword from "./ForgotPassword";
import Products from "./Products";
import ProductItemOne from "./ProductItemOne";
import Cart from "./Cart";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState("");
  const [userId, setUserId] = useState(0);
  // const[sessionId, setSessionId]= useState(1)
  const [carts, setCarts] = useState([]);
console.log(userId)
  useEffect(() => {
    fetch(`http://localhost:9292/user/${userId}`)
      .then((r) => r.json())
      .then((data) => {
        setUser(data);
        setCarts(data.carts);
      });
  }, [userId]);
  useEffect(() => {
    if (user !== "") {
      setIsLoggedIn(true);
    }
  }, [user]);

  useEffect(() => {
    fetch("http://localhost:9292/products")
      .then((r) => r.json())
      .then((data) => setProducts(data));
  }, []);
  function onAddCart(data) {
    setCarts([...carts, data]);
  }
  function deleteCart(id){
   let newOnes = carts.filter((cart) => cart.id !== id);
  //  console.log(id)
   setCarts(newOnes)
  }
console.log(userId)
  return (
    <div className="bg-theme">
      <Navbar
        isLoggedIn={isLoggedIn}
        user={user}
        onSetUser={setUser}
        handleLogIn={setIsLoggedIn}
      />
      <Routes>
        <Route
          path="/"
          element={<Home username={user.name} isLoggedIn={isLoggedIn} />}
        ></Route>
        <Route path="/signup" element={<Signup />}>
          Sign up
        </Route>
        <Route path="/forgotpassword" element={<ForgotPassword />}>
          Forgot Password
        </Route>
        <Route path="/signin" element={<Signin handleUserId={setUserId} />}>
          Sign in
        </Route>
        <Route path="/login" element={<Login handleUser={setUserId} />}>
          Log in
        </Route>
        <Route path="/about" element={<About />}>
          About
        </Route>
        <Route path="/team" element={<Team />}>
          Team
        </Route>
        <Route
          path="/cart"
          element={
            <Cart
              carts={carts}
              user={user}
              handleCarts={setCarts}
              handleDeletedCart={deleteCart}
              addCart={onAddCart}
            />
          }
        >
          Team
        </Route>
        <Route path="/products" element={<Products products={products} />}>
          Products
        </Route>
        <Route
          path="/products/:productId"
          element={
            <ProductItemOne
              products={products}
              user={user}
              addCart={onAddCart}
            />
          }
        >
          Products
        </Route>
        {/* <Route path="products" element={<Products/>}>
        <Route path="/products/:productId" element={<ProductItemOne/>} />

      </Route> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
