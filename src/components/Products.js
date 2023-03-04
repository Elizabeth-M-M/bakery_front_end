import React from "react";
import ProductItem from "./ProductItem";

const Products = ({ products }) => {
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
