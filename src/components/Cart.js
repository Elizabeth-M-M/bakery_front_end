import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";

import { useNavigate } from "react-router-dom";

const Cart = ({
  carts,
  user,
  handleCarts,
  handleDeletedCart,
  addCart,
  handleSetCarts,
}) => {
  const navigator = useNavigate();
  const [sum, setSum] = useState(0);
  const [userId, setUserId] = useState(user.id);
  const [AddUserFormData, setFormData] = useState({
    agree_to_pay: "",
    telephone_no: "",
    location: "",
  });
  // console.log(user);
  const [order, setOrder] = useState(0);

  useEffect(() => {
    if (userId !== undefined) {
      fetch(`http://localhost:9292/carts/sum/${userId}`)
        .then((r) => r.json())
        .then((data) => {
          if (carts == []) {
            setSum(0);
          } else {
            setSum(data.sum);
          }
        });
    }
  }, [carts]);

  function handleInputs(event) {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({
      ...AddUserFormData,
      [name]: value,
    });
  }
  // console.log(orders);

  function handleSubmit() {
    // onAddData(AddUserFormData);
    if (user.location == null) {
      fetch(`http://localhost:9292/user/${userId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          agree_to_pay: AddUserFormData.agree_to_pay,
          telephone_no: AddUserFormData.telephone_no,
          location: AddUserFormData.location,
        }),
      })
        .then((r) => r.json())
        .then((data) => console.log(data));

      setFormData({
        agree_to_pay: "",
        telephone_no: "",
        location: "",
      });

      Object.keys(carts).map((cartID) => {
        let cartId = carts[cartID].id;

        fetch(`http://localhost:9292/carts/${cartId}`, {
          method: "DELETE",
        });
      });

      handleSetCarts([]);
      navigator("/");
    } else {
      Object.keys(carts).map((cartID) => {
        let cartId = carts[cartID].id;

        fetch(`http://localhost:9292/carts/${cartId}`, {
          method: "DELETE",
        });
      });

      handleSetCarts([]);
      navigator("/");
    }
  }
  // console.log(order)
  const renderCarts = Object.keys(carts).map((cartID) => (
    <CartItem
      key={cartID}
      cartId={carts[cartID].id}
      product={carts[cartID].product}
      handleDeletedCart={handleDeletedCart}
      user={user}
      addCart={addCart}
    />
  ));
  // console.log(sum)

  return (
    <div className="container">
      <h4 className="my-5 text-center theme-color">Shopping Cart</h4>

      <table className="table bg-content">
        <tbody>{renderCarts}</tbody>
      </table>
      <div className="w-50 m-auto">
        <table className="table ">
          <tbody>
            <tr>
              <td>subtotal</td>
              <td>{sum}</td>
            </tr>
            <tr>
              <td>shipping</td>
              <td>500</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>{sum + 500}</td>
            </tr>
          </tbody>
        </table>

        <button
          type="button"
          className="btn-style"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Proceed to Checkout
        </button>
      </div>

      <div
        className="modal"
        id="exampleModal"
        // tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title text-center"></h3>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              <p className="text-center">We are happy to make you happy</p>
              {user.location == null ? (
                <form>
                  <div className="mb-3">
                    <label htmlFor="location" className="col-form-label">
                      Delivery Location:
                    </label>
                    <input
                      type="text"
                      placeholder=""
                      className="form-control"
                      onChange={handleInputs}
                      name="location"
                      value={AddUserFormData.location}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="telephone" className="col-form-label">
                      Telephone Number:
                    </label>
                    <input
                      type="text"
                      placeholder="+254..."
                      className="form-control"
                      onChange={handleInputs}
                      name="telephone_no"
                      value={AddUserFormData.telephone_no}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="pay" className="col-form-label">
                      Pay on Delivery:
                    </label>
                    <input
                      type="text"
                      placeholder="yes/no"
                      className="form-control"
                      onChange={handleInputs}
                      name="agree_to_pay"
                      value={AddUserFormData.agree_to_pay}
                    />
                  </div>
                  <p>Total : {sum + 500}</p>
                </form>
              ) : (
                <p>Awesome, yummy snacks on your way. Finish your order.</p>
              )}
              <button
                type="button"
                className="btn-style"
                data-bs-dismiss="modal"
                onClick={handleSubmit}
              >
                Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

//  <div className="modal fade" tabindex="-1" id="order">
//       <div className="modal-dialog">
//         <div className="modal-content">
//           <div className="modal-header">
//             <h3 className="modal-title text-center"></h3>
//             <button type="button"
//             className="btn-close"
//             data-bs-dismiss="modal"></button>
//           </div>
//           <div className="modal-body">
//             <p className="text-center">This information is kept secret</p>
//             <form onSubmit={handleSubmit} >
//               <div className="mb-3">
//                 <label htmlFor="location" className="col-form-label">Delivery Location:</label>
//                 <input type="text" placeholder="" className="form-control" onChange={handleInputs} name="location" value={AddUserFormData.location}/>
//               </div>
//               <div className="mb-3">
//                 <label htmlFor="telephone" className="col-form-label">Telephone Number:</label>
//                 <input type="text" placeholder="+254..." className="form-control" onChange={handleInputs} name="telephone_no" value={AddUserFormData.telephone_no}/>
//               </div>
//               <div className="mb-3">
//                 <label htmlFor="pay" className="col-form-label">Pay on Delivery:</label>
//                 <input type="text" placeholder="yes/no" className="form-control" onChange={handleInputs} name="agree_to_pay" value={AddUserFormData.agree_to_pay}/>
//               </div>
//               <p>Total :  {sum+500}</p>
//             </form>
//           </div>
//           <div className="modal-footer">
//             <button type="button"
//             className="btn btn-warning"
//             data-bs-dismiss="modal">Close</button>
//             <button  className="btn btn-warning" >Submit</button>
//           </div>
//         </div>
//       </div>
//     </div>
