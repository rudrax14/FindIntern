import React, { useState } from 'react';
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

        <form className='flex flex-col gap-4' onSubmit={submitHandler}>
            {/* <div className='flex rounded-full max-w-max p-3 text-xl font-semibold text-gray-600 gap-2 bg-primary-200'>
                <button
                    type="button"
                    onClick={() => setAccountType('users')}
                    className={`p-2 ${accountType === 'users' ? 'bg-primary-100 text-white' : 'bg-transparent text-white'} py-2 px-5 rounded-full transition-all hover:bg-gray-500 hover:text-white`}
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
            </div> */}
            {/* <div className="inline-flex items-center gap-3 text-secondary-300 justify-center">
                <span>User</span>
                <div className="relative inline-block w-8 h-4 rounded-full cursor-pointer">
                    <input
                        id="switch-component"
                        type="checkbox"
                        onClick={() => {
                            const newAccountType = accountType === 'company' ? 'users' : 'company';
                            setAccountType(newAccountType);
                            console.log(newAccountType);
                        }}
                        className="absolute w-8 h-4 transition-colors duration-300 rounded-full appearance-none cursor-pointer peer bg-blue-gray-100 checked:bg-secondary-200 peer-checked:border-gray-900 peer-checked:before:bg-gray-900"
                        defaultChecked
                    />
                    <label
                        htmlFor="switch-component"
                        className="before:content[''] absolute top-2/4 -left-1 h-5 w-5 -translate-y-2/4 cursor-pointer rounded-full border border-blue-gray-100 bg-white shadow-md transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-full peer-checked:border-gray-900 peer-checked:before:bg-gray-900"
                    >
                        <div
                            className="inline-block p-5 rounded-full top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4"
                            data-ripple-dark="true"
                        ></div>
                    </label>
                </div>
                <span>Companies</span>
            </div> */}



            <InputField lable='Full Name' ph='Full Name' type='text' />
            <InputField lable='Email' ph='Email address here' type='text' />
            <InputField lable='Password' ph='**************' type='password' />
            <InputField lable='Confirm Password' ph='**************' type='cpassword' />
            <div className='flex gap-2 text-secondary-200'>
                <input type="checkbox" name="" id="" className='' onClick={() => {
                    const newAccountType = accountType === 'company' ? 'users' : 'company';
                    setAccountType(newAccountType);
                }} />
                <span>Check if you want to register a company.</span>
            </div>
            <div className=''>
                <button className='bg-primary-200 text-white rounded-md w-full py-2 font-medium'>Create Free Account</button>
            </div>
        </form>

    );
}

export default SignupForm;
