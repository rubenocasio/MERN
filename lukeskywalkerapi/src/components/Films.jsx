import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

const Films = () => {
    const { id } = useParams();
    const [errors, setErrors] = useState({})
    const [films, setFilms] = useState({});

    useEffect(() => {
        axios.get(`https://swapi.dev/api/films/${id}?format=json`)
        .then((response) => {setFilms(response.data.results);})
        .catch((err) => {setErrors({ error: "These are not the droids you are looking for" });});
    }, [id]);
    return (
        
        <div>
            <span>{errors}</span>
            <ul>
                <li>{films.name}</li>
            </ul>
        </div>
    )
}

export default Films