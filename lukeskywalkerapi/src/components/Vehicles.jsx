import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

const Vehicles = () => {
    const { id } = useParams();
    const [vehicles, setVehicles] = useState({});

    useEffect(() => {
        axios.get(`https://swapi.dev/api/vehicles/?format=json`)
        .then((response) => {setVehicles(response.data);
        })
        .catch((err) => {setVehicles({ error: "These are not the droids you are looking for" });
        });
    }, [id]);
    return (
        <div>
            <ul>
                <li>Name: {vehicles.name}</li>
                <li>model: {vehicles.model}</li>
                <li>Manu: {vehicles.manufacturer}</li>
            </ul>
        </div>
    )
}
export default Vehicles;