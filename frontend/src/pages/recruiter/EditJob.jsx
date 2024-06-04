import React, { useState } from 'react'
import Navbar from '../../components/common/Navbar'

import DetailsHeader from '../../components/common/DetailsHeader';
import EditAJobForm from '../../components/Form/EditAJobForm';
function EditJob() {
    return (
        <>
            <Navbar />
            <div className='dark:bg-dark-secondary-500'>

                <div className="container mx-auto lg:py-24 py-12 px-4">
                    <DetailsHeader h1='Edit Your Job' h2='Ready to edit your job for your company? Choose your job type below and fill all the job information' />
                    <EditAJobForm />
                </div>
            </div>
        </>
    )
}

export default EditJob