import React, { useEffect, useState, useContext } from 'react'
import InputField from './InputField';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from '../../context/UserContext';
function LoginForm() {

    const context = useContext(UserContext)
    const { setLoginData, setUserType } = context


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

        axios.post('http://localhost:5000/api/v1/auth/login', accountData)
            .then((response) => {
                localStorage.setItem("userToken", response.data.token);
                setLoginData(response.data);
                toast.success('Login successful')
                if (userType === 'admin') {
                    navigate(`/${userType}/dashboard`)
                } else {
                    navigate(`/${userType}/all-jobs`)
                }
            })
            .catch((err) => {
                console.log(err.response.data.message);
                const error = err.response.data.message;
                toast.error(error)
            })

        // console.log(accountData);

    }

    // const redirectHandler = (e) => {
    //     navigate('/user/signup');
    // }

    return (
        <>
            <form action="" className='flex flex-col gap-4' onSubmit={submitHandler}>
                <InputField name='email' data={formData.email} event={changeHandler} label='Username or email' ph='Email address here' type='email' />
                <InputField name='password' data={formData.password} event={changeHandler} label='Password' ph='**************' type='password' />
                <div className='flex justify-end'>
                    <a href="" className='text-primary-200'>Forgot your password?</a>
                </div>
                <div className=''>
                    <button type='submit' className='bg-primary-200 text-white rounded-md w-full py-2 font-medium'>Sign in</button>
                </div>
            </form>
        </>
    )
}

export default LoginForm