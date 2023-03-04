import React, { useState } from "react";
// Not currently being used, to be incorporated
const ForgotPassword = () => {
  const [forgotPasswordFormData, setFormData] = useState({
    email: "",
    secret_key: "",
  });
  function handleInputs(event) {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({
      ...forgotPasswordFormData,
      [name]: value,
    });
  }
  console.log(forgotPasswordFormData);
  function handleSubmit(event) {
    event.preventDefault();
    // onAddData(forgotPasswordFormData);
    setFormData({
      email: "",
      secret_key: "",
    });
  }
  return (
    <>
      <h2 className="text-center">Recover Password</h2>
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
                value={forgotPasswordFormData.email}
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
                onChange={handleInputs}
                name="secret_key"
                value={forgotPasswordFormData.secret_key}
              />
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
