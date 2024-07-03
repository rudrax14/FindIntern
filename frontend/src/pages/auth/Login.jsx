import React from 'react';
import LoginForm from '../../components/Form/LoginForm';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Spinner from '../../components/Spinner';
function Login() {
    const { userType } = useParams();
    const loading = useSelector((state) => state.user.loading);


    if (loading) {
        return <Spinner />
    }

    return (
        <>
            <div className='flex items-center justify-center h-screen bg-secondary-100 p-5 dark:bg-dark-secondary-500'>
                <div className="max-w-[30rem] w-full rounded overflow-hidden shadow-2xl bg-white dark:bg-dark-secondary-400 flex flex-col gap-6 px-10 py-6">
                    <div className='flex flex-col gap-3'>
                        <Link to="/" className='text-primary-200 text-2xl font-bold tracking-wider'>FindIntern</Link>
                        <h1 className='text-[2rem] font-bold text-secondary-300 dark:text-secondary-100'>Sign in</h1>
                        <div className={`flex gap-3 ${userType == 'admin' ? 'hidden' : 'block'}`}>
                            <span className='text-secondary-200'>Don't have an account? </span>
                            <Link to={`/onboarding/sign-up/${userType}`} className='text-primary-200'>Sign up</Link>
                        </div>
                    </div>
                    <LoginForm />
                </div>
            </div>


        </>
    );
}

export default Login;

