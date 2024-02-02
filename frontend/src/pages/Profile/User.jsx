import React from 'react'
import Navbar from '../../components/common/Navbar'
import JobsCards from '../../components/JobsCard'
import { Link } from 'react-router-dom'

function User() {
    return (
        <>
            <Navbar />
            <section className='bg-secondary-100 py-12 px-3'>
                <div className="container mx-auto max-w-7xl rounded-lg">
                    <div className="header">
                        <img src="https://codescandy.com/geeks-bootstrap-5/assets/images/background/profile-bg.jpg" alt="" className='bg-cover h-[120px] w-full rounded-t-lg' />
                        {/* <div className='bg' style={{ background: `url(https://codescandy.com/geeks-bootstrap-5/assets/images/background/profile-bg.jpg)`, backgroundSize: 'cover' }}>

                        </div> */}
                        <div className='bg-white flex px-6 md:h-20 items-center rounded-b-lg w-full'>
                            <div className='relative -mt-8'>
                                <img src="https://codescandy.com/geeks-bootstrap-5/assets/images/avatar/avatar-3.jpg" alt="" className='w-20 rounded-full border-white border-4' />
                            </div>
                            <div className="flex justify-between px-3 items-center w-full">
                                <div className="flex flex-col">
                                    <h2 className='text-2xl font-semibold text-secondary-300'>Rudra Mondal</h2>
                                    <p className='text-secondary-200'>@rudramondal</p>
                                </div>
                                <div>
                                    <Link className="bg-primary-200 hover:bg-primary-400 text-white rounded-md  w-fit px-2 py-1 font-medium" to="">Account Settings</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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