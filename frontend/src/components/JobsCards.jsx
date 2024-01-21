import React from 'react'

function JobsCards() {
    return (
        <>
            <div className='jobs-card flex flex-col items-center pb-4 gap-6 px-6'>
                <div className="card-body border sm:flex w-full p-6 rounded-lg hover:shadow-2xl hover:cursor-pointer">
                    <div className='comp-logo '>
                        <img src="https://codescandy.com/geeks-bootstrap-5/assets/images/job/job-brand-logo/job-list-logo-1.svg" alt="" className='border rounded-full mr-6 mb-3' />
                    </div>
                    <div className='flex flex-col w-full gap-10'>
                        <div className='comp-description flex flex-col gap-1'>
                            <div className='flex items-center'>
                                <h3 className='font-semibold text-lg'>Software Engineer (Web3/Crypto)</h3>
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
        </>
    )
}

export default JobsCards