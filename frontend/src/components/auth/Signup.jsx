import React from 'react'
import wave from '../../assets/wave.png';
import SignupForm from '../SignupForm'
import signupPng from '../../assets/signup.png';

function Signup() {
    return (
        <>
            <img src={wave} alt="illustration" className="absolute inset-0 z-0 object-cover w-full h-full blur-sm" style={{ opacity: 0.8 }} />
            <div className="container relative z-10 h-screen w-screen grid grid-cols-2 gap-7">
                <div className="image flex justify-end items-center">
                    <img src={signupPng} alt="" className='w-full max-w-[500px] h-[415px]' />
                </div>
                <div className="login justify-center items-end">
                    <SignupForm />
                </div>
            </div>


        </>
    )
}

export default Signup