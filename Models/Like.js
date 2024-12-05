import mongoose from "mongoose";

const likeSchema = new mongoose.Schema(
  {
    blogId: { type: mongoose.Schema.Types.ObjectId, ref: "Blog", required: true },
    user: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Like", likeSchema);
