import React from 'react'
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <>
    <h2 className="text-center">Recover Password</h2>
    <div className="container">
      <div className="col-6 m-auto mt-5">
        <form className="row g-3">
          <div className="col-md-6">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email"/>
          </div>
          <div className="col-12">
            <label htmlFor="secret-key" className="form-label">Secret question: What is your mother's last name?</label>
            <input type="text" className="form-control" id="secret_key"/>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default ForgotPassword