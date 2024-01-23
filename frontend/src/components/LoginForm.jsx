import React, { useState } from 'react'
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
            <form action="" className='flex flex-col gap-4' onSubmit={submitHandler}>
                <InputField name='email' data={formData.email} event={changeHandler} label='Username or email' ph='Email address here' type='text' />
                <InputField name='password' data={formData.password} event={changeHandler} label='Password' ph='**************' type='password' />
                <div className='flex justify-end'>
                    <a href="" className='text-primary-200'>Forgot your password?</a>
                </div>
                <div className='' onClick={submitHandler}>
                    <button className='bg-primary-200 text-white rounded-md w-full py-2 font-medium'>Sign in</button>
                </div>
            </form>
        </>
    )
}

export default LoginForm