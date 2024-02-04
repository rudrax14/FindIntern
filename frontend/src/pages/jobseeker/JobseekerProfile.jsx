import React from 'react'
import Navbar from '../../components/common/Navbar'
import JobsCards from '../../components/JobsCard'
import ProfileHeader from '../../components/ProfileHeader'

function User() {
    return (
        <>
            <Navbar />
            <section className='bg-secondary-100 py-12 px-3'>
                <ProfileHeader />
                <div className='container mx-auto max-w-7xl rounded-lg bg-white mt-6'>
                    <h3 className='text-2xl font-semibold text-secondary-300 px-6 py-6'>Your Applied Jobs</h3>
                    <div className='grid xl:grid-cols-2 gap-3'>
                        {Array(6).fill().map((_e, index) => (
                            <JobsCards key={index} logo='https://codescandy.com/geeks-bootstrap-5/assets/images/job/job-brand-logo/job-list-logo-1.svg' company='Software Engineer (Web3/Crypto)' role='Featured Job' experience='1 - 5 years' salary='12k - 18k' location='Ahmedabad, Gujarat' />
                        ))}
                        {/* <div className="card border h-full rounded-lg">
                            <a href="" className=''>
                                <img className='' src="https://codescandy.com/geeks-bootstrap-5/assets/images/course/course-react.jpg" alt="" />
                            </a>
                            <div className="card-body">
                                <h3>How to easily create a website with React</h3>
                                <ul></ul>
                                <div></div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>

        </>
    )
}

export default User