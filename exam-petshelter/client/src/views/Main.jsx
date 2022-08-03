import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import { Link } from "react-router-dom";

const Main = props => {
    const [pets, setPets] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        Axios.get("http://localhost:8000/api/pets")
        .then(res => setPets(res.data.results))
        .catch(err => console.log(err));
    },[loaded])

    const destroyAuthor = (id) => {
        Axios.delete(`http://localhost:8000/api/destroy/pet/${id}`)
            .then(res => {
                console.log(res);
                setLoaded(false);
            })
            .catch(err => console.log(err))
        }
        
    return (
        <div>
            <table className="tableheader">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Manage</th>
                    </tr>
                </thead>
                <tbody className="tablebody">
                    {pets.map((p,i) => {return <tr key={i}>
                            <td>{p.name}</td>
                            <td>{p.type}</td>
                            <td className="buttons">
                                <Link id="btn1" to={`/edit/${p._id}`} className="btn btn-warning">Edit</Link>
                                <Link id="btn2" to={`/pet/${p._id}`} className="btn btn-success">Details</Link>
                                <button className="btn btn-danger" onClick={() => destroyAuthor(p._id)}>Delete</button>
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