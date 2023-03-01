import React from 'react'
import {useNavigate } from "react-router-dom";

const Login = () => {
   const navigator= useNavigate()
  function signIn(){
    navigator("/signin")
  }
  function signUp(){
    navigator("/signup")
  }
  return (
    <div className='container'>
    <button type="submit" className="btn btn-primary me-5" onClick={signUp}>Sign Up</button>
    <button type="submit" className="btn btn-primary" onClick={signIn}>Sign in</button>
      
    </div>
  )
}

export default Login