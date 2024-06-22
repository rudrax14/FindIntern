import React, { useEffect, useState } from "react";
import Navbar from "../../components/common/Navbar";
import JobsCards from "../../components/common/JobsCard";
import ProfileHeader from "../../components/Profile/ProfileHeader";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import useJobHooks from "../../hooks/jobHooks";
import { toast } from "react-hot-toast";
import TimeTracker from "../../utils/TimeTracker";
import jobService from "../../services/jobService";

function Admin() {
    const { userType } = useParams();
    const {fetchAllJobs } = useJobHooks();
    const allJobs = useSelector(state => state.job.allJobs);
    const [jobDeleted, setJobDeleted] = useState(false); // State to track job deletion

    useEffect(() => {
        fetchAllJobs(false);
    }, []);

    return (
        <>
            <Navbar />
            <section className="bg-secondary-100 dark:text-secondary-100 py-12 px-3 dark:bg-dark-secondary-500">
                <ProfileHeader />
                <div className="container mx-auto max-w-7xl rounded-lg bg-white mt-6 dark:bg-dark-secondary-100 dark:border dark:border-secondary-200">
                    <h3 className="text-2xl font-semibold text-secondary-300 dark:text-secondary-100 px-6 py-6">
                        Pending Jobs
                    </h3>
                    {allJobs.length === 0 ? (
                        <div className="flex w-full justify-center text-xl pb-12">
                            No Pending Jobs
                        </div>
                    ) : (
                        <div className="grid xl:grid-cols-2 gap-3 mx-6">
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
                                    appliedUsers={job.appliedUsers}
                                    setJobDeleted={setJobDeleted} // Pass setJobDeleted to JobsCards
                                />
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}

export default Admin;
