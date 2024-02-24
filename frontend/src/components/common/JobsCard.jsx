import React, { useContext } from "react";
import { JobContext } from "../../context/JobContext";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { IoLocationOutline, IoCalendarClearOutline } from "react-icons/io5";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { FaRegTrashAlt } from "react-icons/fa";

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
  rating,
  reviews,
  experience,
}) {
  const navigate = useNavigate();
  const routerlocation = useLocation();
  const { userType } = useParams();
  const { deleteJob } = useContext(JobContext);


  const handleDelete = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (window.confirm("Are you sure you want to delete this job?")) {
      deleteJob(id);
    }
  };
  return (
    <>
      <div
        onClick={() => {
          navigate(`/${userType}/job-profile/${id}`);
        }}
        className="jobs-card flex flex-col items-center pb-4 gap-6"
      >
        <div className="card-body border sm:flex w-full p-6 rounded-lg hover:shadow-md hover:cursor-pointer">
          <div className="comp-logo ">
            <img src={logo} alt="" className="border rounded-full mr-6 mb-3 w-14" />
          </div>
          <div className="flex flex-col w-full gap-10">
            <div className="comp-description flex flex-col gap-1">
              <div className="flex justify-between">
                <div className="flex items-center">
                  <h3 className="font-semibold text-base">{title || "null"}</h3>
                  <span className="text-red-600 font-normal sm:ml-2 mt-1 bg-red-50 px-3 rounded-lg">
                    {type || "null"}
                  </span>
                </div>
                {/* // delete button */}
                <div className={routerlocation.pathname === "/recruiter/profile" ? "delete-button block" : "delete-button hidden"} onClick={handleDelete}>
                  <a href="/">
                    <FaRegTrashAlt />
                  </a>
                </div>
              </div>
              <div className="text-secondary-200 flex flex-row gap-3">
                <span>at {company}</span>
                <span className="text-secondary-300">4.5 ⭐</span>
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
    </>
  );
}

export default JobsCards;
