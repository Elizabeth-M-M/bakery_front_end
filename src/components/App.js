import "./App.css";
import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";

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
import Order from "./Order";
import TotalOrders from "./TotalOrders";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [products, setProducts] = useState([]); //From fetching in the db
  const [user, setUser] = useState(""); //Set by fetch using userId from log in or sign up
  const [userId, setUserId] = useState(0); //Set by userId from log in or sign up
  const [carts, setCarts] = useState([]); //Set by fetch using userId from log in or sign up
  // console.log(userId)
  useEffect(() => {
    fetch(`http://localhost:9292/user/${userId}`)
      .then((r) => r.json())
      .then((data) => {
        setUser(data);
        // console.log(data.carts);
        setCarts(data.carts);
      });
  }, [userId]);

  useEffect(() => {
    if (user !== "") {
      setIsLoggedIn(true);
    }
  }, [user]);
// console.log(userId)
// console.log(user)
  useEffect(() => {
    fetch("http://localhost:9292/products")
      .then((r) => r.json())
      .then((data) => setProducts(data));
  }, []);
  // From ProductItemOne or the Cart component itself
  function onAddCart(data) {
    setCarts([...carts, data]);
  }
  // From the cart component
  function deleteCart(id) {
    let newOnes = carts.filter((cart) => cart.id !== id);
    console.log(user);
    setCarts(newOnes);
  }
  // console.log(userId)
  return (
    <div className="bg-theme">
      <Navbar
        isLoggedIn={isLoggedIn}
        user={user}
        onSetUser={setUser}
        handleLogIn={setIsLoggedIn}
        logged={isLoggedIn}
      />
      <Routes>
        <Route
          path="/"
          element={<Home user={user} isLoggedIn={isLoggedIn} />}
        ></Route>
        <Route path="/signup" element={<Signup handleUser={setUserId} />}>
          Sign up
        </Route>
        <Route path="/forgotpassword" element={<ForgotPassword />}>
          Forgot Password
        </Route>
        <Route
          path="/signin"
          element={<Signin handleUserId={setUserId} handleUser={setUser} />}
        >
          Sign in
        </Route>

        <Route path="/about" element={<About />}>
          About
        </Route>
        <Route path="/orders" element={<Order user={user} />}>
          Order
        </Route>
        <Route path="/totalorders" element={<TotalOrders/>}>
          total
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
              handleSetCarts={setCarts}
              handleSetUser={setUser}
              products={products}
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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
