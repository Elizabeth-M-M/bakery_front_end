import React from 'react'

const TotalOrderItem = ({ orderId, date, user, product }) => {
  const { id, name, description, price, image } = product;
  // console.log(product);
  let dateUsed = new Date(date).toLocaleString().split(",")[0];
  console.log(dateUsed);
  return (
    <tr className="shop-cart">
      <td>{orderId}</td>
      <td>{dateUsed}</td>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.telephone_no}</td>
      <td>{user.location}</td>
      <td className="w-25">
        <img src={image} alt="" />
      </td>
      <td>{name}</td>

      <td>{price}</td>
    </tr>
  );
};

export default TotalOrderItem