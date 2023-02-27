import React from 'react'

const Signup = () => {
  return (
    <>
      <h2 className="text-center">Sign up page</h2>
    <div className="container">
      <div className="col-6 m-auto mt-5">
        <form className="row g-3">
          <div className="col-md-6">
            <label htmlFor="username" className="form-label">Username</label>
            <input type="text" className="form-control" id="username"/>
          </div>
          <div className="col-md-6">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email"/>
          </div>
          <div className="col-md-6">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password1"/>
          </div>
          <div className="col-md-6">
            <label htmlFor="password" className="form-label">Confirm Password</label>
            <input type="password" className="form-control" id="password2"/>
          </div>
          <div className="col-12">
            <label htmlFor="secret-key" className="form-label">Secret question: What animal do you like the most?</label>
            <input type="text" className="form-control" id="secret_key" placeholder="Make sure not to forget"/>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">Sign Up</button>
          </div>
        </form>
      </div>
    </div>    
    </>
  )
}

export default Signup