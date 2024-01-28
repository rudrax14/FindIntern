import React, { useContext } from 'react'
import Navbar from '../components/common/Navbar'
import userContext from '../context/Auth/userContext'
function Dashboard() {
    const context = useContext(userContext)
    const { loginData } = context;
    console.log(loginData)
    return (
        <>
            <Navbar />
            <h1>Dashboard</h1>
        </>
    )
}

export default Dashboard