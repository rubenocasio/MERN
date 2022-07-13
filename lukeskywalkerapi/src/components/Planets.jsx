import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

const Planets = () => {
    const { id } = useParams();
    const [planets, setPlanets] = useState({});

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}?format=json`)
        .then((response) => {setPlanets(response.data);})
        .catch((err) => {setPlanets({ error: "These are not the droids you are looking for" })});
    }, [id]);


    return (
        <div className="planets-list">
            <div className="planetlist">
                <li>{planets.name}</li>
                <li>{planets.rotation_period}</li>
                <li>{planets.orbital_period}</li>
                <li>{planets.diameter}</li>
                <li>{planets.climate}</li>
                <li>{planets.gravity}</li>
                <li>{planets.terrain}</li>
                <li>{planets.surface_water}</li>
                <li>{planets.population}</li>
            </div>
        </div>
    )
}
export default Planets;