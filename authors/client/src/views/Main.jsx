import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

const Main = (props) => {
    
    const [authors, setAuthors] = useState([]);
    const navigate = useNavigate();
    
    useEffect(() => {
        Axios.get("http://localhost:8000/api/authors")
        .then(res => setAuthors(res.data.results))
        .catch(err => console.log(err));
    },[])

    const destroyAuthor = (id) => {
        Axios.delete(`http://localhost:8000/api/destroy/author/${id}`)
            .then(res => {
                console.log(res.data.results)
                navigate("/api/authors/")})
            .catch(err => console.log(err))
            
    }
    return (
        <div>
            <table className="tableheader">
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Manage</th>
                    </tr>
                </thead>
                <tbody className="tablebody">
                    {authors.map((c,i) => {return <tr key={i}>
                            <td><a href={`/author/${c._id}`}>{c.author}</a></td>
                            <td className="buttons">
                                <Link id="btn1" to={`/edit/${c._id}`} className="btn btn-warning">Edit</Link>
                                <Link id="btn2" to={`/author/${c._id}`} className="btn btn-success">Show</Link>
                                <button className="btn btn-danger" onClick={() => destroyAuthor(c._id)}>Delete</button>
                            </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Main;