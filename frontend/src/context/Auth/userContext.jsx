import axios from "axios";
import React, { useState, useEffect, createContext, useMemo, useCallback } from 'react'


export const UserContext = createContext();


const UserProvider = ({ children }) => {
    const [userDetails, setUserDetails] = useState({})
    const [companyDetails, setCompanyDetails] = useState({})
    const [loginData, setLoginData] = useState({})
    const [signupData, setSignupData] = useState({})

    // fetch user information
    const userData = () => {
        const jwtToken = localStorage.getItem("userToken");
        axios.get('http://localhost:5000/api/v1/jobseeker/userProfile', {
            headers: {
                Authorization: `Bearer ${jwtToken}`,
            }
        })
            .then((response) => {
                // console.log('response', response.data)
                setUserDetails(response.data);
                // console.log('done')
            })
            .catch((err) => {
                console.log("userData Error", err);
            })
    }

    // const companyData = () => {
    //     const jwtToken = localStorage.getItem("userToken");
    //     axios.get('http://localhost:5000/api/v1/jobseeker/userProfile', {
    //         headers: {
    //             Authorization: `Bearer ${jwtToken}`,
    //         }
    //     })
    //         .then((response) => {
    //             console.log('response', response.data)
    //             setUserDetails(response.data);
    //             console.log('done')
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         })
    // }

    useEffect(() => {
        if (loginData && Object.keys(loginData).length > 0) userData();
        // console.log('running');
        // console.log("login data", loginData)
        // companyData()
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

export default UserProvider;