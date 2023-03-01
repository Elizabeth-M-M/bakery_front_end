import React from 'react'
import { Link } from "react-router-dom";

const ProductItem = ({product}) => {
  const{id, name, description, price, image}= product
  return (
    <div className="col-sm-6 col-md-6 col-xs-6">
        <div className="thumbnail">
          <div className="col-sm-6 col-md-6 col-xs-12 image-container">
            <img src={image} style={{"height":200,"margin-left":-15}} />
          </div>
          <div className="col-sm-6 col-md-6 col-xs-12">
            <h3>{name}</h3>
            <h5>{price} Ksh</h5>
            <Link to={`/products/${id}`}>more</Link>
          </div>
        </div>
      </div>
  )
}

export default ProductItem