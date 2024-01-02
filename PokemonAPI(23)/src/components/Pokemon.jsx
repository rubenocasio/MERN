import React, { useState } from 'react';
import usePokemonList from '../hooks/usePokemonList';
import styles from './Pokemon.module.css';

const Pokemon = () => {
    const { pokemonList, error, isLoading } = usePokemonList("https://pokeapi.co/api/v2/pokemon/?limit=807");
    const [displayedList, setDisplayedList] = useState([]);

    const displayList = () => setDisplayedList(pokemonList);
    const removeList = () => setDisplayedList([]);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading Pokemon!</p>;

    return (
        <div className={styles.btnHolder}>
            <button className={styles.btn} onClick={displayList}>Pokemon List</button>
            <button className={styles.btn} onClick={removeList}>Destroy List</button>

            <div className={styles.pokeList}>
                <ul>
                    {displayedList.map((pokemon, i) => (
                        <li key={pokemon.name}>
                            {i + 1}. {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                            <img src={pokemon.image} alt={pokemon.name} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Pokemon;
