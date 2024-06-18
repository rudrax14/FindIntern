import React, { useEffect, useState } from "react";
import Navbar from "../../components/common/Navbar";
import JobsCards from "../../components/common/JobsCard";
import ProfileHeader from "../../components/Profile/ProfileHeader";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import useJobHooks from "../../hooks/jobHooks";
import { toast } from "react-hot-toast";
import TimeTracker from "../../utils/TimeTracker";

function User() {
    const { userType } = useParams();
    const { fetchAllCompanyJobs, fetchAllAppliedJobs } = useJobHooks();
    const allJobs = useSelector(state => state.job.allJobs);
    const [jobDeleted, setJobDeleted] = useState(false); // State to track job deletion

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                if (userType === "jobseeker") {
                    console.log('jobseekers ---');
                    await fetchAllAppliedJobs();
                } else {
                    console.log('recruiters ---');
                    await fetchAllCompanyJobs();
                }
            } catch (err) {
                toast.error("Failed to fetch jobs");
            }
        };

        fetchJobs();
    }, [userType, jobDeleted]); // Include jobDeleted in dependency array

    return (
        <>
            <Navbar />
            <section className="bg-secondary-100 dark:text-secondary-100 py-12 px-3 dark:bg-dark-secondary-500">
                <ProfileHeader />
                <div className="container mx-auto max-w-7xl rounded-lg bg-white mt-6 dark:bg-dark-secondary-100 dark:border dark:border-secondary-200">
                    <h3 className="text-2xl font-semibold text-secondary-300 dark:text-secondary-100 px-6 py-6">
                        {userType === "jobseeker"
                            ? "Your Applied Jobs"
                            : "Your Posted Jobs"}
                    </h3>
                    {allJobs.length === 0 ? (
                        <div className="flex w-full justify-center text-xl pb-12">
                            No Jobs Posted
                        </div>
                    ) : (
                        <div className="grid xl:grid-cols-2 gap-3 mx-6">
                            {allJobs.map((job, index) => (
                                console.log('all',allJobs),
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

export default User;
