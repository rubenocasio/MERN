import React, { useState } from "react"
import "../App.css"

function Input({ onNewItem }) {
    const [content, setContent] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if (content) {
            onNewItem({ content, checked: false })
            setContent("")
        }
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter a Task"
                onChange={(e) => setContent(e.target.value)}
                value={content}
            />
            <button type="submit">Add</button>
        </form>
    );
}

export default Input;
