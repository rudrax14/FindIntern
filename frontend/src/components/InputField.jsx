import React from 'react';

function InputField({ type, ph, Icon, event, data, name, year }) {
    return (
        <>
            <div className="flex items-center border-b-2 border-[#8a2be2] py-2 gap-3 w-full relative">
                <i className='text-[#8f3fda] text-2xl'>{<Icon />}</i>
                <input
                    type={type}
                    placeholder={ph}
                    name={name}
                    id={name}
                    value={data}
                    onChange={event}
                    className='outline-none text-2xl bg-transparent text-black placeholder-black'
                />
                <span className='pl-20 text-2xl'>{year}</span>
            </div>
        </>
    );
}

export default InputField;
