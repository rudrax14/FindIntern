import React from 'react'

function FilterBoxJobs({ h1, h2, h3, h4 }) {
    
    return (
        <>

            <div className=' flex gap-2'>
                <input type="checkbox" name="" id="" className='accent-primary-200' />
                <label htmlFor="">{h1} <span>{h2}</span></label>
            </div >
        </>
    )
}

export default FilterBoxJobs