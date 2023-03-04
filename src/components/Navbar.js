import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ user, onSetUser, handleLogIn }) => {

  function handleLogOut() {
    onSetUser("");
    handleLogIn(false);
  }

  return (
    <nav className="navbar navbar-expand-lg" id="navtitle">
      <div className="container">
        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <h4 href="#" className="theme-color me-3">
          So H
        </h4>
        <div className="loginb">
          {user == "" ? (
            <a href="/">
              <Link to="/signin">Log In</Link>
            </a>
          ) : (
            <a href="#" onClick={handleLogOut}>
              {" "}
              Log out
            </a>
          )}
          <span>
            <Link to="/cart">
              <i className="bi bi-cart4 h4"></i>
            </Link>
          </span>
        </div>
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about">about</Link>
            </li>
            <li className="nav-item">
              <Link to="/Team">Team</Link>
            </li>
            <li className="nav-item">
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
