import React, { useState } from 'react';
import InputField from './InputField';
import AuthButton from './AuthButton';
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

function SignupForm() {
    const [accountType, setAccountType] = useState('users');
    const [formData, setFormData] = useState({
        userName: '',
        email: '',
        password: '',
        cPassword: '',
        accountType: '',
    });

    const navigate = useNavigate();

    const changeHandler = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const submitHandler = (e) => {
        e.preventDefault();

        if (formData.password !== formData.cPassword) {
            toast.error("Passwords do not match");
            return;
        }

        // if (!formData.userName || !formData.email || !formData.password) {
        //     toast.error("Enter All Details");
        //     return;
        // }


        formData.accountType = accountType;

        // setIsLoggedIn(true);
        toast.success("Account Created");
        const accountData = { ...formData };
        console.log(accountData);
        if (formData.accountType === 'users') {
            navigate("/user/post");
        } else {
            navigate("/company/post");
        }
    };

    const redirectHandler = () => {
        navigate('/user/login');
    };

    return (

        <form className='flex flex-col gap-4' onSubmit={submitHandler}>
            <InputField name='userName' data={formData.userName} event={changeHandler} label='Full Name' ph='Full Name' type='text' />
            <InputField name='email' data={formData.email} event={changeHandler} label='Email' ph='Email address here' type='text' />
            <InputField name='password' data={formData.password} event={changeHandler} label='Password' ph='**************' type='password' />
            <InputField name='cPassword' data={formData.cPassword} event={changeHandler} label='Confirm Password' ph='**************' type='password' />
            <div className='flex gap-2 text-secondary-200'>
                <input type="checkbox" name="" id="" className='' onClick={() => {
                    const newAccountType = accountType === 'company' ? 'users' : 'company';
                    setAccountType(newAccountType);
                }} />
                <span>Check if you want to register a company.</span>
            </div>
            <div className='' onClick={submitHandler}>
                <button type="submit" className='bg-primary-200 text-white rounded-md w-full py-2 font-medium'>Create Free Account</button>
            </div>
        </form>

    );
}

export default SignupForm;
