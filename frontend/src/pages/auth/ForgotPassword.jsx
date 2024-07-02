import React, { useState } from 'react'
import InputField from '../../components/Form/InputField'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
function ForgotPassword() {

    const [email, setEmail] = useState('');
    const [disable, setDisable] = useState(false);
    const { userType } = useParams();

    function changeHandler(event) {
        setEmail(event.target.value);
    }

    function submitHandler(e) {
        e.preventDefault();
        axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/resetPasswordToken`, { email, role: userType })
            .then((response) => {
                console.log(response)
                toast.success('Email sent check your inbox for the password reset link')

            })
            .catch((err) => {
                console.log(err.response.data.message);
                const error = err.response.data.message;
                toast.error(error)
            })
        console.log(email);
    }

    return (
        <div className='flex items-center justify-center h-screen bg-secondary-100 dark:bg-dark-secondary-500 p-5'>
            <div className="max-w-[30rem] w-full rounded dark:bg-dark-secondary-100  overflow-hidden shadow-2xl bg-white flex flex-col gap-6 px-10 py-6">
                <div className='flex flex-col gap-3'>
                    <h1 className='text-[2rem] font-bold text-secondary-300 dark:text-secondary-100'>Forgot Password</h1>
                </div>
                <form action="" className='flex flex-col gap-3' onSubmit={submitHandler}>
                    <InputField type='email' name='email' label='Email' ph='Email' event={changeHandler} />
                    <div className='mt-2'>
                        <button type='submit' className='bg-primary-200 text-white rounded-md w-full py-2 font-medium'>Send Reset Link</button>
                    </div>
                </form>
                <Link to="/onboarding/sign-in" className='text-primary-200 text-sm font-medium'>Back to Log-In</Link>
            </div>
        </div>
    )
}

export default ForgotPassword