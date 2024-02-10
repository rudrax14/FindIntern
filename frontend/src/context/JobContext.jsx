import React, { createContext, useState } from 'react'
import axios from "axios";


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
        const postAJob = ()=>{};
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


