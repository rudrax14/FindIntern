import React, { useState } from 'react'
import { Twirl as Hamburger } from 'hamburger-react'
import { Link } from 'react-router-dom'
function Navbar() {
    const [isOpen, setOpen] = useState(false)
    return (
        <nav className='sticky top-0 bg-white z-20'>
            <div className="flex h-14 shadow-md px-4">
                <div className="container mx-auto flex justify-between items-center">
                    <Link to="/" className='font-bold text-xl text-primary-200 tracking-widest'>FINDINTERN</Link>
                    <div className=''>
                        <ul className='sm:flex w-60 justify-between text-lg font-medium hidden text-secondary-300'>
                            <Link to="/" className='hover:text-primary-200 hover:cursor-pointer'>Home</Link>
                            <Link to="/user/jobs" className='hover:text-primary-200 hover:cursor-pointer'>Jobs</Link>
                            <Link to="/single/jobs" className='hover:text-primary-200 hover:cursor-pointer'>Single Jobs</Link>

                        </ul>
                    </div>
                    <div className=' buttons flex text-center font-medium text-lg'>
                        <Link to="/login" className='text-primary-200 border-primary-200 hover:bg-primary-200 hover:text-white rounded-md border px-2 py-1 mr-2'>Sign in</Link>
                        <Link to="/signup" className='bg-primary-200 text-white border-primary-200 hover:bg-primary-300 rounded-md border px-2 py-1'>Sign Up</Link>
                    </div>
                    <div className='block sm:hidden'>
                        <Hamburger toggled={isOpen} toggle={setOpen} color='#754ffe' />
                    </div>

                </div>
            </div>
            <div className={` ${isOpen ? 'mt-14 fixed top-0 w-full h-full ease-in-out duration-500 md:hidden' : 'ease-in-out duration-500 fixed left-[-100%]'}`}>
                <div className='bg-white py-4 border-primary-200 border transition-all'>
                    <ul className='flex flex-col w-full justify-between text-lg font-medium px-6'>
                        <li className='border-b-[2px] pb-1  hover:text-primary-200 hover:cursor-pointer'>Home</li>
                        <li className='border-b-[2px] pb-1  hover:text-primary-200 hover:cursor-pointer'>Jobs</li>
                        <li className='border-b-[2px] pb-1  hover:text-primary-200 hover:cursor-pointer'>About Us</li>
                    </ul>
                </div>
                <div className='backdrop-blur-sm h-full '></div>
            </div>



        </nav >
    )
}

export default Navbar