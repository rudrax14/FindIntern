const Post = require('../models/Post');
const AppError = require('../utils/AppError');
const catchAsync = require('../utils/catchAsync');



exports.createPost = catchAsync(async (req,res,next)=>{

        const { content, media } = req.body; // userId is the ID of the user creating the post
        const user = req.user.id
        // Create a new post
        const newPost = await Post.create({
          content,
          media,
          user
        });
    
        // Add the post to the user's posts array
        await User.findByIdAndUpdate(userId, {
          $push: { posts: newPost._id },
          $set: { updatedAt: Date.now() },
        });
    
        res.status(201).json({
          status: 'Success',
          data: newPost,
        });
     
      
});


exports.updatePost = catchAsync(async (req,res,next)=>{
   
       
          const postId = req.params.postId;
          const { content, media } = req.body;
          const loggedInUserId = req.user.id; // Assuming your authentication middleware sets req.user
      
          // Verify that the user updating the post is the same as the logged-in user
          const post = await Post.findById(postId);
      
          if (!post) {
            next(new AppError("Post not found",404))
          }
      
          if (post.user.toString() !== loggedInUserId) {
            return res.status(403).json({
              status: 'Error',
              message: 'Unauthorized. You do not have permission to update this post.',
            });
          }
      
          // Update the post
          const updatedPost = await Post.findByIdAndUpdate(
            postId,
            {
              $set: {
                content,
                media,
                updatedAt: Date.now(),
              },
            },
            { new: true }
          );
      
          res.status(200).json({
            status: 'Success',
            data: updatedPost,
          });
       
})

exports.toggleLike = catchAsync(async (req,res,next)=>{
    
        const postId = req.params.postId;
        const loggedInUserId = req.user.id;
    
        const post = await Post.findById(postId);
    
        if (!post) {
          return new AppError('Post not found',404);
        }
    
        // Check if the user has already liked the post
        const hasLiked = post.likes.includes(loggedInUserId);
    
        if (hasLiked) {
          // Unlike the post
          post.likes.pull(loggedInUserId);
        } else {
          // Like the post
          post.likes.push(loggedInUserId);
        }
    
        await post.save();
    
        res.status(200).json({
          status: 'Success',
          message: hasLiked ? 'Post unliked successfully' : 'Post liked successfully',
        });
    
      
})

exports.addComment = catchAsync(async(req,res,next)=>{
 
    const postId = req.params.postId;
    const { commentContent } = req.body;
    const loggedInUserId = req.user.id;

    const post = await Post.findById(postId);

    if (!post) {
      next(new AppError("Post not found"),404);
    }

    // Add a new comment to the post
    post.comments.push({
      user: loggedInUserId,
      content: commentContent,
      createdAt: Date.now(),
    });

    await post.save();

    res.status(201).json({
      status: 'Success',
      message: 'Comment added successfully',
    });
  
    
 
})


exports.removeComment = catchAsync(async (req,res,next)=>{

    const postId = req.params.postId;
    const commentId = req.params.commentId;
    const loggedInUserId = req.user.id;

    const post = await Post.findById(postId);

    if (!post) {
     next(new AppError("Post not found",404));
    }

    // Verify that the user deleting the comment is the same as the comment's author or the post owner
    const comment = post.comments.find(comment => comment._id.toString() === commentId);

    if (!comment) {
      next(new AppError("Comment not found",404));
    }

    if (comment.user.toString() !== loggedInUserId && post.user.toString() !== loggedInUserId) {
     next(new AppError('Unauthorized. You do not have permission to delete this comment.',401));
    }

    // Use $pull to remove the comment from the comments array
    await post.updateOne(
      { _id: postId },
      { $pull: { comments: { _id: comment._id } } }
    );

    res.status(200).json({
      status: 'Success',
      message: 'Comment deleted successfully',
    });
 
   
 
})