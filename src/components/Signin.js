import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormInput from "./FormInput";

const Signin = ({ handleUserId,handleUser }) => {
  const navigator = useNavigate();
  const [signInFormData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isChecked, setIsChecked] = useState(false);
  
  
  

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
    // console.log(event.target.checked)
    setIsChecked(event.target.checked)
   
    
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
    let userSession
     if (isChecked==true) {
       userSession = "staff";
     } else {
       userSession = "user";
     }
  

    fetch(`http://localhost:9292/${userSession}`, {
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
            "Please enter the registered email and password"
          );
        } else {
          if(userSession!=="staff"){
              handleUserId(user.id);
              navigator("/");

          }else{
               handleUser(user);
               navigator("/");
          }
         
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
            <div class="col-12">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                  onChange={handleInputs}
                />
                <label class="form-check-label" for="gridCheck">
                  Sign in as staff
                </label>
              </div>
            </div>
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
