import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Box, Slider } from '@mui/material';
import { IoFilterSharp } from "react-icons/io5";

const valuetext = (value) => `${value} Months`;

const FilterComponent = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [filters, setFilters] = useState({ city: [], experience: [] });

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const city = searchParams.getAll('city');
        const experience = searchParams.getAll('period');
        setFilters({ city, experience });
    }, [location.search]);

    const handleCheckboxChange = (event) => {
        const { checked, name, value } = event.target;
        const searchParams = new URLSearchParams(location.search);

        if (checked) {
            searchParams.append(name, value);
        } else {
            const values = searchParams.getAll(name).filter(val => val !== value);
            searchParams.delete(name);
            values.forEach(val => searchParams.append(name, val));
        }

        navigate(`${location.pathname}?${searchParams.toString()}`);
    };

    return (
        <>
            <div className="border rounded-lg mx-4 h-fit lg:sticky top-20">
                <div className="card-header flex items-center gap-2 border-b p-5">
                    <IoFilterSharp />
                    <h1 className="text-sm">All Filters</h1>
                </div>
                <form className="filters">
                    <div className="card-body p-5 space-y-3 border-b">
                        <div className="text-secondary-300 font-semibold dark:text-secondary-100">City</div>
                        <div>
                            {['Mumbai', 'Delhi', 'Hyderabad', 'Remote'].map(city => (
                                <div key={city} className="flex gap-2">
                                    <input
                                        type="checkbox"
                                        name="city"
                                        value={city}
                                        onChange={handleCheckboxChange}
                                        checked={filters.city.includes(city)}
                                        className="accent-primary-200"
                                    />
                                    <label>{city}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="card-body p-5 space-y-3 border-b">
                        <div className="text-secondary-300 font-semibold dark:text-secondary-100">Period</div>
                        <div>
                            {['1 Month', '2-4 Month', '3-6 Month', '6+ Month'].map(exp => (
                                <div key={exp} className="flex gap-2">
                                    <input
                                        type="checkbox"
                                        name="period"
                                        value={exp}
                                        onChange={handleCheckboxChange}
                                        checked={filters.experience.includes(exp)}
                                        className="accent-primary-200"
                                    />
                                    <label>{exp}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default FilterComponent;
