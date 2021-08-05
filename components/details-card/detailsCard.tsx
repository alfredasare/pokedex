import {v4} from "uuid";
import {Move, PokemonDetails, Stat, Type} from "../../types/pokemons";

const DetailsCard = ({pokemon}: { pokemon: PokemonDetails }) => {

    return (
        <div className="py-36">
            <div
                className="flex flex-col mx-auto bg-white w-1/2 h-3/4 shadow rounded-lg"
            >
                <img className="h-36 w-36 mx-auto" src={pokemon.sprites?.front_default} alt={pokemon.name}/>
                <h1 className="capitalize text-center text-2xl mb-5">{pokemon.name}</h1>

                <div className="px-10">
                    <h2 className="text-lg font-bold mb-2">Species</h2>
                    <p className="text-lg mb-4 capitalize">{pokemon.species?.name}</p>

                    <h2 className="text-lg font-bold">Base Stats</h2>
                    <div className="mb-4 mt-3 grid grid-cols-3">
                        {
                            pokemon.stats?.map((stat: Stat) => (
                                <div key={v4()}
                                     className="flex flex-col justify-center bg-gray-200 px-2 py-1 shadow w-1/4 text-center rounded-lg mb-3 w-3/4">
                                    <p className="text-sm font-bold capitalize">{stat.stat.name}</p>
                                    <p className="text-lg mt-2 text-gray-800">{stat.base_stat}</p>
                                </div>
                            ))
                        }
                    </div>

                    <h2 className="text-lg font-bold mb-3">Types</h2>
                    <div className="flex flex-wrap mb-4">
                        {
                            pokemon.types?.map((type: Type) => (
                                <span
                                    key={v4()}
                                    className="mr-3 mb-5 text-sm bg-gray-200 text-black px-3 py-1 rounded-full text-center capitalize"
                                >
                                    {type.type.name}
                                </span>
                            ))
                        }
                    </div>

                    <h2 className="text-lg font-bold">Weight</h2>
                    <p className="text-lg mb-4">{pokemon.weight} lbs</p>

                    <h2 className="text-lg font-bold mb-3">Moves</h2>
                    <div className="flex flex-wrap mb-4">
                        {
                            pokemon.moves?.slice(0, 12)?.map((move: Move) => (

                                <span
                                    key={v4()}
                                    className="mr-3 mb-5 text-sm bg-gray-200 text-black px-3 py-1 rounded-full text-center capitalize"
                                >
                                    {move.move.name}
                                </span>
                            ))
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DetailsCard;