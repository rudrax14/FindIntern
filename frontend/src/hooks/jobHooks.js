import axios from "axios";
import { useDispatch } from "react-redux";
import {
  setJob,
  setAllJobs,
  setLoading,
  setError,
  setUserChatList,
} from "../redux/Slice/jobSlice";
import jobService from "../services/jobService";
import { setUserList } from "../redux/Slice/chatSlice";

function useJobHooks() {
  const dispatch = useDispatch();

  const fetchAllJobs = async (status) => {
    try {
      dispatch(setLoading(true));
      const allJobs = await jobService.getAllJobs(status);
      console.log("fetchJobs", allJobs);
      dispatch(setAllJobs(allJobs));
      dispatch(setLoading(false));
    } catch (err) {
      console.log(err);
      dispatch(setError(err));
      dispatch(setLoading(false));
    }
  };

  const fetchAllAppliedJobs = (value) => {
    const jwtToken = localStorage.getItem("userToken");
    dispatch(setLoading(true));
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/jobseeker/getAllAppliedJobs`, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      })
      .then((response) => {
        console.log("hooks-fetchAllAppliedJobs", response.data.appliedJobs);
        dispatch(setAllJobs(response.data.appliedJobs));
        dispatch(setLoading(false));
        // chat-jobseeker
        const chatList = response.data.appliedJobs.map((job) => {
          return {
            name: job.company,
            title: job.title,
            profileImage: job.postedBy.profileImgUrl,
            userId: job.postedBy._id,
          };
        });
        // Use a Set to track unique userIds
        const uniqueUsers = new Set();
        const uniqueChatList = [];

        chatList.forEach((user) => {
          if (!uniqueUsers.has(user.userId)) {
            uniqueUsers.add(user.userId);
            uniqueChatList.push(user);
          }
        });
        dispatch(setUserList(uniqueChatList));
      })
      .catch((err) => {
        console.log(err);
        dispatch(setError(err));
        dispatch(setLoading(false));
      });
  };

  const fetchAllApprovedJobs = () => {
    const jwtToken = localStorage.getItem("userToken");
    dispatch(setLoading(true));
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/job`, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      })
      .then((response) => {
        console.log("context-fetchAllJobs", response.data.jobs);
        const approvedJobs = response.data.jobs.filter(
          (job) => job.approved === true
        );
        dispatch(setAllJobs(approvedJobs));
        dispatch(setLoading(false));
      })
      .catch((err) => {
        console.log(err);
        dispatch(setError(err));
        dispatch(setLoading(false));
      });
  };

  const fetchAJob = async (id) => {
    try {
      dispatch(setLoading(true));
      const job = await jobService.getSingleJob(id);
      dispatch(setJob(job));
      dispatch(setLoading(false));
    } catch (err) {
      console.log(err);
      dispatch(setError(err));
      dispatch(setLoading(false));
    }
  };

  const fetchAllCompanyJobs = () => {
    const jwtToken = localStorage.getItem("userToken");
    dispatch(setLoading(true));
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/recruiter/getAllPostedJobs`, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      })
      .then((response) => {
        console.log("context-fetchAllCompanyJobs", response.data.jobs);
        dispatch(setAllJobs(response.data.jobs));
        dispatch(setLoading(false));
        const chatList = response.data.jobs.flatMap((job) => {
          return job.appliedUsers.map((appliedUser) => {
            return {
              name: appliedUser.userId.name,
              title: appliedUser.userId.location,
              profileImage: appliedUser.userId.profileImgUrl,
              userId: appliedUser.userId._id,
            };
          });
        });

        // Use a Set to track unique userIds
        const uniqueUsers = new Set();
        const uniqueChatList = [];

        chatList.forEach((user) => {
          if (!uniqueUsers.has(user.userId)) {
            uniqueUsers.add(user.userId);
            uniqueChatList.push(user);
          }
        });

        dispatch(setUserList(uniqueChatList));
      })
      .catch((err) => {
        console.log(err);
        dispatch(setError(err));
        dispatch(setLoading(false));
      });
  };

  const deleteJob = async (jobId) => {
    try {
      const jwtToken = localStorage.getItem("userToken");
      await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/job/${jobId}`, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      });
      dispatch(
        setAllJobs((prevJobs) => prevJobs.filter((job) => job._id !== jobId))
      );
    } catch (error) {
      console.log(error);
      dispatch(setError(error));
    }
  };

  const applyJob = async (jobId) => {
    try {
      const jwtToken = localStorage.getItem("userToken");
      await axios
        .patch(
          `${import.meta.env.VITE_BACKEND_URL}/jobseeker/apply/${jobId}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${jwtToken}`,
            },
          }
        )
        .then((response) => {
          console.log("context-applyJob", response.data);
        });
    } catch (error) {
      console.log(error);
      dispatch(setError(error));
    }
  };

  return {
    fetchAllJobs,
    fetchAllAppliedJobs,
    fetchAllApprovedJobs,
    fetchAJob,
    fetchAllCompanyJobs,
    deleteJob,
    applyJob,
  };
}

export default useJobHooks;
