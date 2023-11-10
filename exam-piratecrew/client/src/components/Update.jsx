import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";

const Update = (props) => {
    const [pirate, setPirate] = useState({
        name: "",
        img:  "",
        treasure: "",
        phrase: "",
        position:"",
        peg:"",
        eye:"",
        hook:"",
    });
    const [errors, setErrors] = useState(setPirate);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        Axios.get(`http://localhost:8000/api/pirates/${id}`)
        .then((res) => setPirate(res.data.results))
        .catch((err) => console.log(err));
    }, [id]);

    const handleSubmit = (e) => {
    e.preventDefault();
    Axios.put(`http://localhost:8000/api/create/pirates/${id}`, pirate)
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
                    <input name="name" value={pirate.name} onChange={handleSubmit}/>
                </div>
                <div>
                    <label>Image URL: </label>
                    {errors.img ? errors.img.message: "" }
                    <input name="img" value={pirate.img} onChange={handleSubmit}/>
                </div>
                <div>
                    <label>Treasure Chests: </label>
                    {errors.treasure ? errors.treasure.message: "" }
                    <input type="number" name="treasure" value={pirate.treasure} onChange={handleSubmit} />
                </div>
                <div>
                    <label>Catch Phrase: </label>
                    {errors.phrase ? errors.phrase.message: "" }
                    <input name="phrase" value={pirate.phrase} onChange={handleSubmit}/>
                </div>
                <div>
                    <label>Crew Position: </label>
                    {errors.position ? errors.position.message: "" }
                    <select name="position" value={pirate.position} onChange={handleSubmit}>
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
                    <input type="checkbox" checked={pirate.peg} defaultChecked onChange={handleSubmit}/>
                </div>
                <div>
                    <label>Eye Patch</label>
                    <input type="checkbox" checked={pirate.eye} defaultChecked onChange={handleSubmit}/>
                </div>
                <div>
                    <label>Hook Hand</label>
                    <input type="checkbox" checked={pirate.hook} defaultChecked onChange={handleSubmit}/>
                </div>
                <div>
                    <button type="button" className="btn btn-warning" onClick={() => navigate("/")}>Cancel</button>
                    <button className="btn btn-success">Update Pirate</button>
                </div>
            </form>
        </div>
    )
}

export default Update;
