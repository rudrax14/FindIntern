import React, { useContext } from "react";
import { JobContext } from "../context/JobContext";
import { useNavigate, useParams } from "react-router-dom";

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
  const { userType } = useParams();
  return (
    <>
      <div
        onClick={() => {
          navigate(`/${userType}/job-profile/${id}`);
        }}
        className="jobs-card flex flex-col items-center pb-4 gap-6 px-6"
      >
        <div className="card-body border sm:flex w-full p-6 rounded-lg hover:shadow-md hover:cursor-pointer">
          <div className="comp-logo ">
            <img src={logo} alt="" className="border rounded-full mr-6 mb-3" />
          </div>
          <div className="flex flex-col w-full gap-10">
            <div className="comp-description flex flex-col gap-1">
              <div className="flex items-center">
                <h3 className="font-semibold text-base">{title || "null"}</h3>
                <span className="text-red-600 font-normal sm:ml-2 mt-1 bg-red-50 px-3 rounded-lg">
                  {type || "null"}
                </span>
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
                  <span>{period || "null"}</span>
                  <span> ₹ {salary || "null"}</span>
                  <span>{location || "null"}</span>
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
