// ProductList.js
import React, { useEffect, useState } from "react";
import API from "../api/axios";

function ProductList() {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const res = await API.get("/products");
      setProducts(res.data);
    } catch (err) {
      alert("Session expired or unauthorized");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h2>Products</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} - ${p.price}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ProductList;
