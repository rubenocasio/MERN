import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

const Starships = () => {
    const { id } = useParams();
    const [starships, setStarships] = useState({});

    useEffect(() => {
        axios.get(`https://swapi.dev/api/starships/${id}?format=json`)
        .then((response) => {setStarships(response.data);
        })
        .catch((err) => {setStarships({ error: "These are not the droids you are looking for" });
        });
    }, [id]);
    return (
        <div>
            <ul>
                <li>Name: {starships.name}</li>
                <li>model: {starships.model}</li>
                <li>Manu: {starships.manufacturer}</li>
            </ul>
        </div>
    )
}
export default Starships;