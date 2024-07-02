import React, { createContext, useState } from 'react'
import axios from 'axios'

export const AdminContext = createContext();

function AdminProvider({ children }) {


    // admin approve and reject
    const AdminReject = (id) => {
        return () => {
            console.log("context-admin-AdminReject", id);
            const jwtToken = localStorage.getItem("userToken");
            axios.patch(`${import.meta.env.VITE_BACKEND_URL}/admin/disapprove/${id}`, {
                headers: {
                    Authorization: `Bearer ${jwtToken}`,
                }
            }).then((response) => {
                console.log("context-admin-AdminReject", response.data);

            }).catch((err) => {
                console.log(err);
            })
        }

    }

    const AdminApprove = (id) => {
        return () => {
            console.log("context-admin-AdminApprove", id);
            const jwtToken = localStorage.getItem("userToken");
            axios.patch(`${import.meta.env.VITE_BACKEND_URL}/admin/approve/${id}`, {
                headers: {
                    Authorization: `Bearer ${jwtToken}`,
                }
            }).then((response) => {
                console.log("context-admin-AdminApprove", response.data);

            }).catch((err) => {
                console.log(err);
            })
        }
    }


    const value = {
        AdminApprove,
        AdminReject
    }
    return (
        <AdminContext.Provider value={value}>
            {children}
        </AdminContext.Provider>
    )
}

export default AdminProvider