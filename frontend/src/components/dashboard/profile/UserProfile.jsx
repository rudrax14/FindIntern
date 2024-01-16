import React from 'react'
import wave from '../../../assets/wave.png'
function UserProfile() {
    return (
        <>
            <img
                src={wave}
                alt="illustration"
                className="absolute inset-0 z-0 object-cover w-full h-full bg-opacity-50 blur-sm"
                style={{ opacity: 0.8 }}
            />
            <div className="relative z-10 h-screen flex justify-center w-screen  " >
                <div className="login flex justify-start">

                </div>
            </div>


        </>
    )
}

export default UserProfile