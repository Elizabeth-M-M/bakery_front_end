import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";

const Cart = ({
  carts,
  user,
  handleDeletedCart,
  addCart,
  handleSetCarts,
  handleSetUser,
}) => {
  const navigator = useNavigate();
  const [sum, setSum] = useState(0); //cart product sum
  const [userId, setUserId] = useState(user.id);
  // If user never filled in the location form, they will be prompted to fill the form
  const [addUserFormData, setFormData] = useState({
    agree_to_pay: "",
    telephone_no: "",
    location: "",
  });
// If user is not logged in, the sum in the carts will not be set
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
// The onChange values of form inputs is set using this method
  function handleInputs(event) {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({
      ...addUserFormData,
      [name]: value,
    });
  }
// This method first updates the user details incase they were not filled before and posts them, or if filled, deletes the carts as indication of submission. Planning to post that data to an orders page instead of submission
  function handleSubmit(e) {
    e.preventDefault();
// For a new user, their location variable would be null
if(carts.length===0){
  alert('Please add a cake to the cart')
  navigator('/products')
  return true
}else if (user.location == null) {
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
    } else {
      // Deleted the carts, but I'm planning to post to orders section 
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
// Render carts in a table in the carts page
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
console.log(carts.length)
  return (
    <div className="container page-cart-height text-center">
      <h4 className="my-5 text-center theme-color">Shopping Cart</h4>
      <table className="table bg-content">
        <tbody>{renderCarts}</tbody>
      </table>
      <div className="w-50 m-auto">
        <table className="table ">
          <tbody>
            <tr>
              <td className="fw-bold">Subtotal</td>
              <td>{sum}</td>
            </tr>
            <tr>
              <td>Shipping</td>
              <td>500</td>
            </tr>
            <tr>
              <td className="fw-bold">Total</td>
              <td className="fw-bold">{sum + 500}</td>
            </tr>
          </tbody>
        </table>
        <button
          type="button"
          className="btn-style mt-3"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Proceed to Checkout
        </button>
      </div>
      {/* Modal popup, whose content depends if the user has filled the location form before or not */}
      <div
        className="modal"
        id="exampleModal"
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
                    </div>
                  </form>
                </div>
              ) : (
                <div>
                  <p>Your order is {sum}.Ksh</p>
                  <p>
                    Our yummy slices will be on its way as soon as you click to
                    order.
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
