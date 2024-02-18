import React from 'react'
import Navbar from '../../components/common/Navbar'
import DetailsHeader from '../../components/DetailsHeader'
import CompanyDetailsForm from '../../components/CompanyDetailsForm'
function CompanyDetails() {
    return (
        <>
            <Navbar />
            <div className="container mx-auto lg:py-24 py-12 px-4">
                <DetailsHeader h1='Welcome Recruiter' h2='Ready to post a job for your company? Choose your job type below and fill all the job information' />
                <CompanyDetailsForm />
            </div>
        </>

    )
}

export default CompanyDetails