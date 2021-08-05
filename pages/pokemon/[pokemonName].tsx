import {FC, useContext, useEffect} from "react";
import { useRouter } from "next/router";
import Loader from "../../components/loader/loader";
import Layout from "../../components/layout/Layout";
import DetailsCard from "../../components/details-card/detailsCard";
import {PokemonDetailsContext} from "../../context/PokemonDetailsProvider";
import ErrorPage from "../../components/error-page/error-page";

const PokemonName: FC = () => {
    const router = useRouter();
    const {pokemonName} = router.query;

    const {isLoading, pokemon, fetchPokemonDetails, error} = useContext(PokemonDetailsContext);

    useEffect(() => {
        if (pokemonName) {
            fetchPokemonDetails(pokemonName);
        }

    // eslint-disable-next-line
    }, [pokemonName])

    if (isLoading) {
        return <Loader />;
    }

    if (error) {
        return <ErrorPage />;
    }

    return (
        <Layout title={`Pokemon - ${pokemon.name}`}>
            <DetailsCard pokemon={pokemon}/>
        </Layout>
    );
};

export default PokemonName;