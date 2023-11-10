import React, { useState, useEffect } from "react";
import axios from "axios";

const Pokemon = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [displayedList, setDisplayedList] = useState([]);

    useEffect(() => {
    axios
    .get("https://pokeapi.co/api/v2/pokemon/?limit=807")
    .then((response) => setPokemonList(response.data.results))
    .catch(console.log);
}, []);

    const displayList = () => {
        setDisplayedList(pokemonList);
};

    const removeList = () => {
        setDisplayedList([]);
};

    return (
    <div className="btn-holder">
        <button className="btn" onClick={displayList}>Pokemon List</button>
        <button className="btn" onClick={removeList}>Destroy List</button>

        
        <div className="poke-list">
            <ul>
            {displayedList.map((pokemon, i) => {
                return (<div className="pokielist">
                <li key={i}> {i + 1} {" "} {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1) + '-- || -- API Address: ' + pokemon.url}</li>
                </div>
                );
            })}
            </ul>
        </div>
    </div>
    );
        };

export default Pokemon;