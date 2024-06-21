import React, { useContext, useEffect } from 'react'
import {TimeTracker} from '../utils/TimeTracker'
import { AdminContext } from '../context/AdminContext'
import useJobHooks from '../hooks/jobHooks'
import { useSelector } from 'react-redux'



function Table() {

    const allJobs = useSelector(state => state.job.allJobs);
    const { fetchAllJobs } = useJobHooks();

    const { AdminApprove, AdminReject } = useContext(AdminContext);
    useEffect(() => {
        fetchAllJobs();
    }, [fetchAllJobs]);

    return (
        <>

            <div className=' hidden pt-6 md:block'>
                <table className='table w-full text-left'>
                    <thead className=''>
                        <tr className='text-secondary-300 font-extralight text-lg dark:text-secondary-100'>
                            <th className="pl-8 pb-2">Jobs</th>
                            <th className='pb-2'>Recruiter</th>
                            <th className='pb-2'>Status</th>
                            <th className='pb-2'>Action</th>
                            <th className='pb-2'>More</th>
                        </tr>
                    </thead>



                    {/* repeat body */}
                    {allJobs.length === 0 ? (
                        <tbody>
                            <tr>
                                <td className='text-center text-2xl font-semibold text-secondary-300 py-24' colSpan="5">No jobs request</td>
                            </tr>
                        </tbody>
                    ) : (
                        allJobs.map((job, index) => (
                            <tbody key={index} className='hover:bg-secondary-100 dark:hover:bg-dark-secondary-400 border-y'>
                                <tr className=''>
                                    <td className=''>
                                        <a href="" className=''>
                                            <div className='md:flex gap-2 py-3 px-2 ml-6'>
                                                <div className=''>
                                                    <img className='w-24 rounded-' src="https://codescandy.com/geeks-bootstrap-5/assets/images/course/course-gatsby.jpg" alt="" />
                                                </div>
                                                <div>
                                                    <h4>{job.title || 'null'}</h4>
                                                    <span>{TimeTracker(job.createdAt)}</span>
                                                </div>
                                            </div>
                                        </a>
                                    </td>
                                    <td className=''>
                                        <div className='flex gap-3'>
                                            <img className='h-6 w-6 rounded-full' src="https://codescandy.com/geeks-bootstrap-5/assets/images/avatar/avatar-7.jpg" alt="" />
                                            <h5>{job.company}</h5>
                                        </div>
                                    </td>
                                    <td className='status'>
                                        <span>Pending</span>
                                    </td>
                                    <td>
                                        <button onClick={AdminReject(job._id)} className='border border-secondary-200 text-secondary-200 px-2 rounded-md hover:bg-secondary-200 hover:text-white dark:bg-red-400 dark:text-secondary-100'>Reject</button>
                                        <button onClick={AdminApprove(job._id)} className='ml-2 border border-green-500 text-green-500 px-2 rounded-md hover:bg-green-500 hover:text-white'>Approved</button>
                                    </td>
                                    <td>
                                        <span>More</span>
                                    </td>
                                </tr>
                            </tbody>
                        ))
                    )}

                </table>

            </div>
            <div className='px-2 py-2 w-full md:hidden'>
                {/* flex cardbody */}
                <div className="flex flex-col md:flex-row gap-3 justify-between ">
                    {allJobs.map((job, index) => (
                        <div className='border overflow-hidden px-3 space-y-3 py-3 rounded-lg hover:shadow-lg' key={index}>
                            <div className=''>
                                <a href="" className=''>
                                    <div className='flex gap-3 items-center'>
                                        <div className=''>
                                            <img className='w-28 ' src="https://codescandy.com/geeks-bootstrap-5/assets/images/course/course-gatsby.jpg" alt="" />
                                        </div>
                                        <div className='flex justify-between w-full items-center'>
                                            <div className=''>
                                                <h4>{job.title || 'null'}</h4>
                                                <span>{TimeTracker(job.createdAt)}</span>
                                            </div>
                                            <div className='flex gap-2'>
                                                <img className='h-6 w-6 rounded-full' src="https://codescandy.com/geeks-bootstrap-5/assets/images/avatar/avatar-7.jpg" alt="" />
                                                <h5>{job.company}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className='flex gap-7'>
                                <span className='pl-5'>Pending</span>
                                <div className=' flex justify-between w-full'>
                                    <div className='space-x-3'>
                                        <button onClick={AdminReject(job._id)} className='border border-secondary-200 text-secondary-200 px-2 rounded-md hover:bg-secondary-200 hover:text-white'>Reject</button>
                                        <button onClick={AdminApprove(job._id)} className='border border-green-500 text-green-500 px-2 rounded-md hover:bg-green-500 hover:text-white'>Approved</button>
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