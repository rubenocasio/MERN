import React, {useState, useEffect} from 'react';
import Axios from 'axios'
import { useParams, useNavigate } from "react-router-dom";


const Show = props => {
    const [pets, setPets] = useState({
        name: "",
        type:  "",
        description: "",
        skill1: "",
        skill2:"",
        skill3:"",
    });
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        Axios.get(`http://localhost:8000/api/pet/${id}`)
        .then(res => setPets(res.data.results))
        .catch(err => console.log(err))
    }, [id])

    const destroyPet = () => {
        Axios.delete(`http://localhost:8000/api/destroy/pet/${id}`)
            .then(res => navigate('/'))
            .catch(err => console.log(err))
    }
    return (
        <div className="mx-auto p-5 col-6">
                <h3>Name: {pets.name}</h3>
                <p>Pet Type: {pets.type}</p>
                <p>Pet Description: {pets.description}</p>
                <p>Skill 1: {pets.skill1}</p>
                <p>Skill 2: {pets.skill2}</p>
                <p>Skill 3: {pets.skill3}</p>
                <button className="btn btn-danger" onClick={destroyPet}>Adopt: {pets.name}?</button>
        </div>
    )
}

export default Show;