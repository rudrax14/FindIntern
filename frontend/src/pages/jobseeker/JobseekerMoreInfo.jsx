import React from 'react';
import Navbar from '../../components/common/Navbar';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import DetailsHeader from '../../components/common/DetailsHeader';
import ProfileDetailsForm from '../../components/Form/UserDetailsForm';

function UserDetails() {
    return (
        <>
            <Navbar />
            <div className='dark:bg-dark-secondary-500'>
                <div className="container mx-auto py-8 px-4">
                    <DetailsHeader h1='Find a Job & grow your career' h2='Build your profile and let recruiters find you. Get job postings delivered right to your email.' />
                </div>
                <div className='container mx-auto py-6 grid lg:grid-cols-3 gap-6 md:px-24 px-6'>
                    {/* left side */}
                    <ProfileDetailsForm />

                    {/* right side */}
                    <div className='bg-secondary-100 flex flex-col gap-4 h-fit p-8 rounded-lg md:mt-0 mt-6 dark:bg-dark-secondary-400 dark:text-secondary-100'>
                        <div>
                            <img src="https://codescandy.com/geeks-bootstrap-5/assets/images/job/job-graphics.svg" alt="" />
                        </div>
                        <h3 className='font-medium text-xl'>On registering you can</h3>
                        <ul className='flex flex-col gap-3'>
                            <li className='flex items-start gap-2'>
                                <CheckCircleOutlineOutlinedIcon className='text-green-500' />
                                Build your profile and let recruiters find you.
                            </li>
                            <li className='flex items-start gap-2'>
                                <CheckCircleOutlineOutlinedIcon className='text-green-500' />
                                Get job postings delivered right to your email.
                            </li>
                            <li className='flex items-start gap-2'>
                                <CheckCircleOutlineOutlinedIcon className='text-green-500' />
                                Find a job & grow your career.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserDetails;
