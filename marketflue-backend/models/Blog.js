const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
  excerpt: { type: String },
  content: { type: String, required: true },
  tags: [{ type: String }],
  author: { type: String, default: 'Admin' },
  featuredImage: { type: String },
  metaTitle: { type: String },
  metaDesc: { type: String },
  published: { type: Boolean, default: false },
  publishedAt: { type: Date },
}, { timestamps: true });

module.exports = mongoose.model('Blog', BlogSchema);
