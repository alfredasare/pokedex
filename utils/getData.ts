import {Dispatch, SetStateAction} from "react";
import {PokemonData, PokemonDetails} from "../types/pokemons";
import axios from "axios";

export const getData = async (url: string, setData: Dispatch<SetStateAction<PokemonDetails>>| Dispatch<SetStateAction<PokemonData>>) => {
    const response = await axios.get(url);
    const responseData = await response.data;
    setData(responseData);
}