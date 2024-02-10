import React, { useState } from 'react'
import Navbar from '../../components/common/Navbar'

import DetailsHeader from '../../components/DetailsHeader';
import PostAJobForm from '../../components/PostAJobForm';
function PostJobs() {
    return (
        <>
            <Navbar />
            <div className="container mx-auto lg:py-24 py-12 px-4">
                <DetailsHeader h1='Post a job today' h2='Ready to post a job for your company? Choose your job type below and fill all the job information' />
                <PostAJobForm />
            </div>
        </>
    )
}

export default PostJobs