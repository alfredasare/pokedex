import {v4} from 'uuid';

const DataPills = ({data, property}) => {

    return (
        <div className="flex flex-wrap mb-4">
            {
                data?.map(item => (
                    <span
                        key={v4()}
                        className="mr-3 mb-5 text-sm bg-gray-200 text-black px-3
                        py-1 rounded-full text-center capitalize"
                    >
                        {item[property].name}
                    </span>
                ))
            }
        </div>
    );
};

export default DataPills;