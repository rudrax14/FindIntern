import conf from "../conf/conf";
import axios from "axios";

class AuthService {
    backend;
    auth;

    constructor() {
        this.backend = conf.backendUrl;
        this.auth = "auth";
    }

    async createAccount(accountData) {
        try {
            const userAccount = await axios.post(`${this.backend}/${this.auth}/register`, accountData);
            if (userAccount.data?.token) {
                localStorage.setItem("userToken", userAccount.data.token);
                return userAccount.data;
            } else {
                return null;
            }
        } catch (err) {
            const error = err.response?.data?.message || "An error occurred";
            throw new Error(error);
        }
    }

    async login(accountData) {
        try {
            const userAccount = await axios.post(`${this.backend}/${this.auth}/login`, accountData);
            if (userAccount.data?.token) {
                localStorage.setItem("userToken", userAccount.data.token);
                return userAccount.data;
            } else {
                return null;
            }
        } catch (err) {
            const error = err.response?.data?.message || "An error occurred";
            throw new Error(error);
        }
    }

    async logout() {
        try {
            await axios.post(`${this.backend}/${this.auth}/logout`, {}, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('userToken')}`
                }
            });
            localStorage.removeItem("userToken");
            return true;
        } catch (err) {
            const error = err.response?.data?.message || "An error occurred";
            throw new Error(error);
        }
    }
}

const authService = new AuthService();
export default authService;
