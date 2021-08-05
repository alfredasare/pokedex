import {v4} from "uuid";
import PokemonCard from "../pokemon-card/pokemonCard";

const PokemonList = ({pokemons, offset}) => {

    return (
        <div className="grid grid-cols-4 gap-10 mt-16">
            {
                pokemons?.map((pokemon, index) => (
                    <PokemonCard id={index+1+offset} key={v4()} pokemon={pokemon}/>
                ))
            }
        </div>
    );
}

export default PokemonList;