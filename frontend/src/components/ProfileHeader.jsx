import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
function ProfileHeader() {
    const context = useContext(UserContext)
    const { userType } = context
    // console.log('userDetails', userDetails)
    return (
        <div className="container mx-auto max-w-7xl rounded-lg">
            <div className="header">
                <img src="https://codescandy.com/geeks-bootstrap-5/assets/images/background/profile-bg.jpg" alt="" className='bg-cover h-[120px] w-full rounded-t-lg' />
                {/* <div className='bg' style={{ background: `url(https://codescandy.com/geeks-bootstrap-5/assets/images/background/profile-bg.jpg)`, backgroundSize: 'cover' }}>

                        </div> */}
                <div className='bg-white flex md:h-20 px-6 items-center rounded-b-lg w-full'>
                    <div className='relative -mt-12'>
                        <img src="https://codescandy.com/geeks-bootstrap-5/assets/images/avatar/avatar-3.jpg" alt="" className='w-20 rounded-full border-white border-4' />
                    </div>
                    <div className="flex justify-between px-2 sm:px-3 sm:justify-between items-center w-full">
                        <div className="flex flex-col">
                            <div className='sm:flex items-center'>
                                <h2 className='text-2xl font-semibold text-secondary-300'>{userDetails.fullName || "null"}</h2>
                                <span className='text-red-600 font-normal sm:ml-2 mt-1 bg-red-50 px-3 rounded-lg'>{userType}</span>
                            </div>
                            <p className='text-secondary-200'>@{userDetails.username || "null"}</p>
                        </div>
                        <div className=''>
                            <Link className="bg-primary-200 hover:bg-primary-400 text-white rounded-md w-fit px-2 py-1 sm:font-medium" to="">Account Settings</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileHeader