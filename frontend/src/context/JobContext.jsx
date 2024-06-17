// import React, { createContext, useState } from 'react'
// import axios from "axios";
// import { useNavigate } from 'react-router-dom';


// export const JobContext = createContext();

// const JobProvider = ({ children }) => {
//     const [allJobs, setAllJobs] = useState([]);
//     const [job, setJob] = useState([]);
//     // const [allApprovedJobs, setAllApprovedJobs] = useState([]);
//     // const [allAppliedJobs, setAllAppliedJobs] = useState([]);

//     // for admin only
//     const fetchAllJobs = () => {
//         const jwtToken = localStorage.getItem("userToken");
//         axios.get(`http://localhost:5000/api/v1/job`, {
//             headers: {
//                 Authorization: `Bearer ${jwtToken}`,
//             }
//         }).then((response) => {
//             console.log("context-fetchAllJobs", response.data.jobs);

//             // Filter jobs where approved is true
//             const approvedJobs = response.data.jobs.filter(job => job.approved === false);

//             setAllJobs(approvedJobs);
//         }).catch((err) => {
//             console.log(err);
//         })
//     };

//     const fetchAllAppliedJobs = () => {
//         const jwtToken = localStorage.getItem("userToken");
        
//         axios.get(`http://localhost:5000/api/v1/jobseeker/getAllAppliedJobs`, {
//             headers: {
//                 Authorization: `Bearer ${jwtToken}`,
//             }
//         }).then((response) => {
//             console.log("context-fetchAllAppliedJobs", response.data.appliedJobs);
//             setAllJobs(response.data.appliedJobs);
//         }).catch((err) => {
//             console.log(err);
//         })
//     };

//     // fetch all approved jobs for users
//     const fetchAllApprovedJobs = () => {
//         const jwtToken = localStorage.getItem("userToken");
//         axios.get(`http://localhost:5000/api/v1/job`, {
//             headers: {
//                 Authorization: `Bearer ${jwtToken}`,
//             }
//         }).then((response) => {
//             console.log("context-fetchAllJobs", response.data.jobs);

//             // Filter jobs where approved is true
//             const approvedJobs = response.data.jobs.filter(job => job.approved === true);

//             setAllJobs(approvedJobs);
//         }).catch((err) => {
//             console.log(err);
//         })
//     };

//     // const postAJob = (formData) => {
//     //     const jwtToken = localStorage.getItem("userToken");
//     //     axios.post(`http://localhost:5000/api/v1/job`, formData, {
//     //         headers: {
//     //             Authorization: `Bearer ${jwtToken}`,
//     //         }
//     //     }).then((response) => {
//     //         setJob(response.data.newJob);
//     //         useNavigate('/jobs')
//     //     }).catch((err) => {
//     //         console.log(err);
//     //     })
//     // };
//     const fetchAJob = (id) => {
//         const jwtToken = localStorage.getItem("userToken");
//         axios.get(`http://localhost:5000/api/v1/job/${id}`, {
//             headers: {
//                 Authorization: `Bearer ${jwtToken}`,
//             }
//         }).then((response) => {
//             console.log("context-fetchAJob", response.data.job);
//             setJob(response.data.job);

//         }).catch((err) => {
//             console.log(err);
//         })
//     };

//     const fetchAllCompanyJobs = () => {
//         const jwtToken = localStorage.getItem("userToken");
//         axios.get(`http://localhost:5000/api/v1/recruiter/getAllPostedJobs`, {
//             headers: {
//                 Authorization: `Bearer ${jwtToken}`,
//             }
//         }).then((response) => {
//             console.log("context-fetchAllCompanyJobs", response.data.jobs);
//             setAllJobs(response.data.jobs);

//         }).catch((err) => {
//             console.log(err);
//         })
//     }

//     const deleteJob = async (jobId) => {
//         try {
//             const jwtToken = localStorage.getItem("userToken");
//             await axios.delete(`http://localhost:5000/api/v1/job/${jobId}`, {
//                 headers: {
//                     Authorization: `Bearer ${jwtToken}`,
//                 }
//             });
//             setAllJobs(allJobs.filter(job => job._id !== jobId));
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     // apply for a job
//     const applyJob = async (jobId) => {
//         // console.log("context-applyJob", jobId);
//         try {
//             const jwtToken = localStorage.getItem("userToken");
//             await axios.patch(`http://localhost:5000/api/v1/jobseeker/apply/${jobId}`, {}, {
//                 headers: {
//                     Authorization: `Bearer ${jwtToken}`,
//                 } // Add closing parenthesis here
//             }).then((response) => {
//                 console.log("context-applyJob", response.data);
//             });
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     const value = {
//         fetchAllJobs,
//         // postAJob,
//         fetchAJob,
//         allJobs,
//         job,
//         setJob,
//         fetchAllCompanyJobs,
//         deleteJob,
//         fetchAllApprovedJobs,
//         applyJob,
//         fetchAllAppliedJobs,
//     }
//     return (
//         <JobContext.Provider value={value} >
//             {children}
//         </JobContext.Provider>
//     )

// }

// export default JobProvider;


