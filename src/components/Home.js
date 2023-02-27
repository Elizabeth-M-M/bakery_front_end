import React from 'react'
import {useNavigate } from "react-router-dom";

const Home = () => {
  const navigator= useNavigate()
  function logIn(){
    navigator("/login")
  }
  function signUp(){
    navigator("/signup")
  }

  return (
    <>
    <button type="submit" className="btn btn-primary me-5" onClick={signUp}>Sign Up</button>
    <button type="submit" className="btn btn-primary" onClick={logIn}>Sign in</button>
    </>
  )
}

export default Home