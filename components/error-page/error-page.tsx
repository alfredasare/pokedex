import {FC} from "react";

const ErrorPage: FC = () => {
    return (
        <div className="w-full h-screen bg-gray-100 flex justify-center items-center">
            <h1 className="text-4xl">Something went wrong. Try refreshing the page.</h1>
        </div>
    );
};

export default ErrorPage;