import React, { useState } from "react";
import { FaSistrix } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { useNavigate, useLocation } from "react-router-dom";

// Sample suggestions
const jobTitleSuggestions = [
    'Software Engineer',
    'Product Manager',
    'Data Scientist',
    'Designer'
];

const locationSuggestions = [
    'Mumbai',
    'Delhi',
    'Bangalore',
    'Remote'
];

function Searchbar() {
    const [jobTitle, setJobTitle] = useState('');
    const [filteredJobTitles, setFilteredJobTitles] = useState([]);
    const [location, setLocation] = useState('');
    const [filteredLocations, setFilteredLocations] = useState([]);
    const [showJobTitleSuggestions, setShowJobTitleSuggestions] = useState(false);
    const [showLocationSuggestions, setShowLocationSuggestions] = useState(false);

    const navigate = useNavigate();
    const locationState = useLocation();

    const onJobTitleChange = (e) => {
        const value = e.target.value;
        setJobTitle(value);
        setFilteredJobTitles(
            jobTitleSuggestions.filter(title =>
                title.toLowerCase().includes(value.toLowerCase())
            )
        );
        setShowJobTitleSuggestions(true);
    };

    const onLocationChange = (e) => {
        const value = e.target.value;
        setLocation(value);
        setFilteredLocations(
            locationSuggestions.filter(loc =>
                loc.toLowerCase().includes(value.toLowerCase())
            )
        );
        setShowLocationSuggestions(true);
    };

    const onJobTitleSelect = (title) => {
        setJobTitle(title);
        setShowJobTitleSuggestions(false);
    };

    const onLocationSelect = (loc) => {
        setLocation(loc);
        setShowLocationSuggestions(false);
    };

    const onSearch = (e) => {
        e.preventDefault();
        const searchParams = new URLSearchParams(locationState.search);
        if (jobTitle) {
            searchParams.set('jobTitle', jobTitle);
        } else {
            searchParams.delete('jobTitle');
        }
        if (location) {
            searchParams.set('location', location);
        } else {
            searchParams.delete('location');
        }
        navigate(`${locationState.pathname}?${searchParams.toString()}`);
    };

    return (
        <form
            onSubmit={onSearch}
            className="flex flex-col gap-4 py-4 px-6 items-center w-full rounded-lg bg-white dark:bg-secondary-500 md:flex-row md:rounded-full md:px-4 md:h-14 md:w-min md:justify-between md:items-center dark:border-secondary-200 dark:border"
        >
            <div className="relative w-full md:w-auto flex-1">
                <div className="flex items-center py-2 border w-full md:border-none rounded-full text-secondary-200 gap-3 pl-3 bg-gray-100 dark:bg-dark-secondary-400">
                    <span><FaSistrix /></span>
                    <input
                        type="text"
                        placeholder="Job Title"
                        value={jobTitle}
                        onChange={onJobTitleChange}
                        className="placeholder:text-secondary-200 outline-none bg-transparent flex-1"
                        onFocus={() => setShowJobTitleSuggestions(true)}
                        onBlur={() => setTimeout(() => setShowJobTitleSuggestions(false), 100)}
                    />
                </div>
                {showJobTitleSuggestions && filteredJobTitles.length > 0 && (
                    <div className="absolute top-full ml-1 mr-4  left-0 right-0 bg-white dark:bg-secondary-500 border dark:border-secondary-200 rounded-md shadow-lg z-10  max-h-48 overflow-y-auto">
                        {filteredJobTitles.map((title, index) => (
                            <div
                                key={index}
                                className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-dark-secondary-400 cursor-pointer"
                                onClick={() => onJobTitleSelect(title)}
                            >
                                {title}
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className="relative w-full md:w-auto flex-1">
                <div className="flex items-center py-2 border w-full md:border-none rounded-full text-secondary-200 gap-3 pl-3 bg-gray-100 dark:bg-dark-secondary-400">
                    <span><IoLocationOutline /></span>
                    <input
                        type="text"
                        placeholder="Location"
                        value={location}
                        onChange={onLocationChange}
                        className="placeholder:text-secondary-200 outline-none bg-transparent flex-1"
                        onFocus={() => setShowLocationSuggestions(true)}
                        onBlur={() => setTimeout(() => setShowLocationSuggestions(false), 100)}
                    />
                </div>
                {showLocationSuggestions && filteredLocations.length > 0 && (
                    <div className="absolute top-full left-0 right-0 bg-white dark:bg-secondary-500 border dark:border-secondary-200 rounded-md shadow-lg z-10 mt-1 max-h-48 overflow-y-auto">
                        {filteredLocations.map((loc, index) => (
                            <div
                                key={index}
                                className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-dark-secondary-400 cursor-pointer"
                                onClick={() => onLocationSelect(loc)}
                            >
                                {loc}
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className="flex w-full md:w-auto">
                <button type="submit" className="bg-primary-200 hover:bg-primary-300 w-full md:w-auto text-white px-12 py-2 rounded-full font-medium">
                    Search
                </button>
            </div>
        </form>
    );
}

export default Searchbar;
