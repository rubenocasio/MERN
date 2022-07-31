import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios";


function Products(props) {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    const onSubmitHandler = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/api/products/new", {
        title,
        price,
        description,
    })
        .then((res) => {
            navigate("/api/products/");
            console.log(res.data.project)
        })
        .catch((err) => console.log(err));
};
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title</label>
                <br />
                <input type="text" onChange={(e) => setTitle(e.target.value)} />
            </p>
            <p>
                <label>Price</label>
                <br />
                <input type="number" onChange={(e) => setPrice(e.target.value)} />
            </p>
            <p>
                <label>Description</label>
                <br />
                <input type="text" onChange={(e) => setDescription(e.target.value)} />
            </p>
            <input type="submit" />
    </form>
    );
};

export default Products;