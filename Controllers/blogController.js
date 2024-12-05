import Blog from "../Models/Blog.js";

/* CREATE BLOG */
export const createBlog = async (req, res) => {
  try {
    const { title, content, author } = req.body;
    const newBlog = new Blog({ title, content, author });
    const savedBlog = await newBlog.save();
    res.status(201).json(savedBlog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* READ ALL BLOGS */
export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* READ SINGLE BLOG */
export const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found." });
    res.status(200).json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* UPDATE BLOG */
export const updateBlog = async (req, res) => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedBlog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* DELETE BLOG */
export const deleteBlog = async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Blog deleted successfully." });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* ADD TAGS */
export const addTagsToBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { tags } = req.body;

    const blog = await Blog.findById(id);
    if (!blog) return res.status(404).json({ message: "Blog not found." });

    blog.tags = [...new Set([...blog.tags, ...tags])];
    const updatedBlog = await blog.save();

    res.status(200).json(updatedBlog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* REMOVE TAGS */
export const removeTagsFromBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { tags } = req.body;

    const blog = await Blog.findById(id);
    if (!blog) return res.status(404).json({ message: "Blog not found." });

    // Remove specified tags
    blog.tags = blog.tags.filter((tag) => !tags.includes(tag));
    const updatedBlog = await blog.save();

    res.status(200).json(updatedBlog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* FILTER BLOGS BY TAGS */
export const filterBlogsByTags = async (req, res) => {
  try {
    const { tags } = req.query;

    const blogs = await Blog.find({
      tags: { $all: tags.split(",") },
    });

    res.status(200).json(blogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
