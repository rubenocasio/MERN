import React, {useState} from 'react'
import Axios from 'axios';
import AuthorForm from '../components/AuthorForm';
import {useNavigate } from "react-router-dom";

const New = (props) => {
    const initialAuthor = {
        authors:"",
    }
    const [author,setAuthor] = useState(initialAuthor);
    const [errors, setErrors] = useState(initialAuthor);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setAuthor({
            ...author,
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit = (e) => {
        setErrors(initialAuthor);
        // e.preventDefault();
        Axios.post("http://localhost:8000/api/authors/new", author)
            .then(res => {
                if(res.data.author){
                    console.log("This is POST " + res.data.authors)
                    navigate('/');
                }
                else {
                    setErrors(res.data);
                }
            })
            .catch(err => console.log(err));
    }
    const handleClick = (e) => {
        return('/')
    }
    return (
        <div>
            <h2>Add an Author</h2>
            <AuthorForm 
                inputs={author}
                errors={errors}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                submitValue="Add an Author"
            /><br/>
            <button className="btn btn-primary" onClick={handleClick}>Cancel</button>

        </div>
    )
    
}
export default New
