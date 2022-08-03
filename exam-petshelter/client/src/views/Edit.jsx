import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";
import Form from '../components/Form';


const Edit = props => {
    const initialPet = {
        name: "",
        type:  "",
        description: "",
        skill1: "",
        skill2:"",
        skill3:"",
    };

    const [edit, setEdit] = useState(initialPet);
    const [errors, setErrors] = useState(initialPet);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        Axios.get(`http://localhost:8000/api/pet/${id}`)
        .then(res => setEdit(res.data.results))
        .catch(err => console.log(err));
    },[id])

        const handleInputChange = (e) => {
        setEdit({
            ...edit,
            [e.target.name]:e.target.value
        })
    }

        const handleSubmit = (e) => {
        setErrors(initialPet);
        e.preventDefault();
        Axios.put(`http://localhost:8000/api/update/pet/${id}`, edit)
            .then(res => {
                if(res.data.results){
                    navigate(`/pet/${id}`);
                }
                else {
                    setErrors(res.data);
                }
            })
            .catch(err => console.log(err));
    }

    return(
        <div>
            <h2>Add an Author</h2>
            <Form 
                inputs={edit}
                errors={errors}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                submitValue="Edit Pet"
            />
            
        </div>
    );
}

export default Edit;