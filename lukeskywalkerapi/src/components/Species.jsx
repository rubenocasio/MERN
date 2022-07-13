import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

const Species = () => {
    const { id } = useParams();
    const [species, setSpecies] = useState({});

    useEffect(() => {
        axios.get(`https://swapi.dev/api/species/${id}?format=json`)
        .then((response) => {setSpecies(response.data);})
        .catch((err) => {setSpecies({ error: "These are not the droids you are looking for" });});
    }, [id]);
    return (
        <div>
            <h1>Species</h1>
            <ul>
                <li>{species.name}</li>
                <li>{species.classification}</li>
                <li>{species.designation}</li>
                <li>{species.designation}</li>
                <li>{species.designation}</li>
                <li>{species.average_height}</li>
                <li>{species.skin_colors}</li>
                <li>{species.hair_colors}</li>
                <li>{species.eye_colors}</li>
                <li>{species.average_lifespan}</li>
                <li>{species.language}</li>
            </ul>
        </div>
    )
}

export default Species