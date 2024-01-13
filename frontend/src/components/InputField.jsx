import React from 'react'

function InputField({ type, ph, Icon, event, data, name }) {
    return (
        <>
            <div className="input_two flex items-center border-b-2 border-[#8a2be2] py-2 gap-2">
                <i className='text-[#8f3fda] text-2xl'>{<Icon />}</i>
                <input type={type} placeholder={ph} name={name} id={name} value={data} onChange={event} className='outline-none text-2xl bg-transparent text-black placeholder-black' />
            </div>
        </>
    )
}

export default InputField