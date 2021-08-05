import {v4} from "uuid";
import PokemonCard from "../pokemon-card/pokemonCard";
import {Pokemon} from "../../types/pokemons";
import {FC} from "react";

interface IProps {
    pokemons: Pokemon[]
    offset: number
}

const PokemonList: FC<IProps> = ({pokemons, offset}) => {

    return (
        <div className="grid grid-cols-4 gap-10 mt-16">
            {
                pokemons?.map((pokemon: Pokemon, index: number) => (
                    <PokemonCard id={index+offset+1} key={v4()} pokemon={pokemon}/>
                ))
            }
        </div>
    );
}

export default PokemonList;