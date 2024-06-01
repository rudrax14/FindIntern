import React, { useState } from 'react'
import { useSelector } from 'react-redux';

function PostForm() {
    const userDetails = useSelector((state) => state.user.userDetails);
    const [postContent, setPostContent] = useState('');
    const handleInputChange = (event) => {
        setPostContent(event.target.value);
        // console.log(postContent);
    };
    return (
        <form action="" className='post-form'>
            <div className="flex items-center px-4 py-2 bg-white rounded-lg shadow-md mb-4">
                <img
                    src={userDetails.profileImgUrl}
                    alt="Logo"
                    className="w-10 h-10 rounded-full mr-4"
                />
                <input
                    type="text"
                    placeholder="Start a post..."
                    className="w-full rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary-200 focus:outline-none"
                    value={postContent}
                    onChange={handleInputChange}
                />
                <button
                    className="ml-4 py-2 px-4 bg-primary-200 hover:bg-primary-300 text-white rounded-lg font-bold disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={postContent.trim() === ''} // Disable button if empty
                >
                    Post
                </button>
            </div>
        </form>
    )
}

export default PostForm