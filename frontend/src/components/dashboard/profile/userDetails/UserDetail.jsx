import React from 'react'
import { FaLock, FaEnvelope } from "react-icons/fa";
import wave from '../../../../assets/wave.png'
import InputField from '../../../InputField'
import profile from '../../../../assets/avatar.png'
import AuthButton from '../../../AuthButton';
const UserDetail = () => {
    return (
        <>
            <img
                src={wave}
                alt="illustration"
                className="absolute inset-0 z-0 object-cover w-full h-full bg-opacity-50 blur-xl"
                style={{ opacity: 0.5 }}
            />
            <div className="relative z-10 flex justify-center items-center min-h-screen">
                <div className='bg-opacity-70 p-8 rounded-md w-1/3 h-4/5'>
                    <form action="" className='items-center flex flex-col gap-6 bg-[#cdd7fe] rounded-lg p-6 bg-opacity-80 shadow-2xl'>
                        {/* <img src={profile} alt="" className='h-[100px] hover:bg-slate-400 hover:bg-opacity-50' /> */}
                        <div className="relative group">
                            <img
                                src={profile}
                                alt=""
                                className='h-[100px] group-hover:bg-slate-400 group-hover:bg-opacity-50'
                            />
                            <button className="hidden group-hover:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded-md">
                                Upload
                            </button>
                        </div>
                        <h2 className='text-[#8a2be2] font-bold text-4xl gap-3'>USER DETAILS</h2>
                        <div className='flex flex-col gap-10 w-full px-6'>
                            <InputField Icon={FaLock} type='text' ph='Username' name='username' />
                            {/* <InputField Icon={FaLock} type='password' ph='Email' name='password' /> */}
                            {/* <InputField Icon={FaLock} type='password' ph='Password' name='password' /> */}
                            {/* <InputField Icon={FaLock} type='password' ph='Full Name' name='password' /> */}
                            <InputField Icon={FaLock} type='text' ph='Location' name='location' />
                            <InputField Icon={FaLock} type='text' ph='Education' name='education' />
                            <InputField Icon={FaLock} type='number' ph='Experience' name='exp' />
                            <InputField Icon={FaLock} type='text' ph='Skills' name='skills' />
                        </div>
                        <h2 className='text-xl cursor-pointer ml-64'>Skip</h2>
                        <AuthButton type='Enter' />
                    </form>
                </div>
            </div>




        </>
    )
}

export default UserDetail