import React from 'react'
import {useParams } from 'react-router-dom';

const ProductItemOne = ({products}) => {
  
  let { productId } = useParams();
  // const{id, name, description, price, image}= products[productId-1]
  let chosen=products[productId-1]
  console.log(products[productId-1])
  return (
    // <h1>hello</h1>
    <div className="col-sm-6 col-md-6 col-xs-6">
        <div className="thumbnail">
          <div className="col-sm-6 col-md-6 col-xs-12 image-container">
            <img src={chosen.image} style={{"height":200,"margin-left":-15}} />
          </div>
          <div className="col-sm-6 col-md-6 col-xs-12">
            <h3>{chosen.name}</h3>
            <p>{chosen.description}</p>
            <h5>{chosen.price} Ksh</h5>
            <button>Add to cart</button>
          </div>
        </div>
      </div>
  )
}

export default ProductItemOne