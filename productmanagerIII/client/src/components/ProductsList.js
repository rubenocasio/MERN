import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductsList() {
    const [products, setProducts] = useState([]);

        useEffect(() => {
        axios.get("http://localhost:8000/api/products/")
            .then((res) => {
                setProducts(res.data.project);
                console.log(res.data.project);
            });
        }, []);

    return (
        <div>
        {products.map((products, index) => {
            return (
            <p key={index}>
                Title: <Link to={`/api/products/${products._id}`}>{products.title}</Link>
                <br />
                Price: ${products.price.toLocaleString(undefined, { maximumFractionDigits: 2 })} <br />
                Description: {products.description}
            </p>
            );
        })}
        </div>
    );
}

export default ProductsList;
