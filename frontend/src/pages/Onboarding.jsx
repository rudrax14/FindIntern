
import React, { useContext, useEffect } from 'react'
import { Link, useNavigate, useParams, useLocation } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
function Onboarding() {
    const { userType, setUserType, userMode } = useContext(UserContext)
    const navigate = useNavigate();
    const userClickHandler = () => {
        setUserType('jobseeker')
        console.log(userType);
        navigate(`/onboarding/${userMode}/jobseeker`)
    }

    const recruiterClickHandler = () => {
        setUserType('recruiter')
        console.log(userType)
        navigate(`/onboarding/${userMode}/recruiter`)
    }

   
    return (
        <>
            <div className='bg-secondary-100 h-screen flex justify-center items-center'>
                <div className='bg-white rounded-lg shadow-lg'>
                    <h1 className='text-center font-semibold text-secondary-300 text-2xl mt-4'>Who are you ?</h1>
                    <div className='flex flex-col md:flex-row p-12 gap-12'>

                        <div className='1 text-center flex flex-col px-6 items-center'>
                            <img className='rounded-full w-36 mb-6' src="https://codescandy.com/geeks-bootstrap-5/assets/images/avatar/avatar-14.jpg" alt="" />
                            <button onClick={userClickHandler} className='bg-primary-200 hover:bg-primary-300 w-full text-white  py-2 rounded-lg font-medium'>I am Job Seeker</button>
                        </div>
                        <div className="border-2 border-gray-200">
                        </div>
                        <div className='2 text-center flex flex-col px-6 items-center'>
                            <img className='rounded-full w-36 mb-6' src="https://codescandy.com/geeks-bootstrap-5/assets/images/avatar/avatar-11.jpg" alt="" />
                            <button onClick={recruiterClickHandler} className='bg-primary-200 hover:bg-primary-300  w-full text-white py-2 rounded-lg font-medium'>I am a Recruiter</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Onboarding