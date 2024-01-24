import React from 'react'
import Navbar from '../../components/common/Navbar'
import JobsCards from '../../components/JobsCards'
import { FaSistrix } from "react-icons/fa";
import { Link } from 'react-router-dom'
function Admin() {
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
                            <div className="md:flex justify-between px-3 items-center w-full">
                                <div className="flex flex-col">
                                    <h2 className='text-2xl font-semibold text-secondary-300'>Rudra Mondal</h2>
                                    <p className='text-secondary-200'>@rudramondal</p>
                                </div>
                                <div>
                                    <Link className="bg-primary-200 hover:bg-primary-400 text-white rounded-md  w-fit py-2 px-6 font-medium" to="">Account Settings</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container mx-auto max-w-7xl rounded-lg bg-white mt-6'>
                    <h3 className='text-2xl font-semibold text-secondary-300 px-6 py-6'>All Jobs Requests</h3>
                    <div className=''>
                        {/* search */}
                        <form action="" className='px-6'>
                            <div className='flex items-center py-2 border w-full rounded-xl text-secondary-200 gap-3 pl-3'>
                                <span className=''>{<FaSistrix />}</span>
                                <input type="text" placeholder='Search' className='placeholder:text-secondary-200 outline-none ' />
                            </div>
                        </form>
                        {/* jobs cards */}
                        <div className='p-6 overflow-auto'>
                            <table className='table w-full text-left'>
                                <thead>
                                    <tr>
                                        <th>Jobs</th>
                                        <th>HR</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                        <th>More</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className=''>
                                            <a href="" className=''>
                                                <div className='flex'>
                                                    <div className=''>
                                                        <img className='w-24 ' src="https://codescandy.com/geeks-bootstrap-5/assets/images/course/course-gatsby.jpg" alt="" />
                                                    </div>
                                                    <div>
                                                        <h4>Revolutionize how you build the web...</h4>
                                                        <span>Added on 7 July, 2023</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </td>
                                        <td className=''>
                                            <div className='flex gap-3'>
                                                <img className='h-6 w-6 rounded-full' src="https://codescandy.com/geeks-bootstrap-5/assets/images/avatar/avatar-7.jpg" alt="" />
                                                <h5>Rudra</h5>
                                            </div>
                                        </td>
                                        <td className='status'>
                                            <span>Pending</span>
                                        </td>
                                        <td>
                                            <Link to="" className='border border-secondary-200 text-se'>Reject</Link>
                                            <a href="" className=''>Approved</a>
                                        </td>
                                        <td>
                                            <span>More</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Admin