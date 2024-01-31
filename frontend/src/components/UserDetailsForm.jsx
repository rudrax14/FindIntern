import React, { useContext, useState, useEffect } from 'react'
import InputField from './InputField'
import {UserContext} from '../context/Auth/UserContext';
import axios from 'axios';
import toast from 'react-hot-toast';
function UserDetailsForm() {

    const [formData, setFormData] = useState({
        fullName: '',
        username: '',
        email: '',
        location: '',
        education: '',
        experience: '',
        skills: [],
    });

    const context = useContext(UserContext);
    const { userDetails } = context;

    useEffect(() => {
        if (userDetails && userDetails.userProfile) {
            setFormData(prevFormData => ({
                ...prevFormData,
                fullName: userDetails.userProfile.fullName || '',
                username: userDetails.userProfile.username || '',
                email: userDetails.userProfile.email || '',
                location: userDetails.userProfile.location || '',
                education: userDetails.userProfile.education || '',
                experience: userDetails.userProfile.experience || '',
                skills: userDetails.userProfile.skills || [],
            }));
        }
    }, [userDetails]);


    const changeHandler = (event) => {
        const { name, value } = event.target;


        if (name === 'skills') {

            const skillsArray = value.split(',').map(skill => skill.trim());

            setFormData(prev => ({
                ...prev,
                [name]: skillsArray,
            }));
        } else {

            setFormData(prev => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    const submitHandler = (e) => {
        e.preventDefault();
        const accountData = { ...formData };
        const jwtToken = localStorage.getItem("userToken");
        axios.patch('http://localhost:5000/api/v1/jobseeker/userProfile', accountData, {
            headers: {
                Authorization: `Bearer ${jwtToken}`,
            }
        })
            .then((response) => {
                console.log(response.data);

                toast.success("Profile updated successfully");
            })
            .catch((err) => {
                console.log(err);
                const error = err.response.data.message;
                toast.error(error)
            })
        // console.log(accountData);
    };







    return (
        <>
            <div className='border border-gray-300 rounded-lg col-span-2'>
                <div className="card-header border-b p-6 space-y-1">
                    <h3 className='text-xl font-semibold text-secondary-300'>Profile Details</h3>
                    <p className='text-secondary-200'>You have full control to manage your own account setting.</p>
                </div>
                <div className="card-body p-6">
                    <div className="profile md:flex md:justify-between space-y-6 items-center ">
                        <div className='flex justify-center items-center gap-6'>
                            <img className='h-20 w-20 rounded-full border-2' src="https://codescandy.com/geeks-bootstrap-5/assets/images/avatar/avatar-3.jpg" alt="" />
                            <div className='space-y-1'>
                                <h3 className='text-xl font-semibold text-secondary-300'>Your avatar</h3>
                                <p className='text-secondary-200'>
                                    PNG or JPG no bigger than 800px wide and tall.
                                </p>
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <a href="" className='border border-secondary-200 hover:bg-secondary-200 hover:text-white text-secondary-200 rounded-md font-medium px-2 py-1'>Update</a>
                            <a href="" className='border border-red-500  hover:bg-red-500 hover:text-white text-red-500 rounded-md font-medium px-2 py-1'>Delete</a>
                        </div>
                    </div>
                    <hr className='my-5' />
                    <div>
                        <h3 className='text-xl font-semibold text-secondary-300'>Personal Details</h3>
                        <p className='text-secondary-200'>
                            Edit your personal information and address.
                        </p>
                        <form action="" className='space-y-6 mt-6' onSubmit={submitHandler}>
                            <InputField data={formData.fullName} event={changeHandler} name='fullName' label='Full Name' ph='Full Name' type='text' imp='*' />
                            <InputField data={formData.username} event={changeHandler} name='username' label='User Name' ph='User Name' type='text' imp='*' />
                            <InputField data={formData.email} event={changeHandler} name='email' label='Email' ph='Email' type='email' imp='*' />
                            <InputField data={formData.location} event={changeHandler} name='location' label='Location' ph='Location' type='text' imp='*' />
                            <InputField data={formData.education} event={changeHandler} name='education' label='Education' ph='Education' type='text' imp='*' />
                            <InputField data={formData.experience} event={changeHandler} name='experience' label='Experience' ph='Experience' type='text' imp='*' />
                            <InputField data={formData.skills} event={changeHandler} name='skills' label='Skills' ph='Skills' type='text' imp='*' />
                            <div className='' >
                                <button type="submit" className='bg-primary-200 hover:bg-primary-400 text-white rounded-md  w-fit py-2 px-6 font-medium'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserDetailsForm