import React from 'react'
import Navbar from '../../components/common/Navbar'
import JobsCards from '../../components/JobsCards'

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
                        <div className='bg-white flex px-6 h-20 items-center rounded-b-lg'>
                            <div className='relative -mt-8'>
                                <img src="https://codescandy.com/geeks-bootstrap-5/assets/images/avatar/avatar-3.jpg" alt="" className='h-20 w-20 rounded-full border-white border-4' />
                            </div>
                            <div className="flex px-3">
                                <div className="flex flex-col">
                                    <h2 className='text-2xl font-semibold text-secondary-300'>Rudra Mondal</h2>
                                    <p className='text-secondary-200'>@rudramondal</p>
                                </div>
                                <div>
                                    <button></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content mt-6">
                        <div className="grid grid-cols-4 gap-6">
                            <div className='bg-white border col-span-1 h-fit rounded-lg'>
                                <div className='text-secondary-200 space-y-2 flex flex-col p-4'>
                                    <span className='uppercase'>Dashboard</span>
                                    <a href="" className='hover:bg-secondary-100 rounded-md w-full'>My Jobs</a>
                                    <a href="" className='hover:bg-secondary-100 rounded-md w-full'>Profile Settings</a>


                                </div>
                            </div>
                            <div className='col-span-3 bg-white border p-4 h-fit rounded-lg'>
                                <JobsCards />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default User