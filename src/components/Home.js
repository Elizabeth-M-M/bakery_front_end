import React from 'react'
import {useNavigate } from "react-router-dom";

const Home = () => {
  const navigator= useNavigate()
  function handleTaste(){
    navigator("/products")
  }

  return (
    <>
    <section className="p-5 text-center text-sm-start">
      <div className="container">
        <div className="d-sm-flex align-items-center justify-content-between">
          <div className="me-0 me-sm-5">
            <h2>Slice of Heaven</h2>
            <p className="my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ad itaque corporis nisi nihil ipsa magnam debitis voluptates fugit unde.</p>
            <button onClick={handleTaste}
            className='btn btn-warning'>Taste</button>
          </div >
          <div>
            <img src="https://images.pexels.com/photos/2510104/pexels-photo-2510104.jpeg?auto=compress&cs=tinysrgb&w=600" className="img-fluid w-75 d-none d-sm-block" alt="cake-sample"/>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Home