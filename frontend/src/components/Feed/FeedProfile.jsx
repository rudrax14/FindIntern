import React from "react";
import { useSelector } from "react-redux";

function FeedProfile() {
    const userDetails = useSelector((state) => state.user.userDetails);


    return (
        <div className="border rounded-lg overflow-hidden shadow-md text-center bg-white">
            <div className="relative">
                <img className="background h-16 w-full" src="https://codescandy.com/geeks-bootstrap-5/assets/images/background/profile-bg.jpg" alt="" />
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                    <img className="rounded-full w-16 profile -mb-8" src={userDetails.profileImgUrl} alt="" />
                </div>
            </div>

            <div className="py-8 mt-2">
                <div className="border-b px-4 py-2">
                    <div className="name">
                        <h1 className="font-semibold text-lg">{userDetails.name}</h1>
                        <p className="text-sm text-gray-500">Frontend Developer</p>
                    </div>

                    <div className="email mt-2">
                        <span className="text-gray-600">{userDetails.email}</span>
                    </div>
                </div>

                <div className="border-b px-4 py-2">
                    <div className="stats">
                        <div className="flex justify-between">
                            <div className="flex flex-col items-center">
                                <span className="font-semibold text-lg">120</span>
                                <span className="text-xs text-gray-500">Posts</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="font-semibold text-lg">120</span>
                                <span className="text-xs text-gray-500">Followers</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="font-semibold text-lg">120</span>
                                <span className="text-xs text-gray-500">Following</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default FeedProfile;
