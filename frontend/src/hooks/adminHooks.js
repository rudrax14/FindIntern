import { useState } from 'react';
import axios from 'axios';

export const useAdminHooks = () => {

    const AdminReject = (id) => {
        console.log("hook-admin-AdminReject", id);
        const jwtToken = localStorage.getItem("userToken");
        return axios.patch(`http://localhost:5000/api/v1/admin/disapprove/${id}`, {}, {
            headers: {
                Authorization: `Bearer ${jwtToken}`,
            }
        }).then((response) => {
            console.log("hook-admin-AdminReject", response.data);
        }).catch((err) => {
            console.log(err);
        });
    }

    const AdminApprove = (id) => {
        console.log("hook-admin-AdminApprove", id);
        const jwtToken = localStorage.getItem("userToken");
        return axios.patch(`http://localhost:5000/api/v1/admin/approve/${id}`, {}, {
            headers: {
                Authorization: `Bearer ${jwtToken}`,
            }
        }).then((response) => {
            console.log("hook-admin-AdminApprove", response.data);
        }).catch((err) => {
            console.log(err);
        });
    }

    return { AdminApprove, AdminReject };
};

export default useAdminHooks;