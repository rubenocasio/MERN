import React, {useState, useEffect} from 'react';
import Axios from 'axios'
import { useParams, useNavigate } from "react-router-dom"

const Show = props => {
    const { id } = useParams();
    const [author, setAuthor] = useState({
        author: "",
    });

    const navigate = useNavigate();

    useEffect(() => {
      Axios.get(`http://localhost:8000/api/author/${id}`)
        .then((res) => setAuthor(res.data.results))
        .catch((err) => console.log(err));
    }, [id]);

    const destroyAuthor = () => {
        Axios.delete(`http://localhost:8000/api/destroy/author/${id}`)
            .then(res => navigate('/'))
            .catch(err => console.log(err))
    }
    return (
        <div className="mx-auto p-5 col-6">
                <h3>Author: {author}</h3>
                <button className="btn btn-danger" onClick={destroyAuthor}>Delete: {author}?</button>
        </div>
    )
}

export default Show;