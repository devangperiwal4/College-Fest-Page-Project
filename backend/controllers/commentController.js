const asyncHandler = require('express-async-handler')

const Post = require('../models/postModel')
const User = require('../models/userModel')

// @desc    Get posts
// @route   GET /api/posts
// @access  Private
const getPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find()

  res.status(200).json(posts)
})

// @desc    Set post
// @route   POST /api/posts
// @access  Private
const setPost = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error('Please add a text field')
  }

  const post = await Post.create({
    text: req.body.text,
    user: req.user.id
  })

  res.status(200).json(post)
})

// @desc    Update post
// @route   PUT /api/posts/:id
// @access  Private
const updatePost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id)

  if (!post) {
    res.status(400)
    throw new Error('Post not found')
  }

  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the post user
  if (post.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  })

  res.status(200).json(updatedPost)
})

// @desc    Delete post
// @route   DELETE /api/posts/:id
// @access  Private
const deletePost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id)

  if (!post) {
    res.status(400)
    throw new Error('Post not found')
  }

  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the post user
  if (post.user.toString() !== req.user.id && req.user.access === 'attendee') {
    res.status(401)
    throw new Error('User not authorized')
  }

  await post.remove()

  res.status(200).json({ id: req.params.id })
})

// Like a comment
// POST /api/posts/:id/like
//@access Private
const likePost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id)

  if (!post) {
    res.status(400)
    throw new Error('Post not found')
  }

  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  const updatedPost = await Post.findByIdAndUpdate(
    req.params.id,
    { $inc: { likes: 1 } },
    { new: true }
  )

  res.status(200).json(updatedPost)
})

// Dislike a comment
// POST /api/posts/:id/dislike
//@access Private
const dislikePost = asyncHandler(async (req, res) => {
  const post = Post.findById(req.params.id)

  if (!post) {
    res.status(500)
    throw new Error('Post not found')
  }

  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  const updatedPost = Post.findByIdAndUpdate(
    req.params.id,
    { $inc: { dislikes: 1 } },
    { new: true }
  )

  res.json(updatedPost)
})

module.exports = {
  getPosts,
  setPost,
  updatePost,
  deletePost,
  likePost,
  dislikePost
}
