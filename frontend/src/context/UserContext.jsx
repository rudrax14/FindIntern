// import axios from "axios";
// import React, { useState, useEffect, createContext } from 'react'


// export const UserContext = createContext();


// const UserProvider = ({ children }) => {
//     const [userType, setUserType] = useState("");
//     const [userMode, setUserMode] = useState('sign-in');
//     const [userDetails, setUserDetails] = useState({})
//     // const [companyDetails, setCompanyDetails] = useState({})
//     // const [loginData, setLoginData] = useState({})
//     // const [signupData, setSignupData] = useState({})

//     // fetch user information
//     const userData = (userType) => {
//         const jwtToken = localStorage.getItem("userToken");

//         axios.get(`http://localhost:5000/api/v1/${userType}/profile`, {
//             headers: {
//                 Authorization: `Bearer ${jwtToken}`,
//             }
//         })
//             .then((response) => {
//                 // console.log('response', response.data)
//                 setUserDetails(response.data.profile);
//                 console.log("context-userDetails", response.data.profile)
//                 // console.log('done')
//             })
//             .catch((err) => {
//                 console.log("userData Error", err);
//             })
//     }

//     // const companyData = () => {
//     //     const jwtToken = localStorage.getItem("userToken");
//     //     axios.get('http://localhost:5000/api/v1/company/companyProfile', {
//     //         headers: {
//     //             Authorization: `Bearer ${jwtToken}`,
//     //         }
//     //     })
//     //         .then((response) => {
//     //             console.log('response', response.data)
//     //             setUserDetails(response.data);
//     //             console.log('done')
//     //         })
//     //         .catch((err) => {
//     //             console.log(err);
//     //         })
//     // }

//     // useEffect(() => {
//     //     if (loginData && Object.keys(loginData).length > 0) userData();
//     //     console.log('running');
//     //     console.log("login data", loginData)
//     //     // companyData()
//     // }, [loginData])





//     const value = {
//         // loginData,
//         // setLoginData,
//         // signupData,
//         // setSignupData,
//         userDetails,
//         setUserDetails,
//         userData,
//         userType,
//         setUserType,
//         userMode,
//         setUserMode
//     };
//     return (
//         <UserContext.Provider value={value} >
//             {children}
//         </UserContext.Provider>
//     )
// }

// export default UserProvider;