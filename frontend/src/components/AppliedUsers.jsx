import React, { useState } from "react";
import profileHooks from "../hooks/profileHooks";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserProfiles } from "../redux/Slice/userSlice";
import axios from "axios";
import useJobHooks from "../hooks/jobHooks";
import Spinner from "./Spinner";

function AppliedUsers({ user, jobId }) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { profile } = profileHooks();
  const { fetchAJob } = useJobHooks();
  const [loader, setLoader] = useState(false);



  const clickHandler = async (profileId, username) => {
    console.log("Selected", profileId, username);
    try {
      const data = await profile(profileId, username);
      if (data && data.data) {
        console.log("data", data.data);
        dispatch(setUserProfiles(data.data));
        navigate(`/visit/${data.data.username}/${data.data._id}`);
      } else {
        console.error("No data received from profile function");
      }
    } catch (error) {
      console.error("Error fetching profile data", error);
    }
  };

  const selectHandler = (jobId, userId) => {
    setLoader(true);
    console.log("Selected", jobId, userId);
    const jwtToken = localStorage.getItem("userToken");
    axios
      .patch(
        `${import.meta.env.VITE_BACKEND_URL}/job/select-reject/${jobId}`,
        {
          status: true,
          userId: userId,
        },
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        fetchAJob(id);
        setLoader(false);
      })
      .catch((err) => {
        setLoader(false);
        console.log(err);
      });
  };

  const rejectHandler = (jobId, userId) => {
    setLoader(true);
    console.log("Rejected", jobId, userId);
    const jwtToken = localStorage.getItem("userToken");
    axios
      .patch(
        `${import.meta.env.VITE_BACKEND_URL}/job/select-reject/${jobId}`,
        {
          status: false,
          userId: userId,
        },
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        fetchAJob(id);
        setLoader(false);
      })
      .catch((err) => {
        console.log(err);
        setLoader(false);
      });
  };

  if (loader) {
    return (<Spinner />)
  }

  return (
    <div className="container max-w-4xl mx-auto rounded-lg bg-white mt-6 p-8 shadow-lg dark:bg-dark-secondary-100 dark:border dark:border-secondary-200">
      <h3 className="text-2xl font-semibold text-secondary-300 dark:text-secondary-100 mb-8">
        Applied Users
      </h3>
      <div className="container mx-auto mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {user.length > 0 ? (
          user.map((user, index) => (
            <div
              key={index}
              className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden dark:bg-dark-secondary-100 dark:border dark:border-secondary-200"
            >
              <div className="flex flex-col items-center p-6">
                <div className="w-24 h-24 mb-4">
                  <img
                    onClick={() =>
                      clickHandler(user.userId._id, user.userId.username)
                    }
                    className="w-full h-full rounded-full object-cover hover:cursor-pointer"
                    src={user.userId.profileImgUrl}
                    alt={user.userId.name}
                  />
                </div>
                <h3 className="text-xl font-semibold text-secondary-300 dark:text-secondary-100">
                  {user.userId.name}
                </h3>
                <p className="mt-2 text-center text-secondary-500 dark:text-secondary-200">
                  {user.userId.username}
                </p>
                <div className="flex gap-10">
                  <p className="mt-2 text-center text-secondary-500 dark:text-secondary-200">
                    {user.userId.skills.join(", ")}
                  </p>
                  <p className="mt-2 text-center text-secondary-500 dark:text-secondary-200">
                    {user.userId.education}
                  </p>
                </div>
                <div className="mt-4 flex space-x-4">
                  <button
                    onClick={() => selectHandler(jobId, user.userId._id)}
                    className="px-4 py-2 bg-green-500 text-white text-sm font-medium rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    Selected
                  </button>
                  <button
                    onClick={() => rejectHandler(jobId, user.userId._id)}
                    className="px-4 py-2 bg-red-500 text-white text-sm font-medium rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    Not Selected
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="bg-white">
            No users applied yet
          </div>
        )}
      </div>

    </div>
  );
}

export default AppliedUsers;
