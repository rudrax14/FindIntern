import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../components/common/Navbar'
import { LiaUserSolid } from "react-icons/lia";
import InputField from '../components/InputField';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';

function UserDetails() {
    return (
        <>
            <Navbar />
            <div className="container mx-auto lg:py-24 py-12 px-4">
                <div className='flex gap-3 flex-col max-w-lg lg:pl-24 '>
                    <h1 className='text-4xl text-secondary-300 font-bold'>Find a Job & grow your career</h1>
                    <p className='font-semibold text-secondary-200 text-xl'>Build your profile and let recruiters find you. Get job postings delivered right to your email.</p>
                </div>
            </div>
            <div className='lg:grid grid-cols-3 gap-6 md:flex container mx-auto py-12  md:px-24 px-6'>
                <form action="" className=' border flex flex-col gap-3 border-gray-300 rounded-lg p-12 col-span-2'>
                    <div className='flex flex-col gap-3'>
                        <h3 className='text-2xl font-semibold text-secondary-300'>Basic Information</h3>
                        <p>Add your personal details in the form.</p>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <InputField lable='Job Title' ph='Write the Job Title' type='text' imp='*' />
                        <InputField lable='Location' ph='Write the Job Title' type='text' imp='*' />
                        <InputField lable='Education' ph='Write the Job Title' type='text' imp='*' />
                        <InputField lable='Experience' ph='Write the Job Title' type='text' imp='*' />
                        <InputField lable='Skills' ph='Write the Job Title' type='text' imp='*' />
                        <div className=''>
                            <button className='bg-primary-200 text-white rounded-md lg:w-2/6 w-full py-2 font-medium'>Submit for Approval</button>
                        </div>
                    </div>
                </form>
                <div className=' bg-secondary-100 flex flex-col gap-4 h-fit p-8 w-[66%] md:w-[76%] rounded-lg md:mt-0 mt-6'>
                    <div>
                        <img src="https://codescandy.com/geeks-bootstrap-5/assets/images/job/job-graphics.svg" alt="" />
                    </div>
                    <h3 className=' font-medium text-xl'>On registering you can</h3>
                    <ul className='flex flex-col gap-3'>
                        <div className='flex items-start gap-1'>
                            <div className='text-green-500'>
                                <CheckCircleOutlineOutlinedIcon />

                            </div>
                            <li>Build your profile and letrecruiters find you.</li>
                        </div>
                        <div className='flex items-start gap-1'>
                            <div className='text-green-500'>
                                <CheckCircleOutlineOutlinedIcon />

                            </div>
                            <li>Get
                                job postings delivered right
                                to your email.</li>
                        </div>
                        <div className='flex items-start gap-1'>
                            <div className='text-green-500'>
                                <CheckCircleOutlineOutlinedIcon />

                            </div>
                            <li>Find a
                                Job & grow your career</li>
                        </div>


                    </ul>
                </div>
            </div>
        </>
    )
}

export default UserDetails