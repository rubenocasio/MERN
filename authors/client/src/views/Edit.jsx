import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import { useNavigate } from "react-router-dom";
// import { useParams } from "react-router-dom";
import AuthorForm from '../components/AuthorForm';


const Edit = props => {
    const initialAuthor = {
        author: "",
        bookTitle: "",
        eBook: "",
        history: "",
    };
    
    const [edit, setEdit] = useState(initialAuthor);
    const [errors, setErrors] = useState(initialAuthor);
    const navigate = useNavigate();

    useEffect(() => {
        Axios.get(`http://localhost:8000/api/authors/${props.id}`)
        .then(res => setEdit(res.data.authors))
        .catch(err => console.log(err));
    },[props])

        const handleInputChange = (e) => {
        setEdit({
            ...edit,
            [e.target.name]:e.target.value
        })
    }

        const handleSubmit = (e) => {
        setErrors(initialAuthor);
        e.preventDefault();
        Axios.put(`http://localhost:8000/api/authors/update/${edit._id}`, edit)
            .then((res) => {
                if (res.data.authors) {
                navigate(`/author/${edit._id}`);
                } else {
                setErrors(res.data);
                }
            })
            .catch((err) => console.log(err));
    }

    return(
        <div>
            <h2>Add an Author</h2>
            <AuthorForm 
                inputs={edit}
                errors={errors}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                submitValue="Edit Author"/>
        </div>
    );
}

export default Edit;