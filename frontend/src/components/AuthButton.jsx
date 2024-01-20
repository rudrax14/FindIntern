import React from 'react'

function AuthButton({ type, event }) {
    return (
        <button onClick={event} className='bg-[#8f3fda] text-white p-2 text-xl font-semibold rounded-full w-full'>{type}</button>
    )
}

export default AuthButton