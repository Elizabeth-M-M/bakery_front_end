import React from 'react'

const FormInput = (props) => {
  const{label, errorMessage, onChange, id, ...input}=props
  return (
    <div className="col-md-6">
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
}

export default FormInput