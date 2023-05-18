import React, { useState, useEffect } from "react";
import TotalOrderItem from "./TotalOrderItem";

const TotalOrders = () => {
  const [orders, setOrders] = useState([]);
  

  useEffect(() => {
    fetch(`http://localhost:9292/orders`)
      .then((r) => r.json())
      .then((data) => {
        // console.log(data)
        setOrders(data)
        // setUser(data);
        // setOrders(data.orders);
        // setCarts(data.carts);
      });
  }, []);

  const renderOrders = Object.keys(orders).map((orderID) => (
    <TotalOrderItem
      key={orderID}
      orderId={orders[orderID].id}
      date={orders[orderID].created_at}
      product={orders[orderID].item}
      user={orders[orderID].orderer}
    />
  ));
  return (
    <div className="container page-cart-height text-center">
      <h4 className="my-5 text-center theme-color">Customers Orders</h4>
      <table className="table bg-content">
        <thead>
          <th>Order Id</th>
          <th>Date bought</th>
          <th>User ID</th>
          <th>Customer name</th>
          <th>Customer Phone</th>
          <th>Customer Location</th>
          <th>Image</th>
          <th>Cake name</th>

          <th>Price</th>
        </thead>
        <tbody>{renderOrders}</tbody>
      </table>
    </div>
  );
};

export default TotalOrders;
