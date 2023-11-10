import React, { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from "react-router-dom";

const Create = (props) => {
    const [name, setName] = useState(props.name);
    const [img, setImg] = useState(props.img);
    const [treasure, setTreasure] = useState(props.treasure);
    const [phrase, setPhrase] = useState(props.phrase);
    const [position, setPosition] = useState(props.position);
    const [peg, setPeg] = useState(props.peg);
    const [eye, setEye] = useState(props.eye);
    const [hook, setHook] = useState(props.hook);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:8000/api/create/pirates", {
            name,
            img,
            treasure,
            phrase,
            position,
            peg,
            eye,
            hook
        })
        .then((res) => {
            if(res.data.results){
                navigate('/');
            }
            else {
                console.log(res.data);
                setErrors(res.data);
            }
        })
        .catch(err =>{console.log(err.data)
        });
    }
    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <div>
                    <label>Pirate Name: </label>
                    {errors.name ? errors.name.message: "" }
                    <input name="name" value={name} onChange={e => setName(e.target.value)}/>
                </div>
                <div>
                    <label>Image URL: </label>
                    {errors.img ? errors.img.message: "" }
                    <input name="img" value={img} onChange={e => setImg(e.target.value)}/>
                </div>
                <div>
                    <label>Treasure Chests: </label>
                    {errors.treasure ? errors.treasure.message: "" }
                    <input type="number" name="treasure" value={treasure} onChange={e => setTreasure(e.target.value)} />
                </div>
                <div>
                    <label>Catch Phrase: </label>
                    {errors.phrase ? errors.phrase.message: "" }
                    <input name="phrase" value={phrase} onChange={e => setPhrase(e.target.value)}/>
                </div>
                <div>
                    <label>Crew Position: </label>
                    {errors.position ? errors.position.message: "" }
                    <select name="position" value={position} onChange={e => setPosition(e.target.value)}>
                        <option value="">Select a position</option>
                        <option value="Captain">Captain</option>
                        <option value="First Mate">First Mate</option>
                        <option value="Quarter Master">Quarter Master</option>
                        <option value="Bootswain">Bootswain</option>
                        <option value="Powder Monkey">Powder Monkey</option>
                    </select>
                </div>
                <div>
                    <label>Peg Leg</label>
                    <input type="checkbox" checked={peg} defaultChecked onChange={e => setPeg(e.target.checked)}/>
                </div>
                <div>
                    <label>Eye Patch</label>
                    <input type="checkbox" checked={eye} defaultChecked onChange={e => setEye(e.target.checked)}/>
                </div>
                <div>
                    <label>Hook Hand</label>
                    <input type="checkbox" checked={hook} defaultChecked onChange={e => setHook(e.target.checked)}/>
                </div>
                <div>
                    <button type="button" className="btn btn-warning" onClick={() => navigate("/")}>Cancel</button>{' | '}
                    <button className="btn btn-success">Add Pirate</button>
                </div>
            </form>
        </div>
    )
}

export default Create;

