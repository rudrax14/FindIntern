import React from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { IoLocationOutline, IoCalendarClearOutline } from "react-icons/io5";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { FaRegTrashAlt, FaPencilAlt } from "react-icons/fa";
import jobService from "../../services/jobService";
import { toast } from "react-hot-toast";
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { useSelector } from "react-redux";

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
  appliedUsers,
  postedBy,
}) {
  const navigate = useNavigate();
  const { userType } = useParams();
  const userDetails = useSelector((state) => state.user.userDetails);
  const deleteHandler = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (window.confirm("Are you sure you want to delete this job?")) {
      try {
        await jobService.deleteJob(id);
        toast.success("Job deleted successfully");
        setJobDeleted((prev) => !prev);
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
      className="jobs-card flex flex-col items-center pb-4 gap-6 cursor-pointer"
    >
      <div className="card-body border w-full p-6 rounded-lg shadow-sm hover:shadow-md dark:bg-dark-secondary-400 dark:border-none transition-shadow duration-300">
        <div className="md:flex items-start">
          <img
            src={logo}
            alt="comp-logo"
            className="border rounded-full w-14 h-14 mr-6 mb-4"
          />
          <div className="flex flex-col w-full gap-6">
            <div className="flex justify-between items-center">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-semibold text-lg dark:text-secondary-100">
                  {title || "null"}
                </h3>
                <span className="text-red-600 font-normal bg-red-50 px-3 py-1 rounded-lg text-sm">
                  {type || "null"}
                </span>
              </div>
              {userType == 'recruiter' && userDetails._id == postedBy?._id && (
                <div className={`flex space-x-4 dark:text-secondary-100 text-secondary-200`}>
                  <a onClick={editHandler} className="hover:text-blue-500">
                    <FaPencilAlt />
                  </a>
                  <a onClick={deleteHandler} className="hover:text-red-500">
                    <FaRegTrashAlt />
                  </a>
                </div>
              )}
            </div>
            <div className="text-secondary-200 flex flex-row items-center gap-3">
              <span className="text-sm">at {company}</span>
              {appliedUsers.length > 0 && (
                <AvatarGroup max={4} sx={{ '& .MuiAvatar-root': { width: 30, height: 30 } }}>
                  {appliedUsers.map((user, index) => (
                    <Avatar
                      key={index}
                      alt={user.userId.name}
                      src={user.userId.profileImgUrl}
                      title={user.userId.name}
                    />
                  ))}
                </AvatarGroup>
              )}
            </div>
            <div className="flex flex-col sm:flex-row justify-between text-secondary-200 ">
              <div className="flex flex-row gap-4 text-sm ">
                <div className="flex items-center gap-1">
                  <IoCalendarClearOutline />
                  <span>{period || "null"}</span>
                </div>
                <div className="flex items-center gap-1">
                  <LiaRupeeSignSolid />
                  <span>{salary || "null"}</span>
                </div>
                <div className="flex items-center gap-1">
                  <IoLocationOutline />
                  <span>{location || "null"}</span>
                </div>
              </div>
              <div className="text-sm text-end">{timeAgo || "null"}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobsCards;
