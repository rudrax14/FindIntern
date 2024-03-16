import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaThumbsUp, FaShareAlt, FaComment } from 'react-icons/fa'
import Post from './Posts/Post';
import PostForm from './Posts/PostForm';


function FeedPosts() {
  



  return (
    <div className="">
      <PostForm />
      <div className="max-w-9xl mx-auto  pb-12 flex-col flex gap-4">
        {/* Individual posts */}
        <Post
          profileImg="https://codescandy.com/geeks-bootstrap-5/assets/images/avatar/avatar-4.jpg"
          username="John Doe"
          timestamp="5m ago"
          content="This is the post content. It can be a text post, an image post, or a combination of both, with basic formatting options like bold, italics, and links for a professional touch."
          comments={[
            {
              profileImg: "https://codescandy.com/geeks-bootstrap-5/assets/images/avatar/avatar-1.jpg",
              username: "Jane Doe",
              timestamp: "1h ago",
              content: "This is a comment."
            },
            {
              profileImg: "https://codescandy.com/geeks-bootstrap-5/assets/images/avatar/avatar-2.jpg",
              username: "Alice Smith",
              timestamp: "2h ago",
              content: "Another comment here."
            }
          ]}
        />
        <Post
          profileImg="https://codescandy.com/geeks-bootstrap-5/assets/images/avatar/avatar-4.jpg"
          username="John Doe"
          timestamp="5m ago"
          content="This is the post content. It can be a text post, an image post, or a combination of both, with basic formatting options like bold, italics, and links for a professional touch."
          comments={[
            {
              profileImg: "https://codescandy.com/geeks-bootstrap-5/assets/images/avatar/avatar-1.jpg",
              username: "Jane Doe",
              timestamp: "1h ago",
              content: "This is a comment."
            },
            {
              profileImg: "https://codescandy.com/geeks-bootstrap-5/assets/images/avatar/avatar-2.jpg",
              username: "Alice Smith",
              timestamp: "2h ago",
              content: "Another comment here."
            }
          ]}
        />
        <Post
          profileImg="https://codescandy.com/geeks-bootstrap-5/assets/images/avatar/avatar-4.jpg"
          username="John Doe"
          timestamp="5m ago"
          content="This is the post content. It can be a text post, an image post, or a combination of both, with basic formatting options like bold, italics, and links for a professional touch."
          comments={[
            {
              profileImg: "https://codescandy.com/geeks-bootstrap-5/assets/images/avatar/avatar-1.jpg",
              username: "Jane Doe",
              timestamp: "1h ago",
              content: "This is a comment."
            },
            {
              profileImg: "https://codescandy.com/geeks-bootstrap-5/assets/images/avatar/avatar-2.jpg",
              username: "Alice Smith",
              timestamp: "2h ago",
              content: "Another comment here."
            }
          ]}
        />
      </div>
    </div>
  );
}

export default FeedPosts;
