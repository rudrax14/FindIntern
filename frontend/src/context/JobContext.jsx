import React, { createContext, useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';


export const JobContext = createContext();

const JobProvider = ({children})=>{
        const [allJobs,setAllJobs] = useState([]);
        const [job,setJob] = useState({});
        
        const fetchAllJobs = ()=>{
                const jwtToken = localStorage.getItem("userToken");
                axios.get(`http://localhost:5000/api/v1/job`, {
                        headers: {
                            Authorization: `Bearer ${jwtToken}`,
                        }
                    }).then((response)=>{
                        setAllJobs(response.data.jobs);
                    }).catch((err)=>{
                        console.log(err);
                    })
        };
        const postAJob = (formData)=>{
            const jwtToken = localStorage.getItem("userToken");
            axios.post(`http://localhost:5000/api/v1/job`,formData, {
                        headers: {
                            Authorization: `Bearer ${jwtToken}`,
                        }
                    }).then((response)=>{
                        setJob(response.data.newJob);
                        
                    }).catch((err)=>{
                        console.log(err);
                    })
        };
        const fetchAJob = (id)=>{
                const jwtToken = localStorage.getItem("userToken");
                axios.get(`http://localhost:5000/api/v1/job/${id}`, {
                        headers: {
                            Authorization: `Bearer ${jwtToken}`,
                        }
                    }).then((response)=>{
                        setJob(response.data.job);
                        
                    }).catch((err)=>{
                        console.log(err);
                    })
        };


        const value = {
                fetchAllJobs,
                postAJob,
                fetchAJob,
                allJobs,
                job
        }
        return (
                <JobContext.Provider value={value} >
                    {children}
                </JobContext.Provider>
            )

}

export default JobProvider;


