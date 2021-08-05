import {FC, useContext} from "react";
import Loader from "../components/loader/loader";
import Layout from "../components/layout/Layout";
import Header from "../components/header/header";
import PokemonList from "../components/pokemon-list/pokemonList";
import PaginationButtons from "../components/pagination-buttons/pagination-buttons";
import Search from "../components/search/search";
import {SearchContext} from "../context/SearchProvider";
import {PokemonsContext} from "../context/PokemonsProvider";
import ErrorPage from "../components/error-page/error-page";

const Home: FC = () => {
    const {loading, pokemonData, nextPage, previousPage, offset, error} = useContext(PokemonsContext);
    const {searchQuery} = useContext(SearchContext);

    if (loading) {
        return <Loader />
    }

    if (error) {
        return <ErrorPage />
    }

    return (
        <Layout title="All Pokemons">
            <div className="min-h-screen">
                <Header />
                <Search />

                {
                    searchQuery.length < 3 &&
                        <>
                            <PokemonList offset={offset} pokemons={pokemonData.results}/>
                            <PaginationButtons
                                next={pokemonData.next}
                                goNext={nextPage}
                                previous={pokemonData.previous}
                                goPrevious={previousPage}
                            />
                        </>
                }

            </div>
        </Layout>
    )
}

export default Home;