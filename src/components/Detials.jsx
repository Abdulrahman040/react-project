import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
export default function Detials() {
  const params = useParams();
  const [product, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-2 text-center">
            <img
              className="w-50 mx-auto text-center "
              src={product.image}
              alt=""
            />
          </div>
          <div className="col-md-6 mb-2 mt-5">
            <h1>{product.title}</h1>
            <h3>{product.category}</h3>
            <h3>{product.price}$</h3>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
