import React, { useState } from 'react'
import { FaSistrix } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa";
import { Twirl as Hamburger } from 'hamburger-react'
function StartupPage2() {
    const [isOpen, setOpen] = useState(false)
    // const [nav, setNav] = useState(false);

    // const handleNav = () => {
    //     setNav(!nav);
    // };
    return (
        <>
            <nav className='sticky top-0 bg-white z-20'>
                <div className="flex h-14 shadow-xl px-4">
                    <div className="container mx-auto flex justify-between items-center">
                        <h1 className='font-bold text-xl'>FINDINTERN</h1>
                        <div className=''>
                            <ul className='sm:flex w-60 justify-between text-lg font-medium hidden'>
                                <li>Home</li>
                                <li>Jobs</li>
                                <li>About Us</li>
                            </ul>
                        </div>
                        <div className=' buttons flex text-center font-medium text-lg'>
                            <a href="" className='text-[#754ffe] border-[#754ffe] hover:bg-[#6343d8] hover:text-white rounded-md border px-2 py-1 mr-2'>Sign in</a>
                            <a href="" className='bg-[#754ffe] text-white border-[#754ffe] hover:bg-[#6343d8] rounded-md border px-2 py-1'>Sign Up</a>
                        </div>
                        <div className='block sm:hidden'>
                            <Hamburger toggled={isOpen} toggle={setOpen} color='#754ffe' />
                        </div>

                    </div>
                </div>
                <div className={` ${isOpen ? 'mt-14 fixed top-0 w-full h-full ease-in-out duration-500 md:hidden' : 'ease-in-out duration-500 fixed left-[-100%]'}`}>
                    <div className='bg-white py-4 border-[#754ffe] border transition-all'>
                        <ul className='flex flex-col w-full justify-between text-lg font-medium px-6'>
                            <li className='border-b-[2px] pb-1 borderS'>Home</li>
                            <li className='border-b-[2px] pb-1 borderS'>Jobs</li>
                            <li className='border-b-[2px] pb-1 borderS'>About Us</li>
                        </ul>
                    </div>
                    <div className='backdrop-blur-sm h-full '></div>
                </div>



            </nav >
            {/* Hero section */}
            <main main >
                <section className='bg-[#f1f5f9] h-dvh py-20 flex '>
                    <div className="container xl:grid grid-cols-2 flex 2xl px-6 mx-auto">
                        <div className='flex flex-col gap-12 sm:flex-wrap w-full text-center sm:text-start justify-center 2xl:px-20'>
                            <div className='flex flex-col gap-6 '>
                                <h1 className='sm:text-6xl text-4xl font-bold text-wrap'>Find your dream job that you love to do.</h1>
                                <p className='md:font-semibold font-medium md:text-xl text-lg text-gray-500'>The largest remote work community in the world. Sign up and post a job or create your developer profile.</p>
                            </div>
                            <div>
                                <form action="" className='flex flex-col gap-6 py-4 px-8 items-center h-full w-full rounded-lg bg-white md:flex-row md:rounded-full md:px-4 md:h-14 md:w-min md:justify-between md:items-center '>
                                    <div className='flex  items-center py-1 border w-full md:border-none rounded-full text-gray-500 gap-3 pl-3'>
                                        <span className=''>{<FaSistrix />}</span>
                                        <input type="text" placeholder='Job Title' className='placeholder:text-gray-800 outline-none' />
                                    </div>
                                    <div className='flex  items-center py-1 border md:border-none w-full rounded-full text-gray-500 gap-3 pl-3'>
                                        <span className=''>{<IoLocationOutline />}</span>
                                        <input type="text" placeholder='Location' className='placeholder:text-gray-800 outline-none' />
                                    </div>
                                    <div className='flex w-full md:block'>
                                        <button className='bg-[#754ffe] hover:bg-[#6343d8] w-full text-white px-12 py-2 rounded-full'>Search</button>
                                    </div>
                                </form>
                            </div>
                            <p className='text-gray-500'>Currently listing 30,642 jobs from 5,717 companies</p>
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
                <section className=' top-comp'>
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
                    <div className="container mx-auto ">
                        <div className='text-center'>
                            <span className='text-blue-600 text-lg font-semibold'>Latest Job Opening</span>
                            <h2 className='font-bold text-3xl text-gray-600 mt-6'>Explore remote friendly, flexible job opportunities.</h2>
                        </div>
                        <div className='multi-cards flex flex-col items-center py-6 gap-6 px-3'>

                            <div className="card-body border sm:flex  w-full max-w-3xl p-6 rounded-lg hover:shadow-2xl hover:cursor-pointer">
                                <div className='comp-logo '>
                                    <img src="https://codescandy.com/geeks-bootstrap-5/assets/images/job/job-brand-logo/job-list-logo-1.svg" alt="" className='border rounded-full mr-6 mb-3' />
                                </div>
                                <div className='flex flex-col w-full gap-10'>
                                    <div className='comp-description flex flex-col gap-1'>
                                        <div className='flex items-center'>
                                            <h3 className='font-semibold text-lg'>Software Engineer (Web3/Crypto)</h3>
                                            <span className='text-red-600 font-normal ml-2 mt-1 bg-red-50 px-3 rounded-lg'>Featured Job</span>
                                        </div>
                                        <div className='text-gray-500 flex flex-row gap-3'>
                                            <span>at HelpDesk </span>
                                            <span className='text-black'>4.5 ⭐</span>
                                            <span>(131 Reviews)</span>
                                        </div>
                                    </div>
                                    <div className=''>
                                        <div className='sm:flex justify-between text-gray-500'>
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
                        <div className='flex items-center justify-center mb-10'>
                            <button className='hover:bg-[#754ffe] hover:text-white border border-[#754ffe] text-[#754ffe] font-medium p-3 rounded-lg'>Browse All Jobs Postings</button>
                        </div>
                    </div>
                </section>
            </main >
        </>
    )
}

export default StartupPage2