import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductsList from "../components/ProductsList";

function Main() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/products")
    .then(res => setProducts(res.data))
    .catch(err=>console.log("Error", err))
  }, []);
  
  return (
    <div>
      <br />
      <hr />
      <ProductsList products={products} />
    </div>
  );
};

export default Main;
