import React, { useState } from 'react'
import FilterBoxJobs from './FilterBoxJobs'

function CardBody() {
    const [visible, setVisible] = useState(true)
    return (
        <div className="card-body p-5 space-y-3 border-b ">
            <a href="" onClick={(e) => { e.preventDefault(), setVisible(!visible) }} className='text-secondary-300 font-semibold'>Locations</a>
            <div className={` transition-all duration-300 ease-in-out ${visible
                ? ""
                : "fixed left-[-100%]"
                }`}>
                <form action="" className='text-secondary-200 space-y-1'>
                    <FilterBoxJobs h1='Mumbai' h2='(8)' />
                    <FilterBoxJobs h1='Delhi' h2='(4)' />
                    <FilterBoxJobs h1='Bangalore' h2='(3)' />
                </form>
            </div>
        </div>
    )
}

export default CardBody