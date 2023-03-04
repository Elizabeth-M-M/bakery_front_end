import React from 'react'
import {useNavigate } from "react-router-dom";


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
      {/* <Signup handleUser={handleUser}/> */}
    </div>
  )
}

export default Login