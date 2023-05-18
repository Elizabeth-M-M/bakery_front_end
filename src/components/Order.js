import React, {useState, useEffect} from 'react'
import OrderItem from './OrderItem';

const Order = ({user}) => {
  const[orders, setOrders]=useState([])
  const [userId, setUserId] = useState(user.id);


useEffect(() => {
  fetch(`http://localhost:9292/orders/${userId}`)
    .then((r) => r.json())
    .then((data) => {
      // setUser(data);
      setOrders(data);
      // setCarts(data.carts);
    });
}, [userId]);


   const renderOrders = Object.keys(orders).map((orderID) => (
     <OrderItem
       key={orderID}
      
       product={orders[orderID].item}
      
     />
   ));
  return (
    <div className="container page-cart-height text-center">
      <h4 className="my-5 text-center theme-color">Your Order History</h4>
      <table className="table bg-content">
        <tbody>{renderOrders}</tbody>
      </table>
      
    </div>
  );
}

export default Order