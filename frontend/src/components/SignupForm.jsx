import React, { useState, useContext } from 'react';
import InputField from './InputField';
import AuthButton from './AuthButton';
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { UserContext } from '../context/UserContext';
function SignupForm() {

    const context = useContext(UserContext)
    const { setSignupData,setUserType } = context;
   
    const [accountType, setAccountType] = useState('jobseeker');
    const [formData, setFormData] = useState({
        username: '',
        fullName: '',
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

        if (!formData.username || !formData.email || !formData.password) {
            toast.error("Enter All Details");
            return;
        }
        formData.accountType = accountType;
        const accountData = { ...formData };
        // console.log(accountData);
        axios.post(`http://localhost:5000/api/v1/${accountType}/register`, accountData)
            .then((response) => {
                // console.log(response.data);
                setSignupData(response.data);
                toast.success("Account Created");

                if (formData.accountType === 'users') {
                    navigate("/user/post");
                } else {
                    navigate("/company/post");
                }
            })
            .catch((err) => {
                console.log(err.response.data.message);
                const error = err.response.data.message;
                toast.error(error)
            })

        // setIsLoggedIn(tru);


    };


    return (

        <form className='flex flex-col gap-4' onSubmit={submitHandler}>
            <InputField name='fullName' data={formData.fullName} event={changeHandler} label='Full Name' ph='Full Name' type='text' />
            <InputField name='username' data={formData.username} event={changeHandler} label='User name' ph='User Name' type='text' />
            <InputField type='email' data={formData.email} event={changeHandler} name='email' label='Email' ph='Email' imp='*' />
            <InputField name='password' data={formData.password} event={changeHandler} label='Password' ph='**************' type='password' />
            <InputField name='cPassword' data={formData.cPassword} event={changeHandler} label='Confirm Password' ph='**************' type='password' />
            <div className='flex gap-2 text-secondary-200'>
                <input type="checkbox" name="" id="" className='' onClick={() => {
                    const newAccountType = accountType === 'company' ? 'jobseeker' : 'company';
                    setAccountType(newAccountType);
                }} />
                <span>Check if you want to register a company.</span>
            </div>
            <div className=''>
                <button type="submit" className='bg-primary-200 text-white rounded-md w-full py-2 font-medium'>Create Free Account</button>
            </div>
        </form>

    );
}

export default SignupForm;
