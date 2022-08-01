import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios';

function Details() {
    const [products, setProducts] = useState({})
    const { id } = useParams();

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                setProducts(res.data.project);
                console.log(res.data.project)
            })
            .catch(err => console.log(err));
    }, [id])

    return (
        <div className='details'>
            <p>Title: {products.title}</p>
            <p>Price: {products.price}</p>
            <p>Description: {products.description}</p>
        </div>
    );
}
export default Details;
