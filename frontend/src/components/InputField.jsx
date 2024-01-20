import React from 'react';

function InputField({ type, ph, lable, Icon, event, data, name, year }) {
    return (
        <>
            <div className='flex flex-col gap-2'>
                <label htmlFor="" className='text-secondary-300 font-semibold'>{lable}</label>
                <input type={type} placeholder={ph} className='border text-secondary-200 border-[#cbd5e1] w-full py-2 px-4 rounded-md placeholder:text-secondary-200 focus:border-primary-100 focus:shadow-sm focus:shadow-primary-100 focus:outline-none' />
            </div>
        </>
    );
}

export default InputField;
