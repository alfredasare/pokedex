import {FC} from "react";

const Loader: FC = () => {
    return (
        <div className="w-full min-h-screen flex justify-center items-center">
            <img className="animate-spin h-24" src="/pokeball.png" alt="Pokeball"/>
        </div>
    );
};

export default Loader;
