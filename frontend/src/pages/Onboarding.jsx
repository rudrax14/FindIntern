import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUserType } from '../redux/Slice/userSlice';

function Onboarding() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userType = useSelector((state) => state.user.userType);
    const userMode = useSelector((state) => state.user.userMode);

    const userClickHandler = () => {
        dispatch(setUserType('jobseeker'));
        console.log(userType);  // Note: This might log the previous value due to async nature of state update
        navigate(`/onboarding/${userMode}/jobseeker`);
    };

    const recruiterClickHandler = () => {
        dispatch(setUserType('recruiter'));
        console.log(userType);  // Note: This might log the previous value due to async nature of state update
        navigate(`/onboarding/${userMode}/recruiter`);
    };


    return (
        <>
            <div className='bg-secondary-100 flex justify-center h-screen items-center dark:bg-dark-secondary-500'>
                <div className='bg-white dark:bg-dark-secondary-400 rounded-lg shadow-lg'>
                    <h1 className='text-center font-semibold text-secondary-300 dark:text-secondary-100 text-2xl mt-4'>Who are you ?</h1>
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