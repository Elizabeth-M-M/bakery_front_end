import React from 'react'

const ProductItem = () => {
  return (
    <div className="col-sm-6 col-md-6 col-xs-6">
        <div className="thumbnail">
          <div className="col-sm-6 col-md-6 col-xs-12 image-container">
            <img src="https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=600" style={{"height":200,"margin-left":-15}} />
          </div>
          <div className="col-sm-6 col-md-6 col-xs-12">
            <h3>Yummy 1</h3>
            <h5>11 Ksh</h5>
            <button className='btn btn-warning'>More</button>
          </div>
        </div>
      </div>
  )
}

export default ProductItem