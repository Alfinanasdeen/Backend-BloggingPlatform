import express from "express";
import { addLike, removeLike } from "../Controllers/likeController.js";
import { verifyToken } from "../Middleware.js";

const router = express.Router();

router.post("/", verifyToken, addLike);
router.delete("/", verifyToken, removeLike);

export default router;
