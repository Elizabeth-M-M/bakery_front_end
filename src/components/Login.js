import React from 'react'
import {useNavigate } from "react-router-dom";
import Signup from './Signup';

const Login = ({handleUser}) => {
   const navigator= useNavigate()
  function signIn(){
    navigator("/signin")
  }
  function signUp(){
    navigator("/signup")
  }
  return (
    <div className='container'>
      <Signup handleUser={handleUser}/>
    {/* <button type="submit" className="btn btn-primary me-5" onClick={signUp} setUser={setUser}>Sign Up</button>
    <button type="submit" className="btn btn-primary" onClick={signIn} >Sign in</button> */}
      
    </div>
  )
}

export default Login