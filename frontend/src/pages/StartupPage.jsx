import React from 'react'
import JobsCards from '../components/JobsCard';
import Navbar from '../components/common/Navbar';
import Searchbar from '../components/Searchbar';
function StartupPage() {
    return (
        <>
            <Navbar />
            {/* Hero section */}
            <section className='bg-secondary-100 h-dvh py-20 flex'>
                <div className="container xl:grid grid-cols-2 flex 2xl px-6 mx-auto">
                    <div className='flex flex-col gap-12 w-full sm:flex-wrap text-center sm:text-start justify-center 2xl:px-20'>
                        <div className='flex flex-col gap-6'>
                            <h1 className='sm:text-6xl text-4xl font-bold text-wrap text-secondary-300'>Find your dream job that you love to do.</h1>
                            <p className='md:font-semibold font-medium md:text-xl text-lg text-secondary-200'>The largest remote work community in the world. Sign up and post a job or create your developer profile.</p>
                        </div>
                        <div>
                            <Searchbar />
                        </div>
                        <p className='text-secondary-200'>Currently listing 30,642 jobs from 5,717 companies</p>
                    </div>
                    <div className='hero-image xl:flex justify-center hidden flex-shrink w-full px-12'>
                        <div className='relative'>
                            <img src="https://codescandy.com/geeks-bootstrap-5/assets/images/job/png/job-hero-section.png" alt="" className='w-[519px] h-[568px] shrink' />
                            <div className='absolute top-0 mt-[3rem] -ml-[6rem] start-0'>
                                <img src="https://codescandy.com/geeks-bootstrap-5/assets/images/job/job-hero-block-1.svg" alt="" />
                            </div>
                            <div className='absolute bottom-0 -mr-[5.5rem] mb-[15.5rem] end-0'>
                                <img src="https://codescandy.com/geeks-bootstrap-5/assets/images/job/job-hero-block-2.svg" alt="" />
                            </div>
                            <div className='absolute bottom-0 -ml-[3rem] -mb-[1.5rem] start-0'>
                                <img src="https://codescandy.com/geeks-bootstrap-5/assets/images/job/job-hero-block-3.svg" alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* top-comp */}
            <section className='top-comp'>
                <div className="container bg-white mx-auto py-12">
                    <div className='flex flex-row flex-wrap text-center gap-12 justify-center'>
                        <img src="https://codescandy.com/geeks-bootstrap-5/assets/images/brand/gray-logo-airbnb.svg" alt="" />
                        <img src="https://codescandy.com/geeks-bootstrap-5/assets/images/brand/gray-logo-discord.svg" alt="" />
                        <img src="https://codescandy.com/geeks-bootstrap-5/assets/images/brand/gray-logo-intercom.svg" alt="" />
                        <img src="https://codescandy.com/geeks-bootstrap-5/assets/images/brand/gray-logo-stripe.svg" alt="" />
                        <img src="https://codescandy.com/geeks-bootstrap-5/assets/images/brand/gray-logo-netflix.svg" alt="" />
                    </div>
                </div>
            </section>
            {/* companies */}
            <section className='company-list mt-20 '>
                <div className="container mx-auto max-w-4xl">

                    <div className='text-center mb-6'>
                        <span className='text-primary-200 text-base font-semibold uppercase tracking-widest'>Latest Job Opening</span>
                        <h2 className='font-bold text-3xl text-secondary-300 mt-6'>Explore remote friendly, flexible job opportunities.</h2>
                    </div>
                    <div className=''>
                        {Array(4).fill().map((_e, index) => (
                            <JobsCards key={index} logo='https://codescandy.com/geeks-bootstrap-5/assets/images/job/job-brand-logo/job-list-logo-1.svg' company='Software Engineer (Web3/Crypto)' role='Featured Job' experience='1 - 5 years' salary='12k - 18k' location='Ahmedabad, Gujarat' />
                        ))}
                    </div>
                    <div className='flex items-center justify-center mb-10'>
                        <button className='hover:bg-primary-200 hover:text-white border border-primary-200 text-primary-200 font-medium p-3 rounded-lg'>Browse All Jobs Postings</button>
                    </div>
                </div>
            </section>
            {/* companies */}

        </>
    )
}

export default StartupPage