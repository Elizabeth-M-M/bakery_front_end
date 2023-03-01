import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg" id="navtitle">
      <div className="container">
        <a href="#" className="navbar-brand">Slice of Heaven</a>
        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navMenu">
          <span className="navbar-toggler-icon"></span>
        </button>
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
        <a href="#"><Link to="/login">Login</Link></a>
        <a href="#"><Link to="/cart">Cart</Link></a>
      </div>
    </nav>
  )
}

export default Navbar