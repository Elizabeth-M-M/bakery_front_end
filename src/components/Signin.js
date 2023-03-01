import React from 'react'
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <>
      <h2 className="text-center">Log in page</h2>
    <div className="container">
      <div className="col-6 m-auto mt-5">
        <form className="row g-3">
          <div className="col-md-6">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email"/>
          </div>
          <div className="col-md-6">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password1"/>
          </div>
          <Link to="/forgotpassword">Forgot password?</Link>
          
          <Link to="/signup">Don't have an account?</Link>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">Sign in</button>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default Signin