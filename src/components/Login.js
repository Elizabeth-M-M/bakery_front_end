import React from 'react'

const Login = () => {
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
          <a href="">Forgot Password?</a>
          <a href="">Don't have an account?</a>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">Sign in</button>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default Login