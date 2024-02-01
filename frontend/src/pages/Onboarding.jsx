
import React from 'react'
import { Link } from 'react-router-dom'

function Onboarding() {
    return (
        <>
            <div className='bg-secondary-100 h-screen flex justify-center items-center'>
                <div className='bg-white rounded-lg shadow-lg'>
                    <h1 className='text-center font-bold text-xl mt-4'>Who are you ?</h1>
                    <div className='flex flex-col md:flex-row py-12 px-12 gap-12'>

                        <div className='1 text-center flex flex-col items-center'>
                            <img className='rounded-full w-36 mb-6' src="https://codescandy.com/geeks-bootstrap-5/assets/images/avatar/avatar-14.jpg" alt="" />
                            <Link to="" className='bg-primary-200 hover:bg-primary-300 w-full text-white  py-2 rounded-lg font-medium'>I am Job Seeker</Link>
                        </div>
                        <div className="border-2 border-gray-200">
                        </div>
                        <div className='2 text-center flex flex-col items-center'>
                            <img className='rounded-full w-36 mb-6' src="https://codescandy.com/geeks-bootstrap-5/assets/images/avatar/avatar-11.jpg" alt="" />
                            <Link to="" className='bg-primary-200 hover:bg-primary-300  w-full text-white py-2 rounded-lg font-medium'>I am a Recruiter</Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Onboarding