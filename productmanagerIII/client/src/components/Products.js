import React, {useState } from "react";
import axios from "axios";


function Products() {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const onSubmitHandler = () => {
    let data = {title, price, description}
    axios.post("http://localhost:8000/api/products/new", data)
        .then((res) => {
            console.log("This is from the products form " + data)
        })
        .catch((err) => console.log(err));
};
    return (
        <div className="form">
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
        </div>
    );
};

export default Products;