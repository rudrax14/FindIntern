import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaThumbsUp, FaShareAlt, FaComment } from 'react-icons/fa'

const Post = ({ profileImg, username, timestamp, content, comments }) => {
    const [showComments, setShowComments] = useState(false);
    const [commentContent, setCommentContent] = useState('');

    const handleCommentInputChange = (event) => {
        setCommentContent(event.target.value);
    };

    const handleCommentSubmit = (event) => {
        event.preventDefault();
        // Here you can handle submitting the comment
        console.log("Comment submitted:", commentContent);
        // Clear the comment input field after submitting
        setCommentContent('');
    };

    return (
        <div className="flex shadow-md p-4 rounded-lg bg-white hover:shadow-lg transform transition duration-300 hover:scale-201">
            {/* Profile picture */}
            <div className="w-16 h-16 rounded-full mr-4">
                <img
                    src={profileImg}
                    alt="Profile picture"
                    width={640}
                    height={480}
                    className="object-cover rounded-full"
                />
            </div>

            {/* Content area */}
            <div className="flex-grow">
                {/* Username and timestamp */}
                <div className="text-secondary-300 font-semibold text-xl">
                    <Link to={`/profile/${username}`}>{username}</Link> • {timestamp}
                </div>

                {/* Post text */}
                <p className="text-base mb-2 text-secondary-200">{content}</p>

                {/* Engagement actions (optional) */}
                <div className="text-sm flex items-center space-x-2">
                    <FaThumbsUp className="text-gray-500 hover:text-blue-500 hover:cursor-pointer focus:outline-none" />
                    <span>1 Like</span>
                    <FaShareAlt className="text-gray-500 hover:text-blue-500 hover:cursor-pointer focus:outline-none" />
                    <span>Share</span>
                    <FaComment
                        className="text-gray-500 hover:text-blue-500 hover:cursor-pointer focus:outline-none"
                        onClick={() => setShowComments(!showComments)}
                    />
                    <span>Comment</span>
                </div>

                {/* Comments */}
                {showComments && (
                    <div className="mt-6 ">
                        {comments.map((comment, index) => (
                            <div key={index} className="flex items-start space-x-4 mb-4">
                                <div className="flex-shrink-0">
                                    <img
                                        src={comment.profileImg}
                                        alt="Profile picture"
                                        className="h-8 w-8 rounded-full"
                                    />
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-secondary-300">
                                        <Link to={`/profile/${comment.username}`}>{comment.username}</Link> • {comment.timestamp}
                                    </div>
                                    <p className="text-sm text-secondary-200">{comment.content}</p>
                                </div>
                            </div>
                        ))}
                        {/* Comment input field */}
                        <form onSubmit={handleCommentSubmit} className="mt-4">
                            <input
                                type="text"
                                placeholder="Write a comment..."
                                value={commentContent}
                                onChange={handleCommentInputChange}
                                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary-100 focus:outline-none ring-secondary-100"

                            />
                            <button
                                type="submit"
                                className="mt-2 py-2 px-4 bg-primary-200 hover:bg-primary-300 text-white rounded-lg font-bold disabled:opacity-50 disabled:cursor-not-allowed"
                                disabled={commentContent.trim() === ''}
                            >
                                Comment
                            </button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Post