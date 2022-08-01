import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";
    
const Update = (props) => {
    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                console.log(res.data.project)
                setTitle(res.data.project.title);
                setPrice(res.data.project.price);
                setDescription(res.data.project.description);
            })
    }, [id]);
    
    const updatePerson = e => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/products/update/" + id, {
            title,
            price,
            description,
        })
        .then((res) => {
            navigate("/");
            console.log(res)
        })
        .catch((err) => console.error(err));
    }
    
    return (
        <div>
            <h1>Update a Person</h1>
            <form onSubmit={updatePerson} className="update">
                <p>
                    <label>Title</label>
                    <br />
                    <input type="text" name='title' value={title} onChange={(e) => setTitle(e.target.value)} />
                </p>
                <p>
                    <label>Price</label>
                    <br />
                    <input type="number" name='price' value={price} onChange={(e) => setPrice(e.target.value)} />
                </p>
                <p>
                    <label>Description</label>
                    <br />
                    <input type="text" name='description' value={description} onChange={(e) => setDescription(e.target.value)} />
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}
    
export default Update;

