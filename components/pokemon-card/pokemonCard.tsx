import Link from "next/link";
import {useEffect} from "react";

const PokemonCard = ({id, pokemon}) => {
    const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

    return (
        <Link href={`/pokemon/${pokemon.name}`}>
            <a>
                <div className="max-w-sm rounded shadow-md h-40 text-center flex flex-col justify-end bg-white">
                    <div className="h-1/4 relative">
                        <img className="h-32 -mt-24 mx-auto" src={url} alt={pokemon.name}/>
                    </div>
                    <div className="h-1/2 flex flex-col justify-center -mt-6">
                        <h1 className="text-lg font-bold capitalize">{pokemon.name}</h1>
                    </div>
                </div>
            </a>
        </Link>
    );
};

export default PokemonCard;