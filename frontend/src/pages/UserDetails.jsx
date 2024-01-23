import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import Navbar from '../components/common/Navbar'
import { LiaUserSolid } from "react-icons/lia";
import InputField from '../components/InputField';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import DetailsHeader from '../components/DetailsHeader';

function UserDetails() {

    const navigate = useNavigate();

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
        toast.success('Login successful')
        const accountData = {
            ...formData,
        };
        console.log(accountData);

        navigate("/dashboard");
    }


    return (
        <>
            <Navbar />
            <div className="container mx-auto py-8 px-4">
                <DetailsHeader h1='Find a Job & grow your career' h2='Build your profile and let recruiters find you. Get job postings delivered right to your email.'/>
            </div>
            <div className='lg:grid grid-cols-3 gap-6 md:flex container mx-auto py-6 md:px-24 px-6'>
                <form action="" onSubmit={submitHandler} className=' border flex flex-col gap-3 border-gray-300 rounded-lg p-12 col-span-2'>
                    <div className='flex flex-col gap-3'>
                        <h3 className='text-2xl font-semibold text-secondary-300'>Basic Information</h3>
                        <p>Add your personal details in the form.</p>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <InputField label='Job Title' ph='Write the Job Title' type='text' imp='*' />
                        <InputField label='Location' ph='Write the Job Title' type='text' imp='*' />
                        <InputField label='Education' ph='Write the Job Title' type='text' imp='*' />
                        <InputField label='Experience' ph='Write the Job Title' type='text' imp='*' />
                        <InputField label='Skills' ph='Write the Job Title' type='text' imp='*' />
                        <div className=''>
                            <button className='bg-primary-200 text-white rounded-md lg:w-2/6 w-full py-2 font-medium'>Submit for Approval</button>
                        </div>
                    </div>
                </form>
                {/* compo */}
                <div className=' bg-secondary-100 flex flex-col gap-4 h-fit p-8 w-[66%] md:w-[76%] rounded-lg md:mt-0 mt-6'>
                    <div>
                        <img src="https://codescandy.com/geeks-bootstrap-5/assets/images/job/job-graphics.svg" alt="" />
                    </div>
                    <h3 className=' font-medium text-xl'>On registering you can</h3>
                    <ul className='flex flex-col gap-3'>
                        <div className='flex items-start gap-1'>
                            <div className='text-green-500'>
                                <CheckCircleOutlineOutlinedIcon />

                            </div>
                            <li>Build your profile and letrecruiters find you.</li>
                        </div>
                        <div className='flex items-start gap-1'>
                            <div className='text-green-500'>
                                <CheckCircleOutlineOutlinedIcon />

                            </div>
                            <li>Get
                                job postings delivered right
                                to your email.</li>
                        </div>
                        <div className='flex items-start gap-1'>
                            <div className='text-green-500'>
                                <CheckCircleOutlineOutlinedIcon />

                            </div>
                            <li>Find a
                                Job & grow your career</li>
                        </div>


                    </ul>
                </div>
            </div>
        </>
    )
}

export default UserDetails