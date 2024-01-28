import React, { useState } from 'react'
import Navbar from '../components/common/Navbar'
import { FaSistrix } from "react-icons/fa";
import { IoLocationOutline, IoFilterSharp } from "react-icons/io5";
import JobsCards from '../components/JobsCards';
import FilterBoxJobs from '../components/FilterBoxJobs';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
function JobsLists() {
    function valuetext(value) {
        return `${value}`;
    }
    return (
        <>
            <Navbar />
            <section className='bg-secondary-100'>
                <div className="container mx-auto py-12 px-28">
                    <div className='w-4/6 flex flex-col gap-8'>
                        <h1 className='text-secondary-300 font-bold text-4xl'>Showing jobs for '<span className='text-primary-200'>it manager</span>, India</h1>
                        <div>
                            <form action="" className='flex shadow-xl flex-col gap-6 py-4 px-8 items-center h-full w-full rounded-lg bg-white md:flex-row md:rounded-full md:px-4 md:h-14 md:w-min md:justify-between md:items-center '>
                                <div className='flex items-center py-1 border w-full md:border-none rounded-full text-secondary-200 gap-3 pl-3'>
                                    <span className=''>{<FaSistrix />}</span>
                                    <input type="text" placeholder='Job Title' className='placeholder:text-secondary-200 outline-none' />
                                </div>
                                <div className='flex  items-center py-1 border md:border-none w-full rounded-full text-secondary-200 gap-3 pl-3'>
                                    <span className=''>{<IoLocationOutline />}</span>
                                    <input type="text" placeholder='Location' className='placeholder:text-secondary-200 outline-none' />
                                </div>
                                <div className='flex w-full md:block'>
                                    <button className='bg-primary-200 hover:bg-primary-300 w-full text-white px-12 py-2 rounded-full font-medium'>Search</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <section className='py-7'>
                <div className="container mx-auto max-w-[1320px]">
                    <div className='lg:grid grid-cols-4 gap-3 lg:space-y-0 space-y-6'>
                        {/* compo todo */}
                        <div className='border rounded-lg mx-6'>
                            <div className=''>
                                <div className="card-header flex items-center gap-2 border-b p-5">
                                    <IoFilterSharp />
                                    <h1 className='text-sm'>All Filters</h1>
                                </div>
                                <div className="card-body p-5 space-y-3 border-b">
                                    <a href="" className='text-secondary-300 font-semibold'>Locations</a>
                                    <div className=''>
                                        <form action="" className='text-secondary-200 space-y-1'>
                                            <FilterBoxJobs h1='Mumbai' h2='(8)' />
                                            <FilterBoxJobs h1='Delhi' h2='(4)' />
                                            <FilterBoxJobs h1='Bangalore' h2='(3)' />
                                        </form>
                                    </div>
                                </div>
                                <div className="card-body p-5 space-y-3 border-b">
                                    <a href="" className='text-secondary-300 font-semibold'>Salary</a>
                                    <div className=''>
                                        <form action="" className='text-secondary-200 space-y-1'>
                                            <FilterBoxJobs h1='0 - 3 Lakhs' />
                                            <FilterBoxJobs h1='3 - 6 Lakhs' />
                                            <FilterBoxJobs h1='6 - 10 Lakhs' />
                                        </form>
                                    </div>
                                </div>
                                <div className="card-body p-5 space-y-3 border-b">
                                    <a href="" className='text-secondary-300 font-semibold'>Salary</a>
                                    <div className=''>
                                        <form action="" className='text-secondary-200'>
                                            <div className='flex w-full'>
                                                <Box sx={{ width: 300 }}>
                                                    <Slider
                                                        aria-label="Always visible"
                                                        defaultValue={13}
                                                        getAriaValueText={valuetext}
                                                        step={1}
                                                        min={0}
                                                        max={30}
                                                        color="secondary"
                                                        valueLabelDisplay="on"

                                                    />
                                                    <div className='flex justify-between'>
                                                        <span>0 Years</span>
                                                        <span>30 Years</span>
                                                    </div>
                                                </Box>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-3'>
                            <div className=' rounded-lg h-full'>
                                <JobsCards />
                                <JobsCards />
                                <JobsCards />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default JobsLists