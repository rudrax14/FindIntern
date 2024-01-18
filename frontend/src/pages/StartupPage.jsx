import React from 'react'
import logo from '../../public/logo.png'
import hero from '../../public/hero.png'
import aboutUs from '../../public/aboutUs.png'
import wave2 from '../../public/wave2.png'
import wave1 from '../../public/wave1.png'
import one from '../../public/services_img/1.png'
import google from '../../public/companies/google.png'
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
function StartupPage() {
    return (
        <>
            <nav className=' sticky top-0'>
                <div className='flex text-white justify-between items-center px-6 h-12 w-full' style={{ backgroundImage: 'linear-gradient(to right, #a517ba, #5f1782)' }}>
                    <div className='flex'>
                        <h1 className='text-xl font-bold'>FIND-INTERN</h1>
                    </div>
                    <div className='flex'>
                        <ul className='flex font-semibold text-xl gap-6'>
                            <li class="nav-item">
                                <a class="nav-link" href="#top">HOME</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#services">SERVICES</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#about-us">ABOUT US</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#companies">COMPANIES</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#footer">CONTACT US</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/loginForm">LOGIN</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/signupForm">SIGNUP</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <section className='flex flex-col items-center pt-36 w-full' style={{ backgroundImage: 'linear-gradient(to right, #a517ba, #5f1782)' }}>
                <div className='container grid grid-cols-2 gap-6' >
                    <div className='desc text-white flex items-center justify-center flex-col gap-4'>
                        <p className=' text-4xl font-medium'>FINDINTERN</p>
                        <p className='text-xl'>Choose a job you love, and you will never have to work a day in your life.</p>
                        <p className=''>Find jobs that fit your qualifications.</p>
                    </div>
                    <div className='hero_img flex justify-center items-center'>
                        <img src={hero} alt="" />
                    </div>
                </div>
                <div>
                    <img src={wave2} alt="" />
                </div>
            </section>
            <section id="services" className='services h-svh" flex justify-center items-center py-32'>
                <div className="container text-center justify-center items-center">
                    <div className='flex flex-col items-center'>
                        <div className='mb-4'>
                            <h1 className='lg:text-4xl text-2xl font-semibold'>What We Do ?</h1>
                        </div>
                        <div className='border-b-4 w-60 border-[#8a2be2] h-1'></div>
                    </div>
                    <div className='grid md:grid-cols-3 items-center gap-12 pt-12'>
                        <div className='flex items-center flex-col'>
                            <img src={one} alt="" className='w-[120px]' />
                            <h2>Career Exploration</h2>
                            <p>"Learn about a career field from the inside and decide if this is the right career field for you.
                                Work alongside a professional in your chosen career area.
                                Observe the workplace and see if it matches expectations."</p>

                        </div>
                        <div className='flex items-center flex-col'>
                            <img src={one} alt="" className='w-[120px]' />
                            <h2>Career Exploration</h2>
                            <p>"Learn about a career field from the inside and decide if this is the right career field for you.
                                Work alongside a professional in your chosen career area.
                                Observe the workplace and see if it matches expectations."</p>

                        </div>
                        <div className='flex items-center flex-col'>
                            <img src={one} alt="" className='w-[120px]' />
                            <h2>Career Exploration</h2>
                            <p>"Learn about a career field from the inside and decide if this is the right career field for you.
                                Work alongside a professional in your chosen career area.
                                Observe the workplace and see if it matches expectations."</p>

                        </div>
                        <div className='flex items-center flex-col'>
                            <img src={one} alt="" className='w-[120px]' />
                            <h2>Career Exploration</h2>
                            <p>"Learn about a career field from the inside and decide if this is the right career field for you.
                                Work alongside a professional in your chosen career area.
                                Observe the workplace and see if it matches expectations."</p>

                        </div>
                        <div className='flex items-center flex-col'>
                            <img src={one} alt="" className='w-[120px]' />
                            <h2>Career Exploration</h2>
                            <p>"Learn about a career field from the inside and decide if this is the right career field for you.
                                Work alongside a professional in your chosen career area.
                                Observe the workplace and see if it matches expectations."</p>

                        </div>
                        <div className='flex items-center flex-col'>
                            <img src={one} alt="" className='w-[120px]' />
                            <h2>Career Exploration</h2>
                            <p>"Learn about a career field from the inside and decide if this is the right career field for you.
                                Work alongside a professional in your chosen career area.
                                Observe the workplace and see if it matches expectations."</p>

                        </div>


                    </div>
                    <button className='mt-6 text-xl py-2 px-6 rounded-full  text-white' style={{ backgroundImage: 'linear-gradient(to right, #a517ba, #5f1782)' }}> Enter</button>
                </div>
            </section >
            <section id="about-us" className='about-us lg:h-screen flex justify-center py-12  bg-[#f8f8fa]'>
                <div className='container flex flex-col h-3/4 justify-around items-center'>
                    <div className='flex flex-col items-center'>
                        <div className='mb-4'>
                            <h1 className='lg:text-4xl text-2xl border-[#8a2be2] border-b-2  font-semibold'>Why Choose Us ?</h1>
                        </div>
                        <div className='border-b-4 lg:w-80  border-[#8a2be2] h-1'></div>
                    </div>
                    <div className='lg:grid grid-cols-2 gap-60'>
                        <div className='flex flex-col lg:gap-12 gap-3 '>
                            <h1 className='lg:text-4xl text-xl font-medium'>Why we're different</h1>
                            <ul className='flex flex-col lg:gap-3 gap-1'>
                                <li>It won't pay much.</li>
                                <li>You may get the grunt work.</li>
                                <li>You could get labeled.</li>
                                <li>The hours can vary.</li>
                            </ul>
                        </div>
                        <div className='max-w-xs'>
                            <img src={aboutUs} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section id="companies" className='companies lg:h-screen flex flex-col items-center justify-center '>
                <div className="container text-center justify-center py-12">
                    <div className='flex flex-col items-center mb-24'>
                        <div className='mb-4'>
                            <h1 className='text-4xl font-semibold'>Companies</h1>
                        </div>
                        <div className='border-b-4 w-60 border-[#8a2be2] h-1'></div>
                    </div>


                    <div className='lg:grid flex flex-col grid-cols-2 gap-6 lg:px-32 pl-3'>
                        <div className='flex flex-col items-center gap-3 border-l-[4px] border-[#7b1798]'>
                            <p className='px-20'>Google LLC is an American multinational technology company that specializes
                                in Internet-related services and products, which include online advertising
                                technologies, a search engine, cloud computing, software, and hardware.</p>
                            <img src={google} alt="" className='h-[80px] w-[80px]' />
                            <p>GOOGLE</p>
                        </div>
                        <div className='flex flex-col items-center border-l-[4px] border-[#7b1798]'>
                            <p className='px-20'>Google LLC is an American multinational technology company that specializes
                                in Internet-related services and products, which include online advertising
                                technologies, a search engine, cloud computing, software, and hardware.</p>
                            <img src={google} alt="" className='h-[80px] w-[80px]' />
                            <p>GOOGLE</p>
                        </div>
                        <div className='flex flex-col items-center border-l-[4px] border-[#7b1798]'>
                            <p className='px-20'>Google LLC is an American multinational technology company that specializes
                                in Internet-related services and products, which include online advertising
                                technologies, a search engine, cloud computing, software, and hardware.</p>
                            <img src={google} alt="" className='h-[80px] w-[80px]' />
                            <p>GOOGLE</p>
                        </div>
                        <div className='flex flex-col items-center border-l-[4px] border-[#7b1798]'>
                            <p className='px-20'>Google LLC is an American multinational technology company that specializes
                                in Internet-related services and products, which include online advertising
                                technologies, a search engine, cloud computing, software, and hardware.</p>
                            <img src={google} alt="" className='h-[80px] w-[80px]' />
                            <p>GOOGLE</p>
                        </div>


                    </div>

                </div>
            </section>
            <footer id="footer" className='' style={{ backgroundImage: 'linear-gradient(to right, #a517ba, #5f1782)' }}>
                <img src={wave1} alt="" className='' />
                <div className='lg:h-80 flex justify-center items-center ' style={{ backgroundImage: 'linear-gradient(to right, #a517ba, #5f1782)' }}>
                    <div className="w-1/2 flex text-white">
                        <div className='grid grid-cols-2 gap-6 '>
                            <div className='flex flex-col gap-6'>
                                <h1 className=' text-xl font-semibold'>FINDINTERN</h1>
                                <p className=''>"Choose a job you love, and you will never have to work a day in your life.
                                    Do something for somebody every day for which you do not get paid.
                                    Find jobs that fit your qualifications."</p>
                            </div>
                            <div className='px-12 flex flex-col gap-3 '>
                                <h1 className='text-xl font-semibold'>CONTACT US</h1>
                                <div className='flex text-center items-center gap-2'>
                                    <i>{<FaMapMarkerAlt />}</i>
                                    <p>THANE, MAHARASHTRA</p>
                                </div>
                                <div className='flex text-center items-center gap-2'>
                                    <i>{<FaPhoneAlt />}</i>
                                    <p>+91 1234567890</p>
                                </div>
                                <div className='flex text-center items-center gap-2'>
                                    <i>{<FaEnvelope />}</i>
                                    <p>abc@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer >
        </>
    )
}

export default StartupPage