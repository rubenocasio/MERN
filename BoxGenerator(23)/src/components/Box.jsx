import React, { useState } from 'react';

const Box = ({ onNewBox, boxes }) => {
    const [formData, setFormData] = useState({ color: "", boxSize: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onNewBox(formData);
        setFormData({ color: "", boxSize: "" });
    };

    return (
        <div className='container'>
            <div className='form'>
                <form onSubmit={handleSubmit}>
                    <label>Color: </label>
                    <input type="text" name="color" placeholder="Enter color" onChange={handleChange} value={formData.color} />
                    <br />
                    <label>Size: </label>
                    <input type="text" name="boxSize" placeholder="Enter size (px)" onChange={handleChange} value={formData.boxSize} />
                    <br />
                    <input className="btn" type="submit" value="Add" />
                </form>
            </div>
            <div className="box-div">
                {boxes.map((box, i) => (
                    <div key={i} style={{ background: box.color, height: box.boxSize + "px", width: box.boxSize + "px" }} className="box" />
                ))}
            </div>
        </div>
    );
};

export default Box;
