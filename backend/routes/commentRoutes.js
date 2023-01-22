const express = require('express')
const router = express.Router()
const {getPosts, setPost, updatePost, deletePost, likePost, dislikePost} = require('../controllers/commentController')
const {protect} = require('../middleware/authMiddleware')


router.route('/').get(getPosts).post(protect, setPost)
router.route('/:id').put(protect, updatePost).delete(protect, deletePost)
router.route('/:id/like').post(protect,likePost)
router.post('/:id/dislike', protect, dislikePost)

module.exports = router
