import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

const Dashboard = () => {
        const [pirate, setPirate] = useState([]);
        // const [loaded, setLoaded] = useState(false);


        useEffect(() => {
        Axios.get("http://localhost:8000/api/pirates")
        .then(res => setPirate(res.data.results))
        .catch(err => console.log(err));
    },[])

        const destroyPirate = (id) => {
            Axios.delete(`http://localhost:8000/api/destroy/pirates/${id}`)
            .then(res => {
                console.log(res);
                window.location.reload();
            })
            .catch(err => console.log(err))
        }

    return (
        <div className="container">
            <header>
                <h1>Pirate Dashboard</h1>
                <button className="btn btn-warning"><Link to="/new">Add Pirate</Link></button>
            </header>
            <div className="data">
                {pirate.map((p,i) => {return (
                <div key={i} className="pirate-data">
                    <img src={p.img} alt={p.name}/>
                    <h2 id="btn">{p.name}</h2>
                    <Link id="btn" to={`/pirate/${p._id}`} className="btn btn-success">Show</Link>
                    <button id="btn" className="btn btn-danger" onClick={() => destroyPirate(p._id)}>Walk the Plank</button>
                </div>
                )})
            }
            </div>
        </div>
    );
};

export default Dashboard;
