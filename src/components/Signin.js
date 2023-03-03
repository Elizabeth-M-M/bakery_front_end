import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signin = ({ handleUserId }) => {
  const navigator = useNavigate();
  const [signInFormData, setFormData] = useState({
    email: "",
    password: "",
  });
  // const [sessionId, setSessionId] = useState(null);
  function handleInputs(event) {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({
      ...signInFormData,
      [name]: value,
    });
  }
  // console.log(signInFormData);
  function handleSubmit(event) {
    // console.log(signInFormData)
    event.preventDefault();
    // onAddData(signInFormData);
    fetch("http://localhost:9292/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: signInFormData.email,
        password: signInFormData.password,
      }),
    })
      .then((r) => r.json())
      .then((user) => {
        // setSessionId(user.id)
        handleUserId(user.id);
      });
    setFormData({
      email: "",
      password: "",
    });
    navigator("/");
  }
  // console.log(sessionId)
  // useEffect(() => {
  //         localStorage.setItem("sessionId", JSON.stringify(sessionId));
  //       }, [sessionId]);

  return (
    <>
      <h2 className="text-center">Log in page</h2>
      <div className="container">
        <div className="col-6 m-auto mt-5">
          <form className="row g-3" onSubmit={handleSubmit}>
            <div className="col-md-6">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                onChange={handleInputs}
                name="email"
                value={signInFormData.email}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                onChange={handleInputs}
                name="password"
                value={signInFormData.password}
              />
            </div>
            <Link to="/forgotpassword">Forgot password?</Link>

            <Link to="/signup">Don't have an account?</Link>
            <div className="col-12">
              <button type="submit" className="btn btn-primary">
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signin;
