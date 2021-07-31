const router = require('express').Router()

const {getAllPost,getSinglePost,createPost,updatePost,deletePost} = require('./PostController')


router.get('/',getAllPost)
router.get('/:id',getSinglePost)
router.post('/create',createPost)
router.put('/:id',updatePost)
router.delete('/:id',deletePost)


module.exports = router