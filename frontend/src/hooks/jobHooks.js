import axios from "axios";
import { useDispatch } from "react-redux";
import { setJob, setAllJobs, setLoading, setError } from '../redux/Slice/jobSlice'; // adjust the path as necessary

function useJobHooks() {
    const dispatch = useDispatch();

    const fetchAllJobs = () => {
        const jwtToken = localStorage.getItem("userToken");
        dispatch(setLoading(true));
        axios.get(`http://localhost:5000/api/v1/job`, {
            headers: {
                Authorization: `Bearer ${jwtToken}`,
            }
        }).then((response) => {
            console.log("context-fetchAllJobs", response.data.jobs);
            const approvedJobs = response.data.jobs.filter(job => job.approved === false);
            dispatch(setAllJobs(approvedJobs));
            dispatch(setLoading(false));
        }).catch((err) => {
            console.log(err);
            dispatch(setError(err));
            dispatch(setLoading(false));
        });
    };

    const fetchAllAppliedJobs = () => {
        const jwtToken = localStorage.getItem("userToken");
        dispatch(setLoading(true));
        axios.get(`http://localhost:5000/api/v1/jobseeker/getAllAppliedJobs`, {
            headers: {
                Authorization: `Bearer ${jwtToken}`,
            }
        }).then((response) => {
            console.log("context-fetchAllAppliedJobs", response.data.appliedJobs);
            dispatch(setAllJobs(response.data.appliedJobs));
            dispatch(setLoading(false));
        }).catch((err) => {
            console.log(err);
            dispatch(setError(err));
            dispatch(setLoading(false));
        });
    };

    const fetchAllApprovedJobs = () => {
        const jwtToken = localStorage.getItem("userToken");
        dispatch(setLoading(true));
        axios.get(`http://localhost:5000/api/v1/job`, {
            headers: {
                Authorization: `Bearer ${jwtToken}`,
            }
        }).then((response) => {
            console.log("context-fetchAllJobs", response.data.jobs);
            const approvedJobs = response.data.jobs.filter(job => job.approved === true);
            dispatch(setAllJobs(approvedJobs));
            dispatch(setLoading(false));
        }).catch((err) => {
            console.log(err);
            dispatch(setError(err));
            dispatch(setLoading(false));
        });
    };

    const fetchAJob = (id) => {
        const jwtToken = localStorage.getItem("userToken");
        dispatch(setLoading(true));
        axios.get(`http://localhost:5000/api/v1/job/${id}`, {
            headers: {
                Authorization: `Bearer ${jwtToken}`,
            }
        }).then((response) => {
            console.log("context-fetchAJob", response.data.job);
            dispatch(setJob(response.data.job));
            dispatch(setLoading(false));
        }).catch((err) => {
            console.log(err);
            dispatch(setError(err));
            dispatch(setLoading(false));
        });
    };

    const fetchAllCompanyJobs = () => {
        const jwtToken = localStorage.getItem("userToken");
        dispatch(setLoading(true));
        axios.get(`http://localhost:5000/api/v1/recruiter/getAllPostedJobs`, {
            headers: {
                Authorization: `Bearer ${jwtToken}`,
            }
        }).then((response) => {
            console.log("context-fetchAllCompanyJobs", response.data.jobs);
            dispatch(setAllJobs(response.data.jobs));
            dispatch(setLoading(false));
        }).catch((err) => {
            console.log(err);
            dispatch(setError(err));
            dispatch(setLoading(false));
        });
    }

    const deleteJob = async (jobId) => {
        try {
            const jwtToken = localStorage.getItem("userToken");
            await axios.delete(`http://localhost:5000/api/v1/job/${jobId}`, {
                headers: {
                    Authorization: `Bearer ${jwtToken}`,
                }
            });
            dispatch(setAllJobs(prevJobs => prevJobs.filter(job => job._id !== jobId)));
        } catch (error) {
            console.log(error);
            dispatch(setError(error));
        }
    };

    const applyJob = async (jobId) => {
        try {
            const jwtToken = localStorage.getItem("userToken");
            await axios.patch(`http://localhost:5000/api/v1/jobseeker/apply/${jobId}`, {}, {
                headers: {
                    Authorization: `Bearer ${jwtToken}`,
                }
            }).then((response) => {
                console.log("context-applyJob", response.data);
            });
        } catch (error) {
            console.log(error);
            dispatch(setError(error));
        }
    }

    return { fetchAllJobs, fetchAllAppliedJobs, fetchAllApprovedJobs, fetchAJob, fetchAllCompanyJobs, deleteJob, applyJob };
}

export default useJobHooks;
