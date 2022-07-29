import React, { useEffect, useState } from "react";
import axios from "axios";

function ProductsList() {
    const [products, setProducts] = useState({});

        useEffect(() => {
        axios.get("http://localhost:8000/api/products/")
            .then((res) => {
                setProducts(res.data.project);
                console.log(res.data.project);
            });
        }, []);

    return (
        <div className="product-list">
        {products.map((products, index) => {
            return (
            <p key={index}>
                Title: <a href="/api/products/">{products.title}</a>
                <br />
                Price: ${products.price} <br />
                Description: {products.description}
            </p>
            );
        })}
        </div>
    );
}

export default ProductsList;
