import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ProductCart({ product }) {
  const route = useNavigate();
  const hand = () => {
    route(`/detils/${product.id}`);
  };
  return (
    <div className="col-md-3 col-sm-6">
      <div className="card p-3 text-center w-75  ">
        <img src={product.image} height={360} alt="" />
        <h4>{product.title}</h4>
        <h5>{product.category}</h5>
        <h5>{product.price}</h5>
        <button className="btn btn-outline-primary" onClick={hand}>
          تفاصيل
        </button>
      </div>
    </div>
  );
}

export default ProductCart;
