import React, { useEffect } from "react";
import Navbar from "../../components/common/Navbar";
import JobsCards from "../../components/common/JobsCard";
import Searchbar from "../../components/common/Searchbar";
import TimeTracker from "../../utils/TimeTracker";
import { useSelector } from "react-redux";
import useJobHooks from "../../hooks/jobHooks";
import FilterComponent from "../../components/common/FilterComponent";
function JobsLists() {
    const allJobs = useSelector((state) => state.job.allJobs);
    const { fetchAllJobs } = useJobHooks();
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

                        <FilterComponent />

                        {/* job card fetch  */}
                        <div className="col-span-3">
                            <div className=" rounded-lg h-full mx-4">
                                {allJobs.map((job, index) => (
                                    <JobsCards
                                        key={index}
                                        logo={job.postedBy.profileImgUrl}
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
