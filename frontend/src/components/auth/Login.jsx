import React from 'react';
import wave from '../../assets/wave.png';
import loginPng from '../../assets/login.png';
import LoginForm from '../LoginForm';

function Login() {
    return (
        <>
            <img
                src={wave}
                alt="illustration"
                className="absolute inset-0 z-0 object-cover w-full h-full bg-opacity-50 blur-sm" // Adjust blur class for desired blur effect
            />
            <div className="container relative z-10 h-screen w-screen grid grid-cols-2 gap-7">
                <div className="image flex justify-end items-center">
                    <img src={loginPng} alt="" className='w-full max-w-[500px] h-[415px]' />
                </div>
                <div className="login justify-center items-end">
                    <LoginForm />
                </div>
            </div>


        </>
    );
}

export default Login;

