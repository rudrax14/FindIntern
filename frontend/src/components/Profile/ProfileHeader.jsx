import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
function ProfileHeader({ userDetails }) {

    // const userDetails = useSelector((state) => state.user.userDetails);
    const { userType } = useParams();
    const defaultImageUrl = 'https://res.cloudinary.com/dipv5sufo/image/upload/v1708846305/FindIntern/Assets/stock-profile.jpg';
    return (
        <div className="container mx-auto max-w-7xl rounded-lg">
            <div className="header">
                <img src="https://codescandy.com/geeks-bootstrap-5/assets/images/background/profile-bg.jpg" alt="" className='bg-cover h-[120px] w-full rounded-t-lg' />
                {/* <div className='bg' style={{ background: `url(https://codescandy.com/geeks-bootstrap-5/assets/images/background/profile-bg.jpg)`, backgroundSize: 'cover' }}>

                        </div> */}
                <div className='bg-white flex md:h-20 px-6 items-center rounded-b-lg w-full dark:bg-dark-secondary-100 border-b border-x dark:border-secondary-200'>
                    <div className='relative -mt-12'>
                        <img src={userDetails?.profileImgUrl || defaultImageUrl} alt="" className='w-20 rounded-full border-white border-4 ' />
                    </div>
                    <div className="flex justify-between px-2 sm:px-3 sm:justify-between items-center w-full ">
                        <div className="flex flex-col">
                            <div className='sm:flex items-center'>
                                <h2 className='text-2xl font-semibold text-secondary-300 dark:text-secondary-100'>{userDetails?.name || "admin"}</h2>
                                {!userType == 'visit' && <span className='text-red-600 font-normal sm:ml-2 mt-1 h-fit bg-red-50 px-3 rounded-lg'>{userType || "null"}</span>}
                            </div>
                            <p className='text-secondary-200'>@{userDetails?.username || "admin"}</p>
                        </div>
                        <div className=''>
                            <Link className="bg-primary-200 hover:bg-primary-400 text-white hidden sm:block rounded-md w-fit px-2 py-1 sm:font-medium" to={userType == "recruiter" ? "/recruiter/edit-info" : "/jobseeker/edit-info"}>Account Settings</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileHeader