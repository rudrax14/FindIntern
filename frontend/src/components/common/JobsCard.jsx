import React from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { IoLocationOutline, IoCalendarClearOutline } from "react-icons/io5";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { FaRegTrashAlt, FaPencilAlt } from "react-icons/fa";
import jobService from "../../services/jobService";
import { toast } from "react-hot-toast";

function JobsCards({
  logo,
  title,
  type,
  company,
  period,
  salary,
  location,
  id,
  timeAgo,
  setJobDeleted,
}) {
  const navigate = useNavigate();
  const routerlocation = useLocation();
  const { userType } = useParams();

  const deleteHandler = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (window.confirm("Are you sure you want to delete this job?")) {
      try {
        await jobService.deleteJob(id);
        toast.success("Job deleted successfully");
        setJobDeleted(prev => !prev); // Toggle jobDeleted state to trigger useEffect
      } catch (err) {
        console.error(err);
        toast.error("Failed to delete job");
      }
    }
  };

  const editHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(`/recruiter/edit-a-job/${id}`);
  };

  return (
    <div
      onClick={() => {
        navigate(`/${userType}/job-profile/${id}`);
      }}
      className="jobs-card flex flex-col items-center pb-4 gap-6"
    >
      <div className="card-body border sm:flex w-full p-6 rounded-lg hover:shadow-md hover:cursor-pointer dark:bg-dark-secondary-400 dark:border-none">
        <div className="comp-logo">
          <img src={logo} alt="comp-logo" className="border rounded-full mr-6 mb-3 w-14" />
        </div>
        <div className="flex flex-col w-full gap-10">
          <div className="comp-description flex flex-col gap-1">
            <div className="flex justify-between">
              <div className="flex items-center">
                <h3 className="font-semibold text-base dark:text-secondary-100">{title || "null"}</h3>
                <span className="text-red-600 font-normal sm:ml-2 mt-1 bg-red-50 px-3 rounded-lg">
                  {type || "null"}
                </span>
              </div>
              <div className={`flex space-x-4 ${routerlocation.pathname === "/recruiter/profile" ? "delete-button block" : "delete-button hidden"}`}>
                <div className="dark:text-secondary-100">
                  <a onClick={editHandler}>
                    <FaPencilAlt />
                  </a>
                </div>
                <div className="dark:text-secondary-100">
                  <a onClick={deleteHandler}>
                    <FaRegTrashAlt />
                  </a>
                </div>
              </div>
            </div>
            <div className="text-secondary-200 flex flex-row gap-3">
              <span>at {company}</span>
              <span className="text-secondary-300 dark:text-secondary-200">4.5 ⭐</span>
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
                  <span>{period || "null"}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span>
                    <LiaRupeeSignSolid />
                  </span>
                  <span>{salary || "null"}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span>
                    <IoLocationOutline />
                  </span>
                  <span>{location || "null"}</span>
                </div>
              </div>
              <div className="">{timeAgo || "null"}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobsCards;
