import React from 'react'
import { Link } from 'react-router-dom'
function Table() {
    return (
        <>

            <div className=' hidden pt-6 md:block'>
                <table className='table w-full text-left'>
                    <thead className=''>
                        <tr className='text-secondary-300 font-extralight text-lg'>
                            <th className="pl-8 pb-2">Jobs</th>
                            <th className='pb-2'>Recruiter</th>
                            <th className='pb-2'>Status</th>
                            <th className='pb-2'>Action</th>
                            <th className='pb-2'>More</th>
                        </tr>
                    </thead>



                    {/* repeat body */}
                    {Array(4).fill().map((_e, index) => (

                        <tbody className='hover:bg-secondary-100 border-y '>
                            <tr className=''>
                                <td className=''>
                                    <a href="" className=''>
                                        <div className='md:flex gap-2 py-3 px-2 ml-6'>
                                            <div className=''>
                                                <img className='w-24 rounded-' src="https://codescandy.com/geeks-bootstrap-5/assets/images/course/course-gatsby.jpg" alt="" />
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
                                    <Link to="" className='border border-secondary-200 text-secondary-200 px-2 rounded-md hover:bg-secondary-200 hover:text-white'>Reject</Link>
                                    <Link href="" className='ml-2 border border-green-500 text-green-500 px-2 rounded-md hover:bg-green-500 hover:text-white'>Approved</Link>
                                </td>
                                <td>
                                    <span>More</span>
                                </td>
                            </tr>
                        </tbody>

                    ))}
                </table>

            </div>
            <div className='px-2 py-2 w-full md:hidden'>
                {/* flex cardbody */}
                <div className="flex flex-col md:flex-row gap-3 justify-between ">
                    {Array(4).fill().map((_e, index) => (
                        <div className='border overflow-hidden px-3 space-y-3 py-3 rounded-lg hover:shadow-lg'>
                            <div className=''>
                                <a href="" className=''>
                                    <div className='flex gap-3 items-center'>
                                        <div className=''>
                                            <img className='w-28 ' src="https://codescandy.com/geeks-bootstrap-5/assets/images/course/course-gatsby.jpg" alt="" />
                                        </div>
                                        <div className='flex justify-between w-full items-center'>
                                            <div className=''>
                                                <h4>Revolutionize how you build the web...</h4>
                                                <span>Added on 7 July, 2023</span>
                                            </div>
                                            <div className='flex gap-2'>
                                                <img className='h-6 w-6 rounded-full' src="https://codescandy.com/geeks-bootstrap-5/assets/images/avatar/avatar-7.jpg" alt="" />
                                                <h5>Rudra</h5>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className='flex gap-7'>
                                <span className='pl-5'>Pending</span>
                                <div className=' flex justify-between w-full'>
                                    <div className='space-x-3'>
                                        <Link to="" className='border border-secondary-200 text-secondary-200 px-2 rounded-md hover:bg-secondary-200 hover:text-white'>Reject</Link>
                                        <Link href="" className='border border-green-500 text-green-500 px-2 rounded-md hover:bg-green-500 hover:text-white'>Approved</Link>
                                    </div>
                                    <div className='hover:cursor-pointer'>
                                        <span>More</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>

    )
}

export default Table