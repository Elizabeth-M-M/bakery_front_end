import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormInput from "./FormInput";

const Signin = ({ handleUserId }) => {
  const navigator = useNavigate();
  const [signInFormData, setFormData] = useState({
    email: "",
    password: "",
  });

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Invalid Email",
      label: "Email",
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage: "Invalid Password",
      label: "Password",
    },
  ];

  function handleInputs(event) {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({
      ...signInFormData,
      [name]: value,
    });
  }
  // This fetch checks if email and password exists in the database. If not found, user is promted to re-enter the inputs or sign up. If found, a user can make orders
  function handleSubmit(event) {
    event.preventDefault();

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
        if (user == null) {
          alert(
            "Please enter the registered email and password, or you can sign up again"
          );
        } else {
          handleUserId(user.id);
          navigator("/");
        }
      });
    setFormData({
      email: "",
      password: "",
    });
  }

  return (
    <div className="page-height text-center">
      <h2 className=" theme-color">Log In</h2>
      <div className="container">
        <div className="col-6 m-auto mt-5">
          <form
            className="row g-3 needs-validation"
            onSubmit={handleSubmit}
            novalidate
          >
            {inputs.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={signInFormData[input.name]}
                onChange={handleInputs}
              />
            ))}
            <Link to="/signup">Don't have an account?</Link>
            <div className="col-12">
              <button type="submit" className="btn-style">
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
