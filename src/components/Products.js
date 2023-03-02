import React from 'react'
import ProductItem from './ProductItem'
// import ProductItemOne from './ProductItemOne'
// import { Route, useMatch, Routes } from "react-router-dom";

const Products = ({products}) => {

  return (
    <>
    <div className='container'>
      {/* <form className="d-flex col-12 col-md-6" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn-style" type="submit">Search</button>
      </form> */}

      <div className='row mt-5'>
        {products.map((product) => <ProductItem key={product.id} product={product}/>)}
      </div>
    </div>

    {/* <Route exact path={match.url}>
        <h3>Choose a yummy snack from the list above</h3>
      </Route>
      <Route path={`${match.url}/:id`}>
        <ProductItemOne product={products} />
      </Route> */}
      {/* <Routes>
        <Route path='${match.url}/:id' element={<ProductItemOne product={products} />}></Route>
      </Routes> */}
    </>

  )
}

export default Products