import React from 'react'
import Navbar from '../../components/common/Navbar'
import { FaSistrix } from "react-icons/fa";

import ProfileHeader from '../../components/Profile/ProfileHeader';
import Table from '../../components/Table';
function Admin() {
    return (
        <>
            <Navbar />
            <section className='bg-secondary-100 xl:py-12 py-6 px-3'>
                <ProfileHeader />
                <div className='container mx-auto max-w-7xl rounded-lg bg-white mt-6'>
                    <h3 className='text-2xl font-semibold text-secondary-300 px-6 py-6'>All Jobs Requests</h3>
                    <div className=''>
                        {/* search */}
                        <form action="" className='px-6'>
                            <div className='flex items-center py-2 border w-full rounded-xl text-secondary-200 gap-3 pl-3'>
                                <span className=''>{<FaSistrix />}</span>
                                <input type="text" placeholder='Search' className='placeholder:text-secondary-200 outline-none w-full' />
                            </div>
                        </form>
                        {/* jobs cards */}
                        <Table />

                    </div>
                </div>
            </section>
        </>
    )
}

export default Admin