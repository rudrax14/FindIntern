import React, { useState } from 'react';
import profile from "../assets/avatar.png";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
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

            navigate("/user/details");
        } else {
            navigate("/company/details");
        }
    };

    const redirectHandler = () => {
        navigate('/user/login');
    };

    return (
        <div className='flex items-center h-full'>
            <form className='text-center w-[480px] px-15 items-center flex flex-col gap-6 bg-[#cdd7fe] rounded-lg p-12 bg-opacity-50 shadow-2xl' onSubmit={submitHandler}>
                <img src={profile} alt="" className='h-[100px]' />
                <h2 className='text-[#8a2be2] font-bold text-4xl'>REGISTER</h2>
                <div className='flex rounded-full max-w-max p-3 text-xl font-semibold text-gray-600 gap-2 bg-[#8a2be2]'>
                    <button
                        type="button"
                        onClick={() => setAccountType('users')}
                        className={`p-2 ${accountType === 'users' ? 'bg-[#ce9aff] text-white' : 'bg-transparent text-white'} py-2 px-5 rounded-full transition-all hover:bg-gray-500 hover:text-white`}
                    >
                        User
                    </button>
                    <button
                        type="button"
                        onClick={() => setAccountType('company')}
                        className={`p-2 ${accountType === 'company' ? 'bg-[#d4a5ff] text-white' : 'bg-transparent text-white'} py-2 px-5 rounded-full transition-all hover:bg-gray-500 hover:text-white`}
                    >
                        Company
                    </button>
                </div>
                <InputField Icon={FaUser} type='text' name='userName' ph={`${accountType === 'users' ? "Full Name" : "Name"}`} data={formData.userName} event={changeHandler} />
                <InputField Icon={FaEnvelope} type='email' name='email' ph='Email' data={formData.email} event={changeHandler} />
                <InputField Icon={FaLock} type='password' name='password' ph='Password' data={formData.password} event={changeHandler} />
                <InputField Icon={FaLock} type='password' name='cPassword' ph='Confirm Password' data={formData.cPassword} event={changeHandler} />
                <AuthButton type='Signup' event={submitHandler} />
                <AuthButton type='Login' event={redirectHandler} />
            </form>
        </div>
    );
}

export default SignupForm;
