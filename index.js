import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./Database/Config.js";
import Authorization from "./Routers/auth.js"

import blogRoutes from "./Routers/blogRoutes.js";
import commentRoutes from "./Routers/commentRoutes.js";
import likeRoutes from "./Routers/likeRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

app.get("/", (req, res) => {
  res.send("welcome to Blogging Platform!");
});

app.use("/api", Authorization)
app.use("/api/blogs", blogRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/likes", likeRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is Running in Port ${PORT}`);
});
