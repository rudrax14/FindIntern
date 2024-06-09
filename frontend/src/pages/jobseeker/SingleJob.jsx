import React, { useEffect, useState } from "react";
import Navbar from "../../components/common/Navbar";
// import JobsCards from "../../components/common/JobsCard";
// import { JobContext } from "../../context/JobContext";
import { useParams, useNavigate } from "react-router-dom";
// import { UserContext } from "../../context/UserContext";
import TimeTracker from "../../utils/TimeTracker";
import { IoCalendarClearOutline, IoLocationOutline } from "react-icons/io5";
import { LiaRupeeSignSolid } from "react-icons/lia";
import useJobHooks from "../../hooks/jobHooks";
import { useSelector } from "react-redux";
// import ButtonGroup from "@mui/material/ButtonGroup";
// import Button from "@mui/material/Button";
import adminService from "../../services/adminService";
import { IoIosSend } from "react-icons/io";

function SingleJobs() {
  const navigate = useNavigate();
  const { fetchAllJobs, fetchAJob, applyJob, fetchAllApprovedJobs } =
    useJobHooks();
  const allJobs = useSelector((state) => state.job.allJobs);
  const job = useSelector((state) => state.job.job);
  const userDetails = useSelector((state) => state.user.userDetails);
  const { id, userType } = useParams();
  const [isAlreadyApplied, setIsAlreadyApplied] = useState(false);

  useEffect(() => {
    fetchAJob(id);
    fetchAllApprovedJobs();
    if (userType === "jobseeker") fetchAllJobs(true);
  }, []);

  useEffect(() => {
    // Check if the user has already applied for this job
    if (userDetails && userDetails.appliedJobs) {
      const hasApplied = userDetails.appliedJobs.some(
        (appliedJob) => appliedJob.jobId === job._id
      );
      setIsAlreadyApplied(hasApplied);
    }
  }, [userDetails, job]);

  const appliedHandler = () => {
    console.log("apply for this job", job._id);
    applyJob(job._id);
    navigate(`/${userType}/profile`);
  };

  const approveHandler = () => {
    console.log("approve job", job._id);
    adminService.approveJob(job._id);
  };

  const rejectHander = () => {
    console.log("reject job", job._id);
    adminService.rejectJob(job._id);
  };

  const sendHandler = () => {
    console.log("send-message", job.postedBy);
    navigate(`/jobseeker/chat/${job.postedBy}`);
  };

  return (
    <>
      <Navbar />
      <section className="lg:py-24 py-12 dark:bg-dark-secondary-100 dark:text-secondary-100">
        <div className="container mx-auto max-w-4xl">
          {/* job card */}
          <div className="jobs-card flex flex-col items-center pb-4 gap-6">
            <div className="card-body border-b sm:flex w-full p-6">
              <div className="comp-logo ">
                <img
                  src="https://codescandy.com/geeks-bootstrap-5/assets/images/job/job-brand-logo/job-list-logo-1.svg"
                  alt=""
                  className="border rounded-full mr-6 mb-3"
                />
              </div>
              <div className="flex flex-col w-full gap-10">
                <div className="comp-description flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <div className="flex">
                      <h3 className="font-semibold text-2xl">
                        {job.title || "null"}
                      </h3>
                      <span className="text-red-600 font-normal ml-2 mt-1 bg-red-50 px-3 rounded-lg">
                        {job.type || "null"}
                      </span>
                    </div>
                    <div>
                      <span
                        className="text-2xl hover:cursor-pointer"
                        onClick={sendHandler}
                      >
                        <IoIosSend />
                      </span>
                    </div>
                  </div>
                  <div className="text-secondary-200 flex flex-row gap-3">
                    <span>{job.company}</span>
                    <span className="text-secondary-300 dark:text-secondary-100">
                      4.5 ⭐
                    </span>
                    <span>(131 Reviews)</span>
                  </div>
                </div>
                <div className="">
                  <div className="sm:flex justify-between text-secondary-200">
                    <div className="flex flex-row gap-3">
                      <div className="flex items-center gap-1">
                        <span className="">
                          <IoCalendarClearOutline />
                        </span>
                        <span>{job.period || "null"}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span>
                          <LiaRupeeSignSolid />
                        </span>
                        <span>{job.salary || "null"}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span>
                          <IoLocationOutline />
                        </span>
                        <span>{job.location || "null"}</span>
                      </div>
                    </div>
                    <div className="">{TimeTracker(job.createdAt)}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-12 px-6">
            <div>
              <p className="text-secondary-200 dark:text-secondary-100">
                Job Applicants:{" "}
                <span className="text-secondary-300 dark:text-secondary-100">
                  306
                </span>
              </p>
            </div>
            {/* text */}
            <div className="space-y-3">
              <h2 className="text-secondary-300 text-xl font-semibold dark:text-secondary-100">
                Job description
              </h2>
              <p className="text-secondary-200 ">
                Maintains information technology strategies by managing staff
                researching, Budgeting and implementing technological strategic
                solutions.
              </p>
            </div>
            <div className="space-y-3">
              <h2 className="text-secondary-300 text-xl font-semibold dark:text-secondary-100">
                Role
              </h2>
              <p className="text-secondary-200 ">
                Aliquam pellentesque mollis interdum. Proin ligula lacus,
                maximus quis ante a, luctus sodales sapien. Donec ut tristique
                nisi. Nulla a quam sit amet turpis convallis porttitor vel sed
                quam. Ut in odio enim. Maecenas eu tellus erat. Maecenas nec
                maximus elit, ac suscipit justo. Maecenas nisl tellus, sodales
                non gravida eget, placerat sit amet erat.
              </p>
            </div>
            {/* list */}
            <div className="space-y-3 ">
              <h2 className="text-secondary-300 text-xl dark:text-secondary-100 font-semibold">
                Responsibilities
              </h2>
              <ul className="text-secondary-200 pl-8">
                <li className="list-disc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elitì
                </li>
                <li className="list-disc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elitì
                </li>
                <li className="list-disc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elitì
                </li>
                <li className="list-disc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elitì
                </li>
                <li className="list-disc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elitì
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h2 className="text-secondary-300 text-xl dark:text-secondary-100 font-semibold">
                Desired Candidate Profile
              </h2>
              <ul className="text-secondary-200 pl-8">
                <li className="list-disc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elitì
                </li>
                <li className="list-disc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elitì
                </li>
                <li className="list-disc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elitì
                </li>
                <li className="list-disc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elitì
                </li>
                <li className="list-disc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elitì
                </li>
              </ul>
            </div>
            {userType == "jobseeker" ? (
              <div>
                <button
                  onClick={appliedHandler}
                  className="bg-primary-200 hide hover:bg-primary-400 text-white rounded-md w-full py-2 font-medium"
                  disabled={isAlreadyApplied}
                >
                  {isAlreadyApplied ? "Already Applied" : "Apply For This Job"}
                </button>
              </div>
            ) : (
              <div className="flex gap-12 justify-between">
                <button
                  onClick={approveHandler}
                  className="bg-green-400 hide hover:bg-green-500 text-white rounded-md w-full py-2 font-medium"
                >
                  Approve
                </button>
                <button
                  onClick={rejectHander}
                  className="bg-red-400 hide hover:bg-red-500 text-white rounded-md w-full py-2 font-medium"
                >
                  Reject
                </button>
              </div>
            )}
          </div>
        </div>
        {/* related jobs */}
        {/* <div className='container mx-auto  max-w-4xl mt-12'>
                    <h2 className='text-secondary-300 text-2xl font-semibold mb-6 ml-6'>Similar Jobs</h2>
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
                </div> */}
      </section>
    </>
  );
}

export default SingleJobs;
