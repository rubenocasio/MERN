import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";
import AuthorForm from '../components/AuthorForm';


const Edit = (props) => {
    const initialAuthor = {
        author: "",
    };

    const [edit, setEdit] = useState(initialAuthor);
    const [errors, setErrors] = useState(initialAuthor);
    const navigate = useNavigate();
    const {id } = useParams();

    useEffect(() => {
        Axios.get(`http://localhost:8000/api/author/${id}`)
        .then(res => {
            setEdit(res.data.results);
            console.log(res.data.results)})
        .catch(err => console.log(err));
    },[id])

        const handleInputChange = (e) => {
        setEdit({
            ...edit,
            [e.target.name]:e.target.value
        })
    }

        const handleSubmit = (e) => {
        setErrors(initialAuthor);
        e.preventDefault();
        Axios.put(`http://localhost:8000/api/update/author/${id}`, edit)
            .then(res => {
                if(res.data.results){
                    console.log(res.data.results);
                    navigate(`/`);
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
            <AuthorForm 
                inputs={edit}
                errors={errors}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                submitValue="Edit Author"
            />
            
        </div>
    );
}

export default Edit;

