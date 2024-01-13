import React, { useState } from 'react'
import profile from "../assets/avatar.png"
import { FaUser, FaLock } from "react-icons/fa";
import InputField from './InputField';
import AuthButton from './AuthButton';
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

function LoginForm() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    function changeHandler(event) {
        setFormData((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    }

    function submitHandler(e) {
        e.preventDefault();

        // setIsLoggedIn(true);
        toast.success('Login successful')
        const accountData = {
            ...formData,
        };
        console.log(accountData);

        navigate("/dashboard");
    }

    const redirectHandler = (e) => {
        navigate('/user/signup');
    }

    return (
        <>
            <div className='login-content flex items-center justify-center text-center h-full'>
                <form action="" className='text-center items-center flex flex-col gap-6 ' onSubmit={submitHandler}>
                    <img src={profile} alt="" className='h-[100px]' />
                    <h2 className='text-[#8a2be2] font-bold text-4xl'>WELCOME</h2>
                    <InputField Icon={FaUser} type='email' ph='Email' name="email" data={formData.email} event={changeHandler} />
                    <InputField Icon={FaLock} type='password' ph='Password' name='password' data={formData.password} event={changeHandler} />
                    <AuthButton type='Login' event={submitHandler} />
                    <AuthButton type='Signup' event={redirectHandler} />
                </form>
            </div>


        </>
    )
}

export default LoginForm