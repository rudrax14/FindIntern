import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import InputField from '../../components/Form/InputField'

function UpdatePassword() {
    const { token } = useParams()
    const [formData, setFormData] = useState({
        password: '',
        confirmPassword: ''
    })

    function changeHandler(event) {
        setFormData((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    }

    function submitHandler(e) {
        e.preventDefault();
        console.log(formData);
    }



    return (
        <div className='flex items-center justify-center h-screen bg-secondary-100 p-5'>
            <div className="max-w-[30rem] w-full rounded overflow-hidden shadow-2xl bg-white flex flex-col gap-6 px-10 py-6">
                <div className='flex flex-col gap-3'>
                    <Link to="/" className='text-primary-200 text-2xl font-bold tracking-wider'>FindIntern</Link>
                    <h1 className='text-[2rem] font-bold text-secondary-300'>Update Password</h1>
                </div>
                <form action="" className='flex flex-col gap-3' onSubmit={submitHandler}>
                    <InputField data={formData.password} type='password' name='password' label='New Password' ph='**************' event={changeHandler} />
                    <InputField data={formData.confirmPassword} type='password' name='confirmPassword' label='Confirm Password' ph='**************' event={changeHandler} />
                    <div className='mt-5'>
                        <button type='submit' className='bg-primary-200 text-white rounded-md w-full py-2 font-medium'>Update Password</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UpdatePassword