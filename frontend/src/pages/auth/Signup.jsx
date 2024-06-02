import React from 'react'
import SignupForm from '../../components/Form/SignupForm'
import { Link, useParams } from 'react-router-dom'

function Signup() {
    const { userType } = useParams();

    return (
        <>
            <div className='flex items-center h-screen justify-center bg-secondary-100 dark:bg-dark-secondary-500 p-5'>
                <div className="max-w-[30rem] w-full rounded overflow-hidden shadow-2xl dark:bg-dark-secondary-400 bg-white flex flex-col gap-6 px-10 py-6">
                    <div className='flex flex-col gap-3'>
                        <Link to="/" className='text-primary-200 text-2xl font-bold tracking-wider'>FindIntern</Link>
                        <h1 className='text-[2rem] font-bold text-secondary-300 dark:text-secondary-100'>Sign in</h1>
                        <div className='flex gap-3'>
                            <span className='text-secondary-200'>Don't have an account? </span>
                            <Link to={`/onboarding/sign-in/${userType}`} className='text-primary-200'>Log in</Link>
                        </div>
                    </div>
                    <SignupForm />
                </div>
            </div>
        </>
    );
}

export default Signup;