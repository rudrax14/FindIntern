import React from 'react'

function DetailsHeader({ h1, h2 }) {
    return (
        <>
            <div className='flex gap-3 flex-col max-w-lg lg:pl-24 lg:text-left text-center '>
                <h1 className='text-4xl text-secondary-300 font-bold dark:text-secondary-100'>{h1}</h1>
                <p className='font-semibold text-secondary-200 text-xl'>{h2}</p>
            </div>
        </>
    )
}

export default DetailsHeader