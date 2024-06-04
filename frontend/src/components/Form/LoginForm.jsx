import React, { useState } from 'react'
import InputField from './InputField';
import toast from 'react-hot-toast';
import axios from 'axios';
import authService from '../../services/authService';
import { useNavigate, useParams, Link } from "react-router-dom";
function LoginForm() {




    const navigate = useNavigate();
    const { userType } = useParams();
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
        const accountData = {
            ...formData,
            role: userType
        };
        console.log(userType);

        authService.login(accountData).then((userData)=>{
            if(userData){
                toast.success('Login successful')
                if (userType === 'admin') {
                    navigate(`/${userType}/dashboard`)
                } else {
                    navigate(`/${userType}/all-jobs`)
                }
            }
        }).catch((err)=>{
            //toast.error(err)
            console.log(err)
        });

        // console.log(accountData);

    }

    return (
        <>
            <form action="" className='flex flex-col gap-4 ' onSubmit={submitHandler}>
                <InputField name='email' data={formData.email} event={changeHandler} label='Email' ph='Email address here' type='email'/>
                <InputField name='password' data={formData.password} event={changeHandler} label='Password' ph='**************' type='password' />
                <div className='flex justify-end'>
                    <Link to={`/forgot-password/${userType}`} className='text-primary-200'>Forgot your password?</Link>
                </div>
                <div className=''>
                    <button type='submit' className='bg-primary-200 text-white rounded-md w-full py-2 font-medium'>Sign in</button>
                </div>
            </form>
        </>
    )
}

export default LoginForm