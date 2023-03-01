import React, {useState, useEffect} from 'react'
import CartItem from './CartItem'
import SummaryCart from './SummaryCart'
const Cart = () => {
   const[carts, setCarts]= useState([])

  useEffect(() => {
    fetch('http://localhost:9292/carts').then(r=>r.json()).then(data=>setCarts(data))
  }, []);
 
  const renderCarts = Object.keys(carts).map((cartID) => <CartItem product={carts[cartID].product}/>)
 
  return (
    <div className='container'>
      <h4 className='my-5'>Shopping Cart</h4>
      
      <table className="table table-success ">
          
          <tbody>
            {renderCarts}
          </tbody>
        </table>
        <div>
          <table className="table table-success ">
          
          <tbody>
            <SummaryCart/>
          </tbody>
        </table>
        <button>Proceed to checkout</button>
        </div>
    

    </div>
  )
}

export default Cart