const Blog = require('../models/Blog');
const slugify = require('slugify');

// ✅ Helper for slug creation
const createSlug = (title) => slugify(title, { lower: true, strict: true });

// ✅ CREATE Blog
exports.createBlog = async (req, res) => {
  try {
    const { title, excerpt, content, tags, author, metaTitle, metaDesc, published } = req.body;

    // 🧩 Validate required fields
    if (!title || !content) {
      return res.status(400).json({ message: "Title and content are required" });
    }

    // 🧩 Generate unique slug
    let slug = createSlug(title);
    const exists = await Blog.findOne({ slug });
    if (exists) slug = `${slug}-${Date.now()}`;

    // 🧩 Build blog object safely
    const blog = new Blog({
      title,
      slug,
      excerpt,
      content,
      tags: tags ? tags.split(',').map(t => t.trim()) : [],
      author: author || "Admin", // default fallback
      metaTitle: metaTitle || title,
      metaDesc: metaDesc || excerpt || content.slice(0, 150),
      published: published === "true" || published === true, // handles form-data strings too
      publishedAt: published ? new Date() : null,
      featuredImage: req.file ? `/uploads/${req.file.filename}` : null
    });

    await blog.save();

    return res.status(201).json({
      success: true,
      message: "Blog created successfully",
      blog
    });

  } catch (err) {
    console.error("❌ Error in createBlog:", err.message);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// ✅ GET All Blogs (Public)
exports.getBlogs = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    const query = { published: true };

    const [total, blogs] = await Promise.all([
      Blog.countDocuments(query),
      Blog.find(query)
        .sort({ publishedAt: -1, createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .select('-content')
    ]);

    res.json({ total, page, pages: Math.ceil(total / limit), blogs });
  } catch (err) {
    console.error("❌ Error in getBlogs:", err.message);
    res.status(500).json({ message: "Server error" });
  }
};

// ✅ GET Single Blog by Slug
exports.getBlogBySlug = async (req, res) => {
  try {
    const { slug } = req.params;
    const blog = await Blog.findOne({ slug, published: true });
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    res.json(blog);
  } catch (err) {
    console.error("❌ Error in getBlogBySlug:", err.message);
    res.status(500).json({ message: "Server error" });
  }
};

// ✅ UPDATE Blog
exports.updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = { ...req.body };

    if (updates.title) updates.slug = createSlug(updates.title);
    if (req.file) updates.featuredImage = `/uploads/${req.file.filename}`;
    if (updates.published) updates.publishedAt = new Date();

    const updated = await Blog.findByIdAndUpdate(id, updates, { new: true });
    if (!updated) return res.status(404).json({ message: "Blog not found" });

    res.json({ success: true, message: "Blog updated successfully", blog: updated });
  } catch (err) {
    console.error("❌ Error in updateBlog:", err.message);
    res.status(500).json({ message: "Server error" });
  }
};

// ✅ DELETE Blog
exports.deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Blog.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: "Blog not found" });

    res.json({ success: true, message: "Blog deleted successfully" });
  } catch (err) {
    console.error("❌ Error in deleteBlog:", err.message);
    res.status(500).json({ message: "Server error" });
  }
};
