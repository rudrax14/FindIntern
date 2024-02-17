import React from 'react'
import SignupForm from '../../components/SignupForm'
import { Link } from 'react-router-dom'

function Signup() {
    return (
        <>

            <div className='flex items-center justify-center bg-secondary-100 p-5'>
                <div className="max-w-[30rem] w-full rounded overflow-hidden shadow-2xl bg-white flex flex-col gap-6 px-10 py-6">
                    <div className='flex flex-col gap-3'>
                        <Link to="/" className='text-primary-200 text-2xl font-bold tracking-wider'>FindIntern</Link>
                        <h1 className='text-[2rem] font-bold text-secondary-300'>Sign in</h1>
                        <div className='flex gap-3'>
                            <span className='text-secondary-200'>Don't have an account? </span>
                            <Link to="/login" className='text-primary-200'>Log in</Link>
                        </div>
                    </div>
                    <SignupForm />
                </div>
            </div>

        </>
    )
}

export default Signup