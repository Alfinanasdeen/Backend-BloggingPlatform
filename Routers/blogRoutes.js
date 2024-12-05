import express from "express";
import {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
  addTagsToBlog,
  removeTagsFromBlog,
  filterBlogsByTags,
} from "../Controllers/blogController.js";
import { verifyToken } from "../Middleware.js";

const router = express.Router();

router.post("/", verifyToken, createBlog);
router.get("/", getAllBlogs);
router.get("/filter", verifyToken, filterBlogsByTags);
router.get("/:id", getBlogById);
router.put("/:id", verifyToken, updateBlog);
router.delete("/:id", verifyToken, deleteBlog);
router.patch("/:id/tags", addTagsToBlog);
router.delete("/:id/tags", removeTagsFromBlog);

export default router;
