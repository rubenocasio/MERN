import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

const Vehicles = () => {
    // const { id } = useParams();
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/vehicles/`)
        .then((response) => {setVehicles(response.data.results);
        })
        .catch((err) => {setVehicles({ error: "These are not the droids you are looking for" });
        });
    }, []);

    return (
        <div>
        <h1>Vehicles</h1>
            {
                vehicles.map((q, i) => {
                    return (
                        <ul key={i}>
                            <li>Name: {q.name} | Model: {q.model} | Manu: {q.manufacturer}</li>
                        </ul>

                    )
                })
            }
        </div>
    )
}
export default Vehicles;