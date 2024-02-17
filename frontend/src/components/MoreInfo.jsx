import React from 'react'
import { useParams } from 'react-router-dom'
import RecruiterMoreInfo from "../pages/recruiter/RecruiterMoreInfo"
import JobSeekerMoreInfo from "../pages/jobseeker/JobseekerMoreInfo"

function MoreInfo() {
    const {userType} = useParams();
    let template;
   
        if(userType==="recruiter"){
         template =  <RecruiterMoreInfo />
        }else if(userType === "jobseeker"){
           template =  <JobSeekerMoreInfo />
        }
   
  return (
   <>
   {template}
   </>
    
  )
}

export default MoreInfo