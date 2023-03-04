import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const ProductItemOne = ({ products, user, addCart }) => {
  const navigator = useNavigate();
  let { productId } = useParams();
  let chosen = products[productId - 1];
  // console.log(user)
// post a cart entry to the database
  function handleCartAdd() {
    if (user == "") {
      navigator("/signin");
    } else {
      fetch("http://localhost:9292/carts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: user.id,
          product_id: chosen.id,
        }),
      })
        .then((r) => r.json())
        .then((data) => {
          addCart(data);
          navigator("/cart");
        });
    }
  }

  return (
    <div
      className="card mt-5 container"
      id="glass-texture"
      style={{ maxWidth: 1000 }}
    >
      <div className="row g-0 ">
        <div className="col-md-7">
          <img
            src={chosen.image}
            className="img-fluid rounded-start"
            alt={chosen.name}
          />
        </div>
        <div className="col-md-5 ">
          <div className="card-body d-flex flex-column justify-content-between h-100">
            <div>
              <h5 className="card-title py-0 py-sm-4 text-center display-6 theme-color">
                {chosen.name}
              </h5>
              <p className="lh-4">{chosen.description}</p>
            </div>
            <p className="card-text text-center fw-bold">
              Ksh. {chosen.price}.00
            </p>
            <button className="w-100 btn-style" onClick={handleCartAdd}>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItemOne;
