import React from 'react';

function ProfileDetails({ userDetails, userType }) {
    if (!userDetails) return null;

    return (
        <section className="profile">
            <div className="container mx-auto max-w-7xl rounded-lg bg-white mt-6 p-8 shadow-lg dark:bg-dark-secondary-100 dark:border dark:border-secondary-200">
                <h3 className="text-2xl font-semibold text-secondary-300 dark:text-secondary-100 mb-8">
                    Profile
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col mb-4">
                        <label className="text-lg font-medium text-secondary-400 dark:text-secondary-200 mb-1">Name</label>
                        <p className="text-secondary-500 dark:text-secondary-100">{userDetails.name}</p>
                    </div>
                    <div className="flex flex-col mb-4">
                        <label className="text-lg font-medium text-secondary-400 dark:text-secondary-200 mb-1">Username</label>
                        <p className="text-secondary-500 dark:text-secondary-100">{userDetails.username}</p>
                    </div>
                    <div className="flex flex-col mb-4">
                        <label className="text-lg font-medium text-secondary-400 dark:text-secondary-200 mb-1">Email</label>
                        <p className="text-secondary-500 dark:text-secondary-100">{userDetails.email}</p>
                    </div>
                    <div className="flex flex-col mb-4">
                        <label className="text-lg font-medium text-secondary-400 dark:text-secondary-200 mb-1">Location</label>
                        <p className="text-secondary-500 dark:text-secondary-100">{userDetails.location}</p>
                    </div>
                    {userType === 'recruiter' && (
                        <>
                            <div className="flex flex-col mb-4">
                                <label className="text-lg font-medium text-secondary-400 dark:text-secondary-200 mb-1">Website</label>
                                <p className="text-secondary-500 dark:text-secondary-100">{userDetails.website}</p>
                            </div>
                            <div className="flex flex-col mb-4">
                                <label className="text-lg font-medium text-secondary-400 dark:text-secondary-200 mb-1">Description</label>
                                <p className="text-secondary-500 dark:text-secondary-100">{userDetails.description}</p>
                            </div>
                            {/* <div className="flex flex-col mb-4">
                                <label className="text-lg font-medium text-secondary-400 dark:text-secondary-200 mb-1">Jobs</label>
                                <p className="text-secondary-500 dark:text-secondary-100">{(userDetails.jobs).length}</p>
                            </div> */}
                           
                        </>
                    )}
                    {userType === 'jobseeker' && (
                        <>
                            <div className="flex flex-col mb-4">
                                <label className="text-lg font-medium text-secondary-400 dark:text-secondary-200 mb-1">Skills</label>
                                <p className="text-secondary-500 dark:text-secondary-100">{userDetails.skills}</p>
                            </div>
                            <div className="flex flex-col mb-4">
                                <label className="text-lg font-medium text-secondary-400 dark:text-secondary-200 mb-1">Experience</label>
                                <p className="text-secondary-500 dark:text-secondary-100">{userDetails.experience}</p>
                            </div>
                            <div className="flex flex-col mb-4">
                                <label className="text-lg font-medium text-secondary-400 dark:text-secondary-200 mb-1">Education</label>
                                <p className="text-secondary-500 dark:text-secondary-100">{userDetails.education}</p>
                            </div>
                            {/* Uncomment if you want to show the number of applied jobs
                            <div className="flex flex-col mb-4">
                                <label className="text-lg font-medium text-secondary-400 dark:text-secondary-200 mb-1">Applied Jobs</label>
                                <p className="text-secondary-500 dark:text-secondary-100">{userDetails.appliedJobs.length}</p>
                            </div>
                            */}
                        </>
                    )}
                    {/* Uncomment if you want to show the bio
                    <div className="flex flex-col mb-4">
                        <label className="text-lg font-medium text-secondary-400 dark:text-secondary-200 mb-1">Bio</label>
                        <p className="text-secondary-500 dark:text-secondary-100">{userDetails.bio}</p>
                    </div>
                    */}
                </div>
            </div>
        </section>
    );
}

export default ProfileDetails;
