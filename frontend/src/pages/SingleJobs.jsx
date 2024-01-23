import React from 'react'
import Navbar from '../components/common/Navbar'
import JobsCards from '../components/JobsCards'

function SingleJobs() {
    return (
        <>
            <Navbar />
            <section className='lg:py-24 py-12'>
                <div className="container mx-auto max-w-4xl">
                    {/* job card */}
                    <div className='jobs-card flex flex-col items-center pb-4 gap-6'>
                        <div className="card-body border-b sm:flex w-full p-6">
                            <div className='comp-logo '>
                                <img src="https://codescandy.com/geeks-bootstrap-5/assets/images/job/job-brand-logo/job-list-logo-1.svg" alt="" className='border rounded-full mr-6 mb-3' />
                            </div>
                            <div className='flex flex-col w-full gap-10'>
                                <div className='comp-description flex flex-col gap-1'>
                                    <div className='flex items-center'>
                                        <h3 className='font-semibold text-2xl'>Software Engineer (Web3/Crypto)</h3>
                                        <span className='text-red-600 font-normal ml-2 mt-1 bg-red-50 px-3 rounded-lg'>Featured Job</span>
                                    </div>
                                    <div className='text-secondary-200 flex flex-row gap-3'>
                                        <span>at HelpDesk </span>
                                        <span className='text-secondary-300'>4.5 ⭐</span>
                                        <span>(131 Reviews)</span>
                                    </div>
                                </div>
                                <div className=''>
                                    <div className='sm:flex justify-between text-secondary-200'>
                                        <div className='flex flex-row gap-3'>
                                            <span>1 - 5 years</span>
                                            <span>12k - 18k</span>
                                            <span>Ahmedabad, Gujarat</span>
                                        </div>
                                        <div className=''>21 hours ago</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='space-y-12 px-6'>
                        <div>
                            <p className='text-secondary-200'>Job Applicants: <span className='text-secondary-300'>306</span></p>
                        </div>
                        {/* text */}
                        <div className='space-y-3'>
                            <h2 className='text-secondary-300 text-xl font-semibold'>Job description</h2>
                            <p className='text-secondary-200 '>Maintains information technology strategies by managing staff researching, Budgeting and implementing technological strategic solutions.
                            </p>
                        </div>
                        <div className='space-y-3'>
                            <h2 className='text-secondary-300 text-xl font-semibold'>Role</h2>
                            <p className='text-secondary-200 '>Aliquam pellentesque mollis interdum. Proin ligula lacus, maximus quis ante a, luctus sodales
                                sapien. Donec ut
                                tristique nisi. Nulla a quam sit amet turpis convallis porttitor vel sed quam. Ut in odio
                                enim. Maecenas eu tellus erat.
                                Maecenas nec maximus elit, ac suscipit justo. Maecenas nisl tellus, sodales non gravida
                                eget, placerat sit amet erat.
                            </p>
                        </div>
                        {/* list */}
                        <div className='space-y-3 '>
                            <h2 className='text-secondary-300 text-xl font-semibold'>Responsibilities</h2>
                            <ul className='text-secondary-200 pl-8'>
                                <li className='list-disc'>Lorem ipsum dolor sit amet, consectetur adipiscing elitì</li>
                                <li className='list-disc'>Lorem ipsum dolor sit amet, consectetur adipiscing elitì</li>
                                <li className='list-disc'>Lorem ipsum dolor sit amet, consectetur adipiscing elitì</li>
                                <li className='list-disc'>Lorem ipsum dolor sit amet, consectetur adipiscing elitì</li>
                                <li className='list-disc'>Lorem ipsum dolor sit amet, consectetur adipiscing elitì</li>
                            </ul>
                        </div>
                        <div className='space-y-3'>
                            <h2 className='text-secondary-300 text-xl font-semibold'>Desired Candidate Profile</h2>
                            <ul className='text-secondary-200 pl-8'>
                                <li className='list-disc'>Lorem ipsum dolor sit amet, consectetur adipiscing elitì</li>
                                <li className='list-disc'>Lorem ipsum dolor sit amet, consectetur adipiscing elitì</li>
                                <li className='list-disc'>Lorem ipsum dolor sit amet, consectetur adipiscing elitì</li>
                                <li className='list-disc'>Lorem ipsum dolor sit amet, consectetur adipiscing elitì</li>
                                <li className='list-disc'>Lorem ipsum dolor sit amet, consectetur adipiscing elitì</li>
                            </ul>
                        </div>
                        <div className=''>
                            <button className='bg-primary-200 hover:bg-primary-400 text-white rounded-md w-full py-2 font-medium'>Apply For This Job</button>
                        </div>
                    </div>
                </div>
                {/* related jobs */}
                <div className='container mx-auto  max-w-4xl mt-12'>
                    <h2 className='text-secondary-300 text-2xl font-semibold mb-6 ml-6'>Similar Jobs</h2>
                    <JobsCards />
                    <JobsCards />
                    <JobsCards />
                    <JobsCards />
                </div>
            </section>

        </>
    )
}

export default SingleJobs