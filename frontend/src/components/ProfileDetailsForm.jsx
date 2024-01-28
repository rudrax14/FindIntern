import React from 'react'
import InputField from './InputField'

function ProfileDetailsForm() {
    return (
        <>
            <div className='border border-gray-300 rounded-lg col-span-2'>
                <div className="card-header border-b p-6 space-y-1">
                    <h3 className='text-xl font-semibold text-secondary-300'>Profile Details</h3>
                    <p className='text-secondary-200'>You have full control to manage your own account setting.</p>
                </div>
                <div className="card-body p-6">
                    <div className="profile md:flex md:justify-between space-y-6 items-center ">
                        <div className='flex justify-center items-center gap-6'>
                            <img className='h-20 w-20 rounded-full border-2' src="https://codescandy.com/geeks-bootstrap-5/assets/images/avatar/avatar-3.jpg" alt="" />
                            <div className='space-y-1'>
                                <h3 className='text-xl font-semibold text-secondary-300'>Your avatar</h3>
                                <p className='text-secondary-200'>
                                    PNG or JPG no bigger than 800px wide and tall.
                                </p>
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <a href="" className='border border-secondary-200 hover:bg-secondary-200 hover:text-white text-secondary-200 rounded-md font-medium px-2 py-1'>Update</a>
                            <a href="" className='border border-red-500  hover:bg-red-500 hover:text-white text-red-500 rounded-md font-medium px-2 py-1'>Delete</a>
                        </div>
                    </div>
                    <hr className='my-5' />
                    <div>
                        <h3 className='text-xl font-semibold text-secondary-300'>Personal Details</h3>
                        <p className='text-secondary-200'>
                            Edit your personal information and address.
                        </p>
                        <form action="" className='space-y-6 mt-6'>
                            <InputField label='Location' ph='Write the Job Title' type='text' imp='*' />
                            <InputField label='Education' ph='Write the Job Title' type='text' imp='*' />
                            <InputField label='Experience' ph='Write the Job Title' type='text' imp='*' />
                            <InputField label='Skills' ph='Write the Job Title' type='text' imp='*' />
                            <div className=''>
                                <button className='bg-primary-200 hover:bg-primary-400 text-white rounded-md  w-fit py-2 px-6 font-medium'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
                {/* <InputField label='Job Title' ph='Write the Job Title' type='text' imp='*' />
                        <InputField label='Location' ph='Write the Job Title' type='text' imp='*' />
                        <InputField label='Education' ph='Write the Job Title' type='text' imp='*' />
                        <InputField label='Experience' ph='Write the Job Title' type='text' imp='*' />
                        <InputField label='Skills' ph='Write the Job Title' type='text' imp='*' /> */}



            </div>
        </>
    )
}

export default ProfileDetailsForm