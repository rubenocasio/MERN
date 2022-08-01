import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductsList from "../components/ProductsList";
import Products from "../components/Products";

function Main() {
  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8000/api/products")
    .then(res => {
      setProducts(res.data.projects);
      setLoaded(true)
    })
    .catch(err=>console.log("Error", err))
  }, []);
  
  return (
    <div className="list">
      {loaded && <Products products={products} />}
      {loaded && <ProductsList />}
    </div>
  );
};

export default Main;
