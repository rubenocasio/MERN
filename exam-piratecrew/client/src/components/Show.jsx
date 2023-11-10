import React, {useState, useEffect} from 'react';
import Axios from 'axios'
import { useParams, useNavigate, Link } from "react-router-dom";


const Show = (props) => {
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
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        Axios.get(`http://localhost:8000/api/pirates/${id}`)
            .then((res) => setPirate(res.data.results))
            .catch((err) => console.log(err));
    }, [id])

    const destroyPirate = () => {
        Axios.delete(`http://localhost:8000/api/destroy/pirates/${id}`)
            .then(res => navigate('/'))
            .catch(err => console.log(err))
    }
    return (
        <div className="mx-auto p-5 col-6">
                <h3>Name: {pirate.name}</h3>
                <p><img src={pirate.img} alt={pirate.name}/></p>
                <p>Pirate Treasure: {pirate.treasure}</p>
                <p>Pirate Phrase: {pirate.phrase}</p>
                <p>Pirate Position: {pirate.position}</p>
                <p>Peg Leg: {pirate.peg}</p>
                <p>Eye patch: {pirate.eye}</p>
                <p>Hook Hand: {pirate.hook}</p>
                <button id="btn2" className="btn btn-danger" onClick={destroyPirate}>Adopt: {pirate.name}?</button>
                <button id="btn2" className="btn btn-warning"><Link to={`/update/${pirate._id}`}>Update Pirate</Link></button>
        </div>
    )
}

export default Show;