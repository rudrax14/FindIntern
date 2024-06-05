import conf from "../conf/conf";
import axios from "axios";
import authService from "./authService";


class AdminService {
    backend;
    adminUrl;
    constructor() {
        this.backend = conf.backendUrl;
        this.adminUrl = "admin";
    }


    async rejectJob(id) {
        try {
            const authHeader = authService.requestAuthHeaders();
            const response = await axios.patch(`${this.backend}/${this.adminUrl}/disapprove/${id}`, {}, authHeader);
            if (response.data?.job) {
                return response.data.job;
            }
            return response;
        } catch (err) {
            console.log("Job Reject error :: ", err);
            throw err;
        }
    }

    async approveJob(id) {
        try {
            const authHeader = authService.requestAuthHeaders();
            const response = await axios.patch(`${this.backend}/${this.adminUrl}/approve/${id}`, {}, authHeader);
            if (response.data?.job) {
                return response.data.job;
            }
            return response;
        } catch (err) {
            console.log("Job Approve error :: ", err);
            throw err;
        }
    }

};

const adminService = new AdminService();
export default adminService;