import React from 'react';
import { FaBuilding, FaUser } from 'react-icons/fa';

function FeedTopCompanies() {
    return (
        <div className='bg-white rounded-lg shadow-md'>
            <div className='text-center border-b py-4'>
                <h1 className='text-lg font-semibold'>Top Internship</h1>
            </div>
            <div className="joblist p-4">
                <div className="jobinfo flex items-center gap-4">
                    
                    <div className="flex-grow">
                        <h3 className="text-lg font-semibold">Google</h3>
                        <p className='text-sm text-gray-600 line-clamp-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam illum veritatis dignissimos.</p>
                    </div>
                    <div className="flex items-center">
                        <FaUser className="text-primary-500" />
                        <span className="ml-1 text-gray-600">23</span>
                    </div>
                </div>
                <div className="jobinfo flex items-center gap-4">
                    
                    <div className="flex-grow">
                        <h3 className="text-lg font-semibold">Facebook</h3>
                        <p className='text-sm text-gray-600 line-clamp-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam illum veritatis dignissimos.</p>
                    </div>
                    <div className="flex items-center">
                        <FaUser className="text-primary-500" />
                        <span className="ml-1 text-gray-600">15</span>
                    </div>
                </div>
                <div className="jobinfo flex items-center gap-4">
                    
                    <div className="flex-grow">
                        <h3 className="text-lg font-semibold">Amazon</h3>
                        <p className='text-sm text-gray-600 line-clamp-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam illum veritatis dignissimos.</p>
                    </div>
                    <div className="flex items-center">
                        <FaUser className="text-primary-500" />
                        <span className="ml-1 text-gray-600">30</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeedTopCompanies;
