import React, { useState, useEffect } from 'react';
import InputField from './InputField';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import AvatarUploader from './AvatarUploader';
import { useSelector } from 'react-redux';

function UserDetailsForm() {
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        location: '',
        education: '',
        experience: '',
        skills: [],
    });
    const { userType } = useParams();
    const userDetails = useSelector((state) => state.user.userDetails);

    useEffect(() => {
        if (userDetails) {
            setFormData(prevFormData => ({
                ...prevFormData,
                name: userDetails.name || '',
                username: userDetails.username || '',
                email: userDetails.email || '',
                location: userDetails.location || '',
                education: userDetails.education || '',
                experience: userDetails.experience || '',
                skills: userDetails.skills || [],
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
        axios.patch(`${import.meta.env.VITE_BACKEND_URL}/${userType}/profile`, accountData, {
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
                toast.error(error);
            });
    };

    return (
        <div className='border border-gray-300 rounded-lg col-span-2 dark:bg-dark-secondary-400'>
            <div className="card-header border-b p-6 space-y-1">
                <h3 className='text-xl font-semibold text-secondary-300 dark:text-secondary-100'>Profile Details</h3>
                <p className='text-secondary-200'>You have full control to manage your own account setting.</p>
            </div>
            <div className="card-body p-6">
                <AvatarUploader profile={userDetails.profileImgUrl} />
                <hr className='my-5' />
                <div>
                    <h3 className='text-xl font-semibold text-secondary-300 dark:text-secondary-100'>Personal Details</h3>
                    <p className='text-secondary-200'>
                        Edit your personal information and address.
                    </p>
                    <form className='space-y-6 mt-6' onSubmit={submitHandler}>
                        <InputField
                            data={formData.name}
                            event={changeHandler}
                            name='name'
                            label='Full Name'
                            ph={userDetails.name || 'Full Name'}
                            type='text'
                            imp='*'
                        />
                        <InputField data={formData.username} event={changeHandler} name='username' label='User Name' ph='User Name' type='text' imp='*' />
                        <InputField data={formData.email} event={changeHandler} name='email' label='Email' ph='Email' type='email' imp='*' />
                        <InputField data={formData.location} event={changeHandler} name='location' label='Location' ph='Location' type='text' imp='*' />
                        <InputField data={formData.education} event={changeHandler} name='education' label='Education' ph='Education' type='text' imp='*' />
                        <InputField data={formData.experience} event={changeHandler} name='experience' label='Experience' ph='Experience' type='text' imp='*' />
                        <InputField data={formData.skills} event={changeHandler} name='skills' label='Skills' ph='Skills' type='text' imp='*' />
                        <div>
                            <button type="submit" className='bg-primary-200 hover:bg-primary-400 text-white rounded-md py-2 px-6 font-medium'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default UserDetailsForm;
