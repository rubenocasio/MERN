import React, {useState} from 'react'
import Axios from 'axios';
import Form from '../components/Form';
import { useNavigate } from "react-router-dom";

const New = props => {
    const initialPet = {
        name: "",
        type:  "",
        description: "",
        skill1: "",
        skill2:"",
        skill3:"",
    }
    const [pets, setPets] = useState(initialPet);
    const [errors, setErrors] = useState(initialPet);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setPets({
            ...pets,
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit = (e) => {
        setErrors(initialPet);
        e.preventDefault();
        Axios.post("http://localhost:8000/api/create/pet", pets)
            .then(res => {
                if(res.data.results){
                    navigate('/');
                }
                else {
                    setErrors(res.data);
                }
            })
            .catch(err => console.log(err));
    }
    return (
        <div>
            <h2>Add a Pet</h2>
            <Form 
                inputs={pets}
                errors={errors}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                submitValue="Add a Pet"
            /><br/>
        </div>
    )
    
}
export default New