import React from "react";
// Trying a new form input format
const FormInput = (props) => {
  const { label, errorMessage, onChange, id, ...input } = props;
  return (
    <div className="col-md-6 mb-0 mb-sm-3">
      <label htmlFor={label} className="form-label">
        {label}
      </label>
      <input
        {...input}
        id={label}
        className="form-control"
        onChange={onChange}
        required
      />
      <div class="invalid-feedback">Please provide a valid city.</div>
    </div>
  );
};

export default FormInput;
