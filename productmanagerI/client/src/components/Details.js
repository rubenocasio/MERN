import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Details(props) {
    const [products, setProducts] = useState({})
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${props._id}`)
            .then(res => setProducts(res.data))
    }, [props._id])
    return (
        <div>
            <p>Title: {products.title}</p>
            <p>Price: {products.price}</p>
            <p>Description: {products.description}</p>
        </div>
    )
}
export default Details;
