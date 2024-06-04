import React, { useEffect, useState } from "react";
import Navbar from "../../components/common/Navbar";
import { FaSistrix } from "react-icons/fa";
import { IoLocationOutline, IoFilterSharp } from "react-icons/io5";
import JobsCards from "../../components/common/JobsCard";
import FilterBoxJobs from "../../components/Filter/FilterBoxJobs";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Searchbar from "../../components/common/Searchbar";
import CardBody from "../../components/common/CardBody";
import { JobContext } from "../../context/JobContext";
import TimeTracker from "../../utils/TimeTracker";
import { useSelector } from "react-redux";
import useJobHooks from "../../hooks/jobHooks";
function JobsLists() {
    function valuetext(value) {
        return `${value}`;
    }
    const allJobs = useSelector(state => state.job.allJobs);
    const { fetchAllJobs, fetchAllApprovedJobs } = useJobHooks();
    useEffect(() => {
        fetchAllJobs(true);
    }, []);
    return (
        <>
            <Navbar />
            <section className="bg-secondary-100 dark:bg-dark-secondary-100">
                <div className="lg:px-28 px-6 lg:block flex justify-center py-12 container ">
                    <div className="lg:w-4/6 flex flex-col gap-8 ">
                        <div className="">
                            <h1 className="text-secondary-300 font-bold text-4xl dark:text-secondary-100">
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
            <section className="py-7 dark:bg-secondary-500 dark:text-secondary-100">
                <div className="container mx-auto max-w-[1320px]">
                    <div className="md:grid grid-cols-4 gap-3 lg:space-y-0 space-y-6">
                        {/* compo todo */}
                        <div className="border rounded-lg ml-4 h-fit lg:sticky top-20">
                            <div className="">
                                <div className="card-header flex items-center gap-2 border-b p-5">
                                    <IoFilterSharp />
                                    <h1 className="text-sm">All Filters</h1>
                                </div>
                                <CardBody />
                                <div className="card-body p-5 space-y-3 border-b">
                                    <a href="" className="text-secondary-300 font-semibold dark:text-secondary-100">
                                        Stipend
                                    </a>
                                    <div className="">
                                        <form action="" className="text-secondary-200 space-y-1 ">
                                            <FilterBoxJobs h1="0 - 3 Lakhs" />
                                            <FilterBoxJobs h1="3 - 6 Lakhs" />
                                            <FilterBoxJobs h1="6 - 10 Lakhs" />
                                        </form>
                                    </div>
                                </div>
                                <div className="card-body p-5 space-y-3 border-b">
                                    <a href="" className="text-secondary-300 font-semibold dark:text-secondary-100">
                                        Period
                                    </a>
                                    <div className="">
                                        <form action="" className="text-secondary-200">
                                            <div className="flex w-full">
                                                <Box sx={{ width: 300 }}>
                                                    <Slider
                                                        aria-label="Always visible"
                                                        defaultValue={6}
                                                        getAriaValueText={valuetext}
                                                        step={1}
                                                        min={1}
                                                        max={12}
                                                        sx={{ color: "#754ffe" }}
                                                        valueLabelDisplay="on"
                                                        valueLabelFormat={valuetext}
                                                    />
                                                    <div className="flex justify-between dark:text-secondary-100">
                                                        <span>1 Months</span>
                                                        <span>12 Months</span>
                                                    </div>
                                                </Box>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-3">
                            <div className=" rounded-lg h-full mx-4">
                                {allJobs.map((job, index) => (
                                    // <JobsCards key={index} logo='https://codescandy.com/geeks-bootstrap-5/assets/images/job/job-brand-logo/job-list-logo-1.svg' company='Software Engineer (Web3/Crypto)' role='Featured Job' experience='1 - 5 years' salary='12k - 18k' location='Ahmedabad, Gujarat' />
                                    <JobsCards
                                        key={index}
                                        logo="https://codescandy.com/geeks-bootstrap-5/assets/images/job/job-brand-logo/job-list-logo-1.svg"
                                        title={job.title}
                                        type={job.type}
                                        company={job.company}
                                        salary={job.salary}
                                        location={job.location}
                                        id={job._id}
                                        period={job.period}
                                        timeAgo={TimeTracker(job.createdAt)}
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
