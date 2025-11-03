const express = require('express');
const router = express.Router();
const blogCtrl = require('../controllers/blogController');
const { protect, adminOnly } = require('../middlewares/auth');
const upload = require('../middlewares/upload');

router.get('/', blogCtrl.getBlogs);
router.get('/:slug', blogCtrl.getBlogBySlug);

router.post('/', protect, adminOnly, upload.single('featuredImage'), blogCtrl.createBlog);
router.put('/:id', protect, adminOnly, upload.single('featuredImage'), blogCtrl.updateBlog);
router.delete('/:id', protect, adminOnly, blogCtrl.deleteBlog);

module.exports = router;
