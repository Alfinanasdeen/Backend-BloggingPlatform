import express from "express";
import {
  addComment,
  getCommentsByBlogId,
  deleteComment,
} from "../Controllers/commentController.js";
import { verifyToken } from "../Middleware.js";

const router = express.Router();

router.post("/", verifyToken, addComment); 
router.get("/:blogId", getCommentsByBlogId);
router.delete("/:id", verifyToken, deleteComment); 

export default router;
