import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import api from "../api"; // 👈 backend connection
import bgHero from "../assets/modern-equipped-computer-lab.jpg";
import { XIcon, SearchIcon } from "../components/Icons"; // optional icons

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeSlug, setActiveSlug] = useState(null);
  const [query, setQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState(null);

  // ✅ Fetch blogs from backend
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await api.get("/blogs");
        setBlogs(res.data.blogs);
      } catch (err) {
        console.error("Error fetching blogs:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  const allTags = Array.from(new Set(blogs.flatMap((b) => b.tags || [])));

  const filtered = blogs.filter((b) => {
    const matchesQuery =
      query.trim() === "" ||
      b.title.toLowerCase().includes(query.toLowerCase()) ||
      b.excerpt.toLowerCase().includes(query.toLowerCase());
    const matchesTag = !selectedTag || (b.tags && b.tags.includes(selectedTag));
    return matchesQuery && matchesTag;
  });

  const activePost = blogs.find((b) => b.slug === activeSlug);

  if (loading) return <div className="text-center py-24 text-lg">Loading blogs...</div>;

  return (
    <main className="bg-gradient-to-br from-black-50 via-white to-gray-50 text-gray-900 min-h-screen">
      {/* ===== Hero Section ===== */}
      <header className="relative w-full h-[55vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${bgHero})`,
            filter: "brightness(0.5)",
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-7xl font-extrabold"
          >
            Marketflue Insights
          </motion.h1>
          <p className="mt-4 text-white/80 max-w-3xl mx-auto">
            Latest updates, trends & strategies from our team.
          </p>
        </div>
      </header>

      {/* ===== Blog List ===== */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <AnimatePresence mode="wait">
          {activePost ? (
            <motion.div
              key="post"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <article className="prose max-w-none bg-white rounded-2xl p-8 shadow-xl">
                <h2 className="text-3xl font-bold">{activePost.title}</h2>
                <p className="text-sm text-gray-500 mb-4">
                  {activePost.author} •{" "}
                  {new Date(activePost.createdAt).toLocaleDateString()}
                </p>
                {activePost.featuredImage && (
                  <img
                    src={`http://localhost:5000/uploads/${activePost.featuredImage}`}
                    alt={activePost.title}
                    className="rounded-xl mb-6"
                  />
                )}
                <div
                  className="text-gray-700"
                  dangerouslySetInnerHTML={{ __html: activePost.content }}
                />
                <button
                  onClick={() => setActiveSlug(null)}
                  className="mt-8 px-6 py-2 rounded-full border border-gray-300 bg-gray-50 hover:bg-gray-100"
                >
                  ← Back to posts
                </button>
              </article>
            </motion.div>
          ) : (
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filtered.map((b) => (
                  <motion.article
                    key={b._id}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer"
                    onClick={() => setActiveSlug(b.slug)}
                  >
                    {b.featuredImage && (
                      <img
                        src={`http://localhost:5000/uploads/${b.featuredImage}`}
                        alt={b.title}
                        className="w-full h-48 object-cover"
                      />
                    )}
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{b.title}</h3>
                      <p className="text-sm text-gray-500 mb-3">
                        {b.author} • {new Date(b.createdAt).toLocaleDateString()}
                      </p>
                      <p className="text-gray-700 line-clamp-3">{b.excerpt}</p>
                      <button className="mt-4 text-yellow-600 font-semibold">
                        Read more →
                      </button>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
