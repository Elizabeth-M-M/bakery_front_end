import React from 'react'
import ProductItem from './ProductItem'

const Products = () => {
  return (
    <div className='container'>
    <form className="d-flex col-12 col-md-6" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>

    <div className='row mt-5'>
      
      <ProductItem/>
    </div>
    



    </div>
  )
}

export default Products