import React from "react";
import Navbar from "../../components/common/Navbar";
import JobsCards from "../../components/common/JobsCard";
import ProfileHeader from "../../components/Profile/ProfileHeader";
import { useContext, useEffect } from "react";
import { JobContext } from "../../context/JobContext";
import { useParams } from "react-router-dom";
import TimeTracker from "../../utils/TimeTracker";
import { UserContext } from "../../context/UserContext";
function User() {
    const { userType } = useParams();
    const { allJobs, fetchAllCompanyJobs, fetchAllAppliedJobs } = useContext(JobContext);
    const { userDetails } = useContext(UserContext);

    useEffect(() => {
        if (userType === "jobseeker") {
            console.log('jobseekers ---');
            fetchAllAppliedJobs();
        } else {
            console.log('recruiters ---');
            fetchAllCompanyJobs();
        }
    }, []);
    return (
        <>
            <Navbar />
            <section className="bg-secondary-100 py-12 px-3">
                <ProfileHeader />
                <div className="container mx-auto max-w-7xl rounded-lg bg-white mt-6">
                    <h3 className="text-2xl font-semibold text-secondary-300 px-6 py-6">
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
                    )}
                </div>
            </section>
        </>
    );
}

export default User;
