import React, { useState } from 'react'
import { FaSistrix } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa";
import { Twirl as Hamburger } from 'hamburger-react'
import JobsCards from '../components/JobsCards';
import Navbar from '../components/common/Navbar';
function StartupPage() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <Navbar />
            <main main >
                {/* Hero section */}
                <section className='bg-secondary-100 h-dvh py-20 flex '>
                    <div className="container xl:grid grid-cols-2 flex 2xl px-6 mx-auto">
                        <div className='flex flex-col gap-12 sm:flex-wrap w-full text-center sm:text-start justify-center 2xl:px-20'>
                            <div className='flex flex-col gap-6 '>
                                <h1 className='sm:text-6xl text-4xl font-bold text-wrap text-secondary-300'>Find your dream job that you love to do.</h1>
                                <p className='md:font-semibold font-medium md:text-xl text-lg text-secondary-200'>The largest remote work community in the world. Sign up and post a job or create your developer profile.</p>
                            </div>
                            <div>
                                <form action="" className='flex flex-col gap-6 py-4 px-8 items-center h-full w-full rounded-lg bg-white md:flex-row md:rounded-full md:px-4 md:h-14 md:w-min md:justify-between md:items-center '>
                                    <div className='flex items-center py-1 border w-full md:border-none rounded-full text-secondary-200 gap-3 pl-3'>
                                        <span className=''>{<FaSistrix />}</span>
                                        <input type="text" placeholder='Job Title' className='placeholder:text-secondary-200 outline-none' />
                                    </div>
                                    <div className='flex  items-center py-1 border md:border-none w-full rounded-full text-secondary-200 gap-3 pl-3'>
                                        <span className=''>{<IoLocationOutline />}</span>
                                        <input type="text" placeholder='Location' className='placeholder:text-secondary-200 outline-none' />
                                    </div>
                                    <div className='flex w-full md:block'>
                                        <button className='bg-primary-200 hover:bg-primary-300 w-full text-white px-12 py-2 rounded-full font-medium'>Search</button>
                                    </div>
                                </form>
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

                        <div className='text-center'>
                            <span className='text-primary-200 text-base font-semibold uppercase tracking-widest'>Latest Job Opening</span>
                            <h2 className='font-bold text-3xl text-secondary-300 mt-6'>Explore remote friendly, flexible job opportunities.</h2>
                        </div>
                        <div className=''>
                            <JobsCards />
                        </div>
                        <div className='flex items-center justify-center mb-10'>
                            <button className='hover:bg-primary-200 hover:text-white border border-primary-200 text-primary-200 font-medium p-3 rounded-lg'>Browse All Jobs Postings</button>
                        </div>
                    </div>
                </section>
                {/* companies */}
            </main >
        </>
    )
}

export default StartupPage