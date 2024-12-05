import Comment from "../Models/Comment.js";

/* ADD COMMENT */
export const addComment = async (req, res) => {
  try {
    const { blogId, user, text } = req.body;
    const newComment = new Comment({ blogId, user, text });
    const savedComment = await newComment.save();
    res.status(201).json(savedComment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* GET COMMENTS BY BLOG ID */
export const getCommentsByBlogId = async (req, res) => {
  try {
    const comments = await Comment.find({ blogId: req.params.blogId });
    res.status(200).json(comments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* DELETE COMMENT */
export const deleteComment = async (req, res) => {
  try {
    await Comment.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Comment deleted successfully." });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
