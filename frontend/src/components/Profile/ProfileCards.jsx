import React from 'react'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import JobsCards from '../common/JobsCard'
import TimeTracker from '../../utils/TimeTracker'
import useJobHooks from '../../hooks/jobHooks'

function ProfileCards({ userType}) {
    const { fetchAllCompanyJobs, fetchAllAppliedJobs } = useJobHooks();
    const allJobs = useSelector(state => state.job.allJobs);
    const [jobDeleted, setJobDeleted] = useState(false);

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
    }, [userType, jobDeleted]);
    return (
        <section>
            <div className="container mx-auto max-w-7xl rounded-lg shadow-lg bg-white mt-6 dark:bg-dark-secondary-100 dark:border dark:border-secondary-200">
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
                                setJobDeleted={setJobDeleted} 
                                postedBy={job.postedBy}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}

export default ProfileCards