import React, { useEffect, useState } from "react";
import Navbar from "../../components/common/Navbar";
import { useParams, useNavigate } from "react-router-dom";
import TimeTracker from "../../utils/TimeTracker";
import { IoCalendarClearOutline, IoLocationOutline } from "react-icons/io5";
import { LiaRupeeSignSolid } from "react-icons/lia";
import useJobHooks from "../../hooks/jobHooks";
import { useSelector } from "react-redux";
import adminService from "../../services/adminService";
import { IoIosSend } from "react-icons/io";
import { io } from "socket.io-client";
import AppliedUsers from "../../components/AppliedUsers";
import toast from "react-hot-toast";

function SingleJobs() {
  const navigate = useNavigate();
  const { fetchAllJobs, fetchAJob, applyJob } = useJobHooks();
  const job = useSelector((state) => state.job.job);
  const userDetails = useSelector((state) => state.user.userDetails);
  const { id, userType } = useParams();
  const [isAlreadyApplied, setIsAlreadyApplied] = useState(false);


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    fetchAJob(id);
    if (userType === "jobseeker") fetchAllJobs(true);
    scrollToTop();
  }, [id, userType]);

  // Check if user has already applied for the job
  useEffect(() => {
    if (userDetails && job && userDetails.appliedJobs) {
      const hasApplied = userDetails.appliedJobs.some(
        (appliedJob) => appliedJob.jobId === job._id
      );
      setIsAlreadyApplied(hasApplied);
    }
  }, [userDetails, job]);

  // Socket connection
  useEffect(() => {
    
  }, []);

  // Job Applied handlers & Send Socket message
  const appliedHandler = () => {
    applyJob(job._id);
    const selectedUserId = job.postedBy._id;
    const currentUserId = userDetails._id;
    const senderDetails = { userType, currentUserId };
    const socket = io("http://localhost:5000");
    socket.emit("join", senderDetails);
    const messageData = {
      sender: currentUserId,
      receiver: selectedUserId,
      message: `I have applied for this job (${job.title})`,
      role: userType,
    };
    socket.emit("sendMessage", messageData);
    navigate(`/${userType}/chat/`);
  };

  // Admin approve & reject handlers
  const approveHandler = () => {

    adminService.approveJob(job._id);
    fetchAllJobs()
    toast.success("Job Approved");
    navigate(`/${userType}/dashboard`);
  };

  const rejectHandler = () => {
    adminService.rejectJob(job._id);
    fetchAllJobs()
    toast.success("Job Rejected");
    navigate(`/${userType}/dashboard`);
  };

  // Send redirect message handler
  const sendHandler = () => {
    navigate(`/jobseeker/chat/${job.postedBy._id}`);
  };

  // Loading state
  if (!job || !userDetails) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <section className="lg:py-24 py-12 bg-white dark:bg-dark-secondary-100 dark:text-secondary-100">
        <div className="container mx-auto max-w-4xl">
          <div className="jobs-card flex flex-col items-center pb-4 gap-6">
            <div className="card-body border-b sm:flex w-full p-6">
              <div className="comp-logo">
                <img
                  src={job.postedBy && job.postedBy.profileImgUrl}
                  alt=""
                  className="border rounded-full mr-6 mb-3 h-16"
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
                    {userType != 'recruiter' && <div>
                      <span
                        className="text-2xl hover:cursor-pointer"
                        onClick={sendHandler}
                      >
                        <IoIosSend />
                      </span>
                    </div>}
                  </div>
                  <div className="text-secondary-200 flex flex-row gap-3">
                    <span>{job.company}</span>
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
                  {job.appliedUsers ? job.appliedUsers.length : 0}
                </span>
              </p>
            </div>
            <div className="space-y-3">
              <h2 className="text-secondary-300 text-xl font-semibold dark:text-secondary-100">
                Job description
              </h2>
              <p className="text-secondary-200 ">
                {job.description || "null"}
              </p>
            </div>
            <div className="space-y-3">
              <h2 className="text-secondary-300 text-xl font-semibold dark:text-secondary-100">
                Role
              </h2>
              <p className="text-secondary-200 ">
                {job.department || "null"}
              </p>
            </div>
            <div className="space-y-3">
              <h2 className="text-secondary-300 text-xl dark:text-secondary-100 font-semibold">
                Responsibilities
              </h2>
              <ul className="text-secondary-200 pl-8">
                <li className="list-disc">
                  Collaborate with team members to design and implement new features.
                </li>
                <li className="list-disc">
                  Maintain and improve existing codebase to ensure optimal performance.
                </li>
                <li className="list-disc">
                  Participate in code reviews to maintain code quality and share knowledge.
                </li>
                <li className="list-disc">
                  Write comprehensive documentation for new and existing features.
                </li>
                <li className="list-disc">
                  Troubleshoot and resolve issues reported by users and stakeholders.
                </li>
                <li className="list-disc">
                  Stay updated with the latest industry trends and technologies.
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h2 className="text-secondary-300 text-xl dark:text-secondary-100 font-semibold">
                Desired Candidate Profile
              </h2>
              <ul className="text-secondary-200 pl-8">
                <li className="list-disc">
                  Proven experience in the relevant field with a strong portfolio of work.
                </li>
                <li className="list-disc">
                  Excellent problem-solving skills and attention to detail.
                </li>
                <li className="list-disc">
                  Strong communication and teamwork abilities.
                </li>
                <li className="list-disc">
                  Ability to manage multiple tasks and meet deadlines.
                </li>
                <li className="list-disc">
                  Proficiency in relevant software/tools/technologies.
                </li>
                <li className="list-disc">
                  A proactive and self-motivated approach to work.
                </li>
              </ul>
            </div>


            <section className="Handler">
              {userType === "jobseeker" ? (
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
                userType === "admin" && (
                  <div className="flex gap-12 justify-between">
                    <button
                      onClick={approveHandler}
                      className="bg-green-400 hide hover:bg-green-500 text-white rounded-md w-full py-2 font-medium"
                    >
                      Approve
                    </button>
                    <button
                      onClick={rejectHandler}
                      className="bg-red-400 hide hover:bg-red-500 text-white rounded-md w-full py-2 font-medium"
                    >
                      Reject
                    </button>
                  </div>
                )
              )}
            </section>
          </div>
        </div>
        {/* // Applied Users cards */}
        {userType === "recruiter" && job.appliedUsers?.length > 0 && job.postedBy._id === userDetails._id && (
          <AppliedUsers user={job.appliedUsers} jobId={job._id} />
        )}
      </section>
    </>
  );
}

export default SingleJobs;