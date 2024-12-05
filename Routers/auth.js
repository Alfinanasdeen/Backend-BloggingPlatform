import express from "express";
import { register, login } from "../Controllers/auth.js";
import { verifyToken, authorizeRoles } from "../Middleware.js";

const router = express.Router();

router.post("/login", login);

router.post("/register", register);

router.get(
  "/admin-only",
  verifyToken, 
  authorizeRoles(["admin"]), 
  (req, res) => {
    console.log("User Info:", req.user);
    res.status(200).json({ message: "Admin route works!" });
  }
);

export default router;
