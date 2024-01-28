import axios from "axios";
import UserContext from "./userContext";
import { useState, useEffect } from "react";
import React from 'react'

function UserState({ children }) {
    const [userDetails, setUserDetails] = useState({})
    const [companyDetails, setCompanyDetails] = useState({})
    const [loginData, setLoginData] = useState({})
    const [signupData, setSignupData] = useState({})


    const userData = () => {
        const jwtToken = localStorage.getItem("userToken");
        axios.get('http://localhost:5000/api/v1/jobseeker/userProfile', {
            headers: {
                Authorization: `Bearer ${jwtToken}`,
            }
        })
            .then((response) => {
                console.log('response', response.data)
                setUserDetails(response.data);
                console.log('done')
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const companyData = () => {
        const jwtToken = localStorage.getItem("userToken");
        axios.get('http://localhost:5000/api/v1/jobseeker/userProfile', {
            headers: {
                Authorization: `Bearer ${jwtToken}`,
            }
        })
            .then((response) => {
                console.log('response', response.data)
                setUserDetails(response.data);
                console.log('done')
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        userData()
        companyData()
    }, [loginData])

    const value = {
        loginData,
        setLoginData,
        signupData,
        setSignupData,
        userDetails,
        setUserDetails
    };
    return (
        <UserContext.Provider value={value} >
            {children}
        </UserContext.Provider>
    )
}

export default UserState