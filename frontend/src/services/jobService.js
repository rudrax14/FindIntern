import conf from "../conf/conf";
import axios from "axios";
import authService from "./authService";



class JobService{
    backend;
    jobUrl; 
    constructor(){
        this.backend = conf.backendUrl;
        this.jobUrl = "job"
    }

    async postJob(jobData){ 
        try{
            const authHeader = authService.requestAuthHeaders();

            const response = await axios.post(`${this.backend}/${this.jobUrl}`,jobData,authHeader);
            if(response.data?.newJob){
                return response.data.newJob;
            }else{
               return response;
            }
        }catch(err){
            console.log("Job Post error :: ",err);
            throw err;
        }
    }

    async getAllJobs(status){
        try{
            const authHeader = authService.requestAuthHeaders();
            const response = await axios.get(`${this.backend}/${this.jobUrl}?approved=${status}`,authHeader);
            if(response.data?.jobs){
                return response.data.jobs;
            }
            return response;
            
        }catch(err){
            console.log("Get All Jobs error :: ",err);
            throw err;
        }
    }

    async getSingleJob(jobId){
        try{
            const authHeader = authService.requestAuthHeaders();
            const response = await axios.get(`${this.backend}/${this.jobUrl}/${jobId}`,authHeader);
            if(response.data?.job){
                return response.data.job;
            }
            return response;
        }catch(err){
            console.log("Get single job error :: ",err);
            throw err;
        }
    }

    async deleteJob(id){
        try{
            const authHeader = authService.requestAuthHeaders();
            await axios.delete(`${this.backend}/${this.jobUrl}/${id}`,authHeader);
        }catch(err){
            console.log("Delete Job error :: ",err);
            throw err;
        }
    }

    async updateJob(id,jobData){
        try{
            const authHeader = authService.requestAuthHeaders();
            await axios.patch(`${this.backend}/${this.jobUrl}/${id}`,jobData,authHeader);
        }catch(err){
            console.log("Update Job error :: ",err);
            throw err;
        }
    }
}



const jobService = new JobService();
export default jobService;