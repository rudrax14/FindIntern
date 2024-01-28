import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import Navbar from '../components/common/Navbar'
import { LiaUserSolid } from "react-icons/lia";
import InputField from '../components/InputField';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import DetailsHeader from '../components/DetailsHeader';
import ProfileDetailsForm from '../components/ProfileDetailsForm';

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
                <DetailsHeader h1='Find a Job & grow your career' h2='Build your profile and let recruiters find you. Get job postings delivered right to your email.' />
            </div>
            <div className='lg:grid grid-cols-3 gap-6 md:flex container mx-auto py-6 md:px-24 px-6'>
                {/* left side */}
                <ProfileDetailsForm />

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