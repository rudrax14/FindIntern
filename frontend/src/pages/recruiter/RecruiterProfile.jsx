import React from 'react'
import Navbar from '../../components/common/Navbar'
import JobsCards from '../../components/common/JobsCard'
import ProfileHeader from '../../components/Profile/ProfileHeader'
function Company() {
    return (
        <>
            <Navbar />
            <section className='bg-secondary-100 py-12 px-3'>
                <ProfileHeader />
                <div className='container mx-auto max-w-7xl rounded-lg bg-white mt-6'>
                    <h3 className='text-2xl font-semibold text-secondary-300 px-6 py-6'>Your Applied Jobs</h3>
                    <div className='grid xl:grid-cols-2 gap-3'>
                        {Array(1).fill().map((_e, index) => (
                            <JobsCards key={index} logo='https://codescandy.com/geeks-bootstrap-5/assets/images/job/job-brand-logo/job-list-logo-1.svg' company='Software Engineer (Web3/Crypto)' role='Featured Job' experience='1 - 5 years' salary='12k - 18k' location='Ahmedabad, Gujarat' />
                        ))}
                    </div>
                </div>
            </section>

        </>
    )
}

export default Company