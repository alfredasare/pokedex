const PaginationButtons = ({next, goNext, previous, goPrevious}) => {

    return (
        <div className="flex flex-row w-1/3 justify-around align-middle mt-10 pb-10 mx-auto">

            {
                previous &&
                <button
                    className="border-2 border-gray-700 px-6 py-2"
                    onClick={goPrevious}
                >
                    Previous
                </button>
            }

            {
                next &&
                <button
                    className="border-2 border-red-500 px-8 py-2 bg-red-500 text-white"
                    onClick={goNext}
                >
                    Next
                </button>
            }
        </div>
    );
};

export default PaginationButtons;