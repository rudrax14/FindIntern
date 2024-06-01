import React from "react";
import { FaSistrix } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
function Searchbar() {
    return (
        <form
            action=""
            className="flex flex-col gap-6 py-4 px-8 items-center h-full w-full rounded-lg bg-white dark:bg-secondary-500 md:flex-row md:rounded-full md:px-4 md:h-14 md:w-min md:justify-between md:items-center dark:border-secondary-200 dark:border"
        >
            <div className="flex items-center py-1 border w-full md:border-none rounded-full text-secondary-200  gap-3 pl-3">
                <span className="">{<FaSistrix />}</span>
                <input
                    type="text"
                    placeholder="Job Title"
                    className="placeholder:text-secondary-200 outline-none dark:text-dark-secondary-300 dark:bg-secondary-500"
                />
            </div>
            <div className="flex  items-center py-1 border md:border-none w-full rounded-full text-secondary-200 gap-3 pl-3">
                <span className="">{<IoLocationOutline />}</span>
                <input
                    type="text"
                    placeholder="Location"
                    className="placeholder:text-secondary-200 outline-none dark:text-dark-secondary-300 dark:bg-secondary-500"
                />
            </div>
            <div className="flex w-full md:block">
                <button className="bg-primary-200 hover:bg-primary-300 w-full text-white px-12 py-2 rounded-full font-medium">
                    Search
                </button>
            </div>
        </form>
    );
}

export default Searchbar;
