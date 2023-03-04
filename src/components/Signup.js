import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = ({ handleUser }) => {
  const navigator = useNavigate();
  const [signUpFormData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    secret_key: "",
  });
  function handleInputs(event) {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({
      ...signUpFormData,
      [name]: value,
    });
  }
  // console.log(signUpFormData);
  function handleSubmit(event) {
    event.preventDefault();
    // onAddData(signUpFormData);

    fetch("http://localhost:9292/usersession", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signUpFormData),
    })
      .then((r) => r.json())
      .then((user) => {
        handleUser(user.id);
      });

    setFormData({
      name: "",
      username: "",
      email: "",
      password: "",
      secret_key: "",
    });
    navigator("/");
  }

  return (
    <>
      <h2 className="text-center">Sign Up</h2>
      <div className="container">
        <div className="col-6 m-auto mt-5">
          <form
            className="row g-3 needs-validation"
            onSubmit={handleSubmit}
            novalidate
          >
            <div className="col-md-6">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                onChange={handleInputs}
                name="name"
                value={signUpFormData.name}
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                onChange={handleInputs}
                name="username"
                value={signUpFormData.username}
                required
              />
            </div>
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
                value={signUpFormData.email}
                required
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
                value={signUpFormData.password}
                required
              />
            </div>
            <div className="col-12">
              <label htmlFor="secret-key" className="form-label">
                Secret question: What is your mother's last name?
              </label>
              <input
                type="text"
                className="form-control"
                id="secret_key"
                placeholder="Make sure not to forget"
                onChange={handleInputs}
                name="secret_key"
                value={signUpFormData.secret_key}
                required
              />
            </div>
            <Link to="/signin">Already have an account?</Link>
            <div className="col-12">
              <button type="submit" className="btn btn-primary">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
