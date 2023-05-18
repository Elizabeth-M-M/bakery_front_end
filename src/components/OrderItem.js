import React from 'react'

const OrderItem = ({product}) => {
  const { id, name, description, price, image } = product;
  console.log(product)
  return (
    <tr className="shop-cart">
      <td className="w-50">
        <img src={image} alt="" />
      </td>
      <td>{name}</td>
      
      <td>{price}</td>
      
    </tr>
  );
}

export default OrderItem