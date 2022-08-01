import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductsList from "../components/ProductsList";
import Products from "../components/Products";

function Main(props) {
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

    const removeFromDom = (id) => {
      setProducts(products.filter((products) => products._id !== id));
    };
    
  return (
    <div className="list">
      {loaded && <Products products={products} />}
      {loaded && <ProductsList removeFromDom={removeFromDom} />}
    </div>
  );
};

export default Main;
