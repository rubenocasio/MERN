import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductsList(props) {
    const [products, setProducts] = useState([]);
    const { removeFromDom } = props;

        useEffect(() => {
        axios.get("http://localhost:8000/api/products/")
            .then((res) => {
                setProducts(res.data.project);
                console.log(res.data.project);
            });
        }, []);
        
        const deleteProduct = (id) => {
            axios.delete('http://localhost:8000/api/products/delete/' + id)
            .then(res => {
                removeFromDom(props.id);
                console.log(res);
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            <table className="table">
            <thead>
                <tr>
                <th scope="col">Title</th>
                <th scope="col">Price</th>
                <th scope="col">Description</th>
                <th scope="col">Actions</th>
                </tr>
            </thead>
            {products.map((products, index) => {
            return (
            <tbody key={index}>
                <tr >
                <td><Link to={`/api/products/${products._id}`}>{products.title}</Link></td>
                <td>${products.price.toLocaleString(undefined, {maximumFractionDigits: 2,})}</td>
                <td>{products.description}</td>
                <td><Link to={`/api/products/update/${products._id}`}>Edit</Link> <button onClick={(e) => deleteProduct(products._id)}>Delete</button></td>
                </tr>
            </tbody>
            );
            })}
            </table>

        </div>
    );
}

export default ProductsList;
