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
                className="absolute inset-0 z-0 object-cover w-full h-full bg-opacity-50 blur-sm"
                style={{ opacity: 0.8 }}
            />
            <div className="relative z-10 h-screen flex justify-center md:grid grid-cols-2 gap-32  " >
                <div className="md:flex justify-end items-center hidden">
                    <img src={loginPng} alt="" className='w-full max-w-[500px] h-[415px] ' />
                </div>
                <div className="flex justify-start">
                    <LoginForm />
                </div>
            </div>


        </>
    );
}

export default Login;

