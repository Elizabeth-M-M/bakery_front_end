import React from 'react'
import { Link } from "react-router-dom";

const ProductItem = ({product}) => {
  const{id, name, description, price, image}= product
  return (
    <div
      className="card mb-3 me-3 shadow-sm "
      id="glass-texture"
      style={{ maxWidth: 500 }}
    >
      <div className="row g-0 ">
        <div className="col-md-7">
          <img src={image} className="img-fluid rounded-start" alt={name} />
        </div>
        <div className="col-md-5">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">Ksh. {price}.00</p>
            <Link to={`/products/${id}`} className='btn-style-a fw-bold'>More</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem



{/* <div className="col-sm-6 col-md-6 col-xs-6">
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
      </div> */}