import React from 'react';

function InputField({ type, ph, label, Icon, event, data, name, imp }) {
    return (
        <>
            <div className='flex flex-col gap-2'>
                <label htmlFor="" className='text-secondary-300 font-semibold dark:text-secondary-100'>{label}
                    <span className='text-red-500 ml-1'>{imp}</span>
                </label>
                <input type={type} placeholder={ph} name={name} required value={data} onChange={event} className='border text-secondary-200 dark:bg-dark-secondary-300 border-[#cbd5e1] w-full py-2 px-4 rounded-md placeholder:text-secondary-200 focus:border-primary-100 focus:shadow-sm focus:shadow-primary-100 focus:outline-none'
                />
            </div>
        </>
    );
}

export default InputField;
