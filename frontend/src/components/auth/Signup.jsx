import React from 'react'
import wave from '../../assets/wave.png';
import SignupForm from '../SignupForm'
import signupPng from '../../assets/signup.png';

function Signup() {
    return (
        <>
            <img src={wave} alt="illustration" className="absolute inset-0 z-0 object-cover w-full h-full blur-sm" style={{ opacity: 0.8 }} />
            <div className="relative z-10 h-screen flex justify-center w-screen md:grid grid-cols-2 gap-32  ">
                <div className="image md:flex flex-shrink-0 w-full justify-end items-center hidden">
                    <img src={signupPng} alt="" className='w-full max-w-[500px] h-[415px]' />
                </div>
                <div className="login flex justify-start">
                    <SignupForm />
                </div>
            </div>


        </>
    )
}

export default Signup