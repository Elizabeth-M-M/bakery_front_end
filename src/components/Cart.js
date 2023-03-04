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
  handleSetUser,
}) => {
  const navigator = useNavigate();
  const [sum, setSum] = useState(0);
  const [userId, setUserId] = useState(user.id);
  const [addUserFormData, setFormData] = useState({
    agree_to_pay: "",
    telephone_no: "",
    location: "",
  });

const [nowLocation, setNowLocation]=useState(user.location)
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
      ...addUserFormData,
      [name]: value,
    });
  }
  // console.log(orders);

  function handleSubmit(e) {
    e.preventDefault();
    // onAddData(addUserFormData);
    if (user.location == null) {
      fetch(`http://localhost:9292/user/${userId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          agree_to_pay: addUserFormData.agree_to_pay,
          telephone_no: addUserFormData.telephone_no,
          location: addUserFormData.location,
        }),
      })
        .then((r) => r.json())
        .then((data) => handleSetUser(data));

      setFormData({
        agree_to_pay: "",
        telephone_no: "",
        location: "",
      });

      // Object.keys(carts).map((cartID) => {
      //   let cartId = carts[cartID].id;

      //   fetch(`http://localhost:9292/carts/${cartId}`, {
      //     method: "DELETE",
      //   });
      // });

      // handleSetCarts([]);

      // alert(
      //   `Dear ${user.name}, your order has been recieved and information updated. Click on the close button`
      // );
      // navigator("/");
    } else {
      Object.keys(carts).map((cartID) => {
        let cartId = carts[cartID].id;

        fetch(`http://localhost:9292/carts/${cartId}`, {
          method: "DELETE",
        });
      });

      handleSetCarts([]);
      navigator("/");
      alert("Your order has been recieved. We will contact you soon.");
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
  function handleCloseClick() {
    navigator("/");
  }
 
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
              {user.location == null ? (
                <div>
                  <p className="text-center">We are happy to make you happy</p>
                  <form
                    className="row g-3 needs-validation"
                    onSubmit={handleSubmit}
                    novalidate
                  >
                    <div className="mb-3">
                      <label htmlFor="location" className="col-form-label">
                        Delivery Location:
                      </label>
                      <input
                        type="text"
                        id="location"
                        placeholder=""
                        className="form-control"
                        onChange={handleInputs}
                        name="location"
                        value={addUserFormData.location}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="telephone" className="col-form-label">
                        Telephone Number:
                      </label>
                      <input
                        type="telephone"
                        id="telephone"
                        placeholder="+254..."
                        className="form-control"
                        onChange={handleInputs}
                        name="telephone_no"
                        value={addUserFormData.telephone_no}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="pay" className="col-form-label">
                        Pay on Delivery:
                      </label>
                      <input
                        type="text"
                        id="pay"
                        placeholder="yes/no"
                        className="form-control"
                        onChange={handleInputs}
                        name="agree_to_pay"
                        value={addUserFormData.agree_to_pay}
                        required
                      />
                    </div>

                    <div className="col-12">
                      <button type="submit" className="btn-style me-4">
                        Add Information
                      </button>
                      {/* <button
                      type="button"
                      data-bs-dismiss="modal"
                      className="btn-style"
                      onClick={handleCloseClick}
                    >
                      Close
                    </button> */}
                    </div>
                  </form>
                </div>
              ) : (
                <div>
                  <p>
                    Our yummy slices will be on its way as soon as you click to order.
                  </p>
                  <button
                    type="button"
                    className="btn-style"
                    data-bs-dismiss="modal"
                    onClick={handleSubmit}
                  >
                    Order
                  </button>
                </div>
              )}
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
//                 <input type="text" placeholder="" className="form-control" onChange={handleInputs} name="location" value={addUserFormData.location}/>
//               </div>
//               <div className="mb-3">
//                 <label htmlFor="telephone" className="col-form-label">Telephone Number:</label>
//                 <input type="text" placeholder="+254..." className="form-control" onChange={handleInputs} name="telephone_no" value={addUserFormData.telephone_no}/>
//               </div>
//               <div className="mb-3">
//                 <label htmlFor="pay" className="col-form-label">Pay on Delivery:</label>
//                 <input type="text" placeholder="yes/no" className="form-control" onChange={handleInputs} name="agree_to_pay" value={addUserFormData.agree_to_pay}/>
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
