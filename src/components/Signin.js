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
      // required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage: "Invalid Password",
      label: "Password",
      // required: true,
    },
  ];
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
        if(user==null){
          alert("Please enter the registered email and password, or you can sign up again")
        }else{
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
    <>
      <h2 className="text-center">Log In</h2>
      <div className="container">
        <div className="col-6 m-auto mt-5">
          <form
            className="row g-3 needs-validation"
            onSubmit={handleSubmit}
            novalidate
          >
            {inputs.map((input) => (
              // console.log(input)

              <FormInput
                key={input.id}
                {...input}
                value={signInFormData[input.name]}
                onChange={handleInputs}
              />
            ))}

            {/* <Link to="/forgotpassword">Forgot password?</Link> */}

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
