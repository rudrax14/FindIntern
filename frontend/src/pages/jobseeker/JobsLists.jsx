import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../components/common/Navbar";
import { FaSistrix } from "react-icons/fa";
import { IoLocationOutline, IoFilterSharp } from "react-icons/io5";
import JobsCards from "../../components/JobsCard";
import FilterBoxJobs from "../../components/FilterBoxJobs";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Searchbar from "../../components/Searchbar";
import CardBody from "../../components/CardBody";
import { JobContext } from "../../context/JobContext";
function JobsLists() {
    function valuetext(value) {
        return `${value}`;
    }
    const { allJobs, fetchAllJobs } = useContext(JobContext);
    useEffect(() => {
        fetchAllJobs();
    }, []);
    return (
        <>
            <Navbar />
            <section className="bg-secondary-100">
                <div className="container mx-auto md:block flex justify-center py-12 md:px-28">
                    <div className="w-4/6 flex flex-col gap-8">
                        <div className="">
                            <h1 className="text-secondary-300  font-bold text-4xl">
                                Showing jobs for '
                                <span className="text-primary-200">it manager</span>, India
                            </h1>
                        </div>
                        <div className="">
                            <Searchbar />
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-7">
                <div className="container mx-auto max-w-[1320px]">
                    <div className="lg:grid grid-cols-4 gap-3 lg:space-y-0 space-y-6">
                        {/* compo todo */}
                        <div className="border rounded-lg mx-6 h-fit sticky top-20">
                            <div className="">
                                <div className="card-header flex items-center gap-2 border-b p-5">
                                    <IoFilterSharp />
                                    <h1 className="text-sm">All Filters</h1>
                                </div>
                                <CardBody />
                                <div className="card-body p-5 space-y-3 border-b">
                                    <a href="" className="text-secondary-300 font-semibold">
                                        Salary
                                    </a>
                                    <div className="">
                                        <form action="" className="text-secondary-200 space-y-1">
                                            <FilterBoxJobs h1="0 - 3 Lakhs" />
                                            <FilterBoxJobs h1="3 - 6 Lakhs" />
                                            <FilterBoxJobs h1="6 - 10 Lakhs" />
                                        </form>
                                    </div>
                                </div>
                                <div className="card-body p-5 space-y-3 border-b">
                                    <a href="" className="text-secondary-300 font-semibold">
                                        Experience
                                    </a>
                                    <div className="">
                                        <form action="" className="text-secondary-200">
                                            <div className="flex w-full">
                                                <Box sx={{ width: 300 }}>
                                                    <Slider
                                                        aria-label="Always visible"
                                                        defaultValue={15}
                                                        getAriaValueText={valuetext}
                                                        step={1}
                                                        min={0}
                                                        max={30}
                                                        sx={{ color: "#754ffe" }}
                                                        valueLabelDisplay="on"
                                                        valueLabelFormat={valuetext}
                                                    />
                                                    <div className="flex justify-between">
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
                        <div className="col-span-3">
                            <div className=" rounded-lg h-full">
                                {allJobs.map((job, index) => (
                                    // <JobsCards key={index} logo='https://codescandy.com/geeks-bootstrap-5/assets/images/job/job-brand-logo/job-list-logo-1.svg' company='Software Engineer (Web3/Crypto)' role='Featured Job' experience='1 - 5 years' salary='12k - 18k' location='Ahmedabad, Gujarat' />
                                    <JobsCards
                                        key={index}
                                        logo="https://codescandy.com/geeks-bootstrap-5/assets/images/job/job-brand-logo/job-list-logo-1.svg"
                                        company={job.company}
                                        role="Featured Job"
                                        experience={job.experience}
                                        salary={job.salary}
                                        location={job.location}
                                        id={job._id}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default JobsLists;
