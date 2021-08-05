import React, {createContext, useState, useEffect} from "react";
import {PokemonDetails} from "../types/pokemons";
import {getData} from "../utils/getData";
import {use} from "ast-types";

export const PokemonDetailsContext = createContext({
    pokemon: {} as PokemonDetails,
    isLoading: false,
    error: null,
    fetchPokemonDetails: (_query: string | string[]): void => {},
});

const PokemonDetailsProvider = ({children}: {children: React.ReactChild}) => {

    const [pokemon, setPokemon] = useState<PokemonDetails>({});

    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function fetchPokemonDetails (query: string | string[]) {
        setLoading(true);
        try {
            await getData(`https://pokeapi.co/api/v2/pokemon/${query}`, setPokemon);
        } catch (e) {
            setError(e);
        } finally {
            setLoading(false);
        }
    }

    return (
        <PokemonDetailsContext.Provider value={{
            pokemon,
            isLoading,
            error,
            fetchPokemonDetails,
        }}>
            {children}
        </PokemonDetailsContext.Provider>
    );
};

export default PokemonDetailsProvider;