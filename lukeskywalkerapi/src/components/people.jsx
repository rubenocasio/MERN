import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";


const People = () => {
    const { id } = useParams();
    const [currentPerson, setCurrentPerson] = useState({});
    const [homeworld, setHomeworld] = useState({});
    const [films, setFilms] = useState({});
    const [vehicles, setVehicles] = useState({});
    const [species, setSpecies] = useState({});

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}/?format=json`)
        .then((response) => {setCurrentPerson(response.data);

        axios.get(`https://swapi.dev/api/planets/${id}/?format=json`)
        .then((response) => setHomeworld(response.data));

        axios.get(`https://swapi.dev/api/films/${id}/?format=json`)
        .then((response) => setFilms(response.data));

        // axios.get(`https://swapi.dev/api/vehicles/?format=json`)
        // .then((response) => setVehicles(response.data.results));

        axios.get(`https://swapi.dev/api/species/${id}/?format=json`)
        .then((response) => setSpecies(response.data));

        })
        .catch((err) => {setCurrentPerson({ error: "These are not the droids you are looking for" });
        });
    }, [id]);

    return (
        <div>
            <h2>{currentPerson.name}</h2><br/>
            <p><b>Birth Year:</b> {currentPerson.birth_year}</p><br/>
            <p><b>Eye Color:</b> {currentPerson.eye_color}</p><br/>
            <p><b>Gender:</b> {currentPerson.gender}</p><br/>
            <p><b>Mass: </b>{currentPerson.mass}</p><br/>
            <p><b>Height: </b>{currentPerson.height}</p><br/>
            <p><b>Skin Color: </b> {currentPerson.skin_color}</p><br/>
            <p><b>Species: </b>{species.name}</p><br/>
            <p><b>Vehicle: </b> {vehicles.name} || <b>Model: </b>{vehicles.model} || <b>Vehicle Class:</b> {vehicles.vehicle_class}</p><br/>
            <p><b>Hair Color: </b> {currentPerson.hair_color}</p><br/>
            <p><b>Home Planet: </b>{homeworld.name}</p><br/>
            <p><b>Films: </b>{films.title}</p><br/>
            <p><b>Opening Crawl:</b><br/> {films.opening_crawl}</p><br/>
        </div>
    )
}

export default People;