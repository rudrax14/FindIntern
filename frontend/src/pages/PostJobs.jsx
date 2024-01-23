import React, { useState } from 'react'
import Navbar from '../components/common/Navbar'
import { LiaUserSolid } from "react-icons/lia";
import InputField from '../components/InputField';
import DetailsHeader from '../components/DetailsHeader';
function PostJobs() {
    return (
        <>
            <Navbar />
            <div className="container mx-auto lg:py-24 py-12 px-4">
                <DetailsHeader h1='Post a job today' h2='Ready to post a job for your company? Choose your job type below and fill all the job information' />
                <form action="" className='lg:grid flex flex-col gap-6 grid-cols-2 py-6 lg:px-24 pt-12'>
                    <div className='flex flex-col gap-3'>
                        <div className='text-5xl text-primary-200'><LiaUserSolid /></div>
                        <h3 className='text-xl font-semibold text-secondary-300'>Job information</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit lacerat amet ac.</p>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <InputField label='Job Title' ph='Write the Job Title' type='text' imp='*' />
                        <InputField label='Department' ph='Web Design' type='text' imp='*' />
                        <InputField label='Full Name' ph='Full Name' type='text' imp='*' />
                        <InputField label='Loaction' ph='Loaction' type='text' imp='*' />
                        <InputField label='Size' ph='Size' type='number' imp='*' />
                        <InputField label='Job salary' ph='Numbers' type='number' imp='*' />
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="" className='text-secondary-300 font-semibold'>Job description</label>
                            <textarea name="" id="" cols="" rows="3" placeholder='Write about job' className='border text-secondary-200 border-[#cbd5e1] w-full py-2 px-4 rounded-md placeholder:text-secondary-200 focus:border-primary-100 focus:shadow-sm focus:shadow-primary-100 focus:outline-none'></textarea>
                        </div>
                        <div className=''>
                            <button className='bg-primary-200 text-white rounded-md lg:w-2/6 w-full py-2 font-medium'>Submit for Approval</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default PostJobs