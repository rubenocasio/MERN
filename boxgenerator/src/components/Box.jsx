import React, {useState} from 'react'


const Box = (props) => {
    const [color, setColor] = useState("");
    const [boxSize, setBoxSize] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const newBox = { color: color, boxSize: boxSize };
        props.onNewBox(newBox);
        setColor("");
        setBoxSize("");
    };

    return (
        <div className='container'>
            <div className='form'>
                <form onSubmit={handleSubmit}>
                <label>Color: </label>
                <input type="text" placeholder="What color would you like to use" onChange={(e) => setColor(e.target.value)} value={color} />
                <br />
                <label>Size: </label>
                <input type="text" placeholder="Enter a px size without the px:" onChange={(e) => setBoxSize(e.target.value)} value={boxSize} />
                <br />
                <input className="btn" type="submit" value="Add" />
                <br />
                </form>
            </div>
            <div className="box">
                {props.boxes.map((box, i) => {
                    return (<div key={i} style={{ background: box.color, height: box.boxSize + "px", width: box.boxSize + "px",}} className="box"/>)})}
            </div>
        </div>
    )
}

export default Box;