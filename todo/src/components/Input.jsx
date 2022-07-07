import React, { useState } from "react";
import "../App.css";

function Input(props) {
    const emptyItem = { content: "", checked: false };
    const [item, setItem] = useState(emptyItem);

    const handleSubmit = (e) => {
    e.preventDefault();
    props.onNewItem(item);
    setItem(emptyItem);
};
    return (
    <form className="form" onSubmit={handleSubmit}>

    <input type="text" placeholder="Enter a Task" onChange={(e) => setItem({ content: e.target.value, checked: false })} value={item.content}/>

    <button>Add</button>
    
    </form>);
};
export default Input;