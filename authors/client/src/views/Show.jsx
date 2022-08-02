import React, {useState, useEffect} from 'react';
import Axios from 'axios'
import { useNavigate } from "react-router-dom";


const Show = props => {
    const [author, setAuthor] = useState({
        author: "",
        bookTitle:  "",
        eBook: "",
        history: "",
    });
    const navigate = useNavigate();
    useEffect(() => {
        Axios.get(`http://localhost:8000/api/authors/${props.id}`)
        .then(res => setAuthor(res.data.authors))
        .catch(err => console.log(err))
    }, [props])

    const destroyAuthor = () => {
        Axios.delete(`http://localhost:8000/api/authors/delete/${props.id}`)
            .then(res => navigate('/'))
            .catch(err => console.log(err))
    }
    return (
        <div className="mx-auto p-5 col-6">
                <h3>Author: {author.author}</h3>
                <p>Book Title: {author.bookTitle}</p>
                <p>Ebook Available: {author.eBook}</p>
                <p>Biography: {author.history}</p>
                <button className="btn btn-danger" onClick={destroyAuthor}>Delete: {author.author}?</button>
        </div>
    )
}

export default Show;